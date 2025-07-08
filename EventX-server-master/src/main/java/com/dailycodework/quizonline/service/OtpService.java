package com.dailycodework.quizonline.service;

import com.dailycodework.quizonline.entity.OtpData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.MailException;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class OtpService {

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private UserService userService;

    private final Map<String, OtpData> otpStorage = new ConcurrentHashMap<String,OtpData>();
    private static final long EXPIRATION_TIME_MS = 5 * 60 * 1000;

    public boolean sendOtp(String email) {
        String otp = userService.getOTP();
        Instant timestamp = Instant.now();

        otpStorage.put(email,new OtpData(otp,timestamp));

        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(email);
            message.setSubject("Your OTP Code");
            message.setText("Your OTP Code :"+otp);
            mailSender.send(message);
            return true;
        }
        catch (MailException e) {
            e.printStackTrace();
            return false;
        }
    }

    public boolean verifyOtp(String email, String otp) {
        OtpData otpData = otpStorage.get(email);

        if (otpData == null) return false;

        boolean notExpired = Instant.now().minusMillis(EXPIRATION_TIME_MS).isBefore(otpData.getTimestamp());

        if(!notExpired) clearOtp(email);

        return notExpired && otpData.getOtp().equals(otp);
    }
    public void clearOtp(String email) {
        otpStorage.remove(email);
    }

}
