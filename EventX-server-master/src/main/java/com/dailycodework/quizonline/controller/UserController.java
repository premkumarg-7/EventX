package com.dailycodework.quizonline.controller;

import com.dailycodework.quizonline.entity.Participant;
import com.dailycodework.quizonline.model.LoginDTO;
import com.dailycodework.quizonline.model.ParticipantDTO;
import com.dailycodework.quizonline.model.UserDTO;
import com.dailycodework.quizonline.security.LoginResponse;
import com.dailycodework.quizonline.service.OtpService;
import com.dailycodework.quizonline.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("api/v1/user")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private OtpService otpService;

    @PostMapping(path = "/save")
    public int saveUser(@RequestBody UserDTO userDTO){
        int id=userService.addUser(userDTO);
        return id;
    }
    @PostMapping(path = "/participant_save")
    public Participant saveParticipant(@RequestBody ParticipantDTO participantDTO)
    {
        Participant participant=userService.addParticipant(participantDTO);
        System.out.println(participant.getId());
        System.out.println(participant.getName());
        return participant;
    }
    @PostMapping (path = "/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO) {
        LoginResponse loginResponse = userService.loginUser(loginDTO);
        return  ResponseEntity.ok(loginResponse);
    }

    @PostMapping(path = "/send-otp")
    public ResponseEntity<?> SendOtp(@RequestBody UserDTO userDTO){
        boolean status = otpService.sendOtp(userDTO.getEmail());
        if(status){
            return ResponseEntity.ok("OTP sent Successfully");
        }else {
            return ResponseEntity.status(500).body("Failed to send otp");
        }
    }

    @PostMapping(path = "/verify-otp")
    public ResponseEntity<?> verifyOtp(@RequestBody UserDTO userDTO){
        boolean isvalid = otpService.verifyOtp(userDTO.getEmail(),userDTO.getOtp());
        if(isvalid){
            otpService.clearOtp(userDTO.getEmail());
            return ResponseEntity.ok("OTP verified Successfully");
        }
        else {
            return ResponseEntity.status(400).body("Invalid or Expired OTP");
        }
    }


}
