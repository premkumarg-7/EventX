package com.dailycodework.quizonline.service;

import com.dailycodework.quizonline.entity.Participant;
import com.dailycodework.quizonline.entity.ParticipantMarks;
import com.dailycodework.quizonline.entity.Users;
import com.dailycodework.quizonline.model.LoginDTO;
import com.dailycodework.quizonline.model.ParticipantDTO;
import com.dailycodework.quizonline.model.ParticipantMarksDTO;
import com.dailycodework.quizonline.model.UserDTO;
import com.dailycodework.quizonline.repository.ParticipantMarksRepository;
import com.dailycodework.quizonline.repository.ParticipantRepository;
import com.dailycodework.quizonline.repository.UserRepository;
import com.dailycodework.quizonline.security.LoginResponse;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.lang.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class UserIMPL implements UserService{
    @Autowired
    private UserRepository userRepo;

    @Autowired
    private ParticipantRepository participantRepo;

    @Autowired
    private ParticipantMarksRepository participantMarksRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    private final Map<String,String> otpStorage = new HashMap<>();
    @Override
    public int addUser(@NotNull UserDTO UserDTO) {
        Users user = new Users(
                UserDTO.getId(),
                UserDTO.getUsername(),
                UserDTO.getIs_admin(),
                UserDTO.getEmail(),
                this.passwordEncoder.encode(UserDTO.getPassword())
        );
        userRepo.save(user);
        return user.getId();
    }

    /**
     * @param participantDTO
     * @return
     */
    @Override
    public Participant addParticipant(ParticipantDTO participantDTO) {
        Participant participant = new Participant(
                participantDTO.getUsername(),
                participantDTO.getEmail(),
                participantDTO.getOrganization(),
                participantDTO.getMobile_no()
        );
        participantRepo.save(participant);
        System.out.println(participant.getMobile_no());
        return participant;
    }

    @Override
    public ResponseEntity<String> saveMarks(ParticipantMarksDTO participantMarksDTO) {
        try {
            // 1. Find participant by ID
            Optional<Participant> participantOptional = participantRepo.findById(participantMarksDTO.getUserId());
            if (participantOptional.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body("Participant with ID " + participantMarksDTO.getUserId() + " not found");
            }

            Participant participant = participantOptional.get();

            // 2. Create and populate marks entity
            ParticipantMarks participantMarks = new ParticipantMarks(
                    participantMarksDTO.getObtained_marks(),
                    participantMarksDTO.getTotal_marks(),
                    participantMarksDTO.getPercentage(),
                    participant,
                    participantMarksDTO.getSubject()
            );

            // 3. Save to DB
            participantMarksRepo.save(participantMarks);

            // 4. Return success
            return ResponseEntity.ok("Successfully saved the marks");

        } catch (Exception e) {
            e.printStackTrace(); // okay for dev, remove in production
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Something went wrong while saving marks");
        }
    }

    public String getOTP(){
        int otp = (int)(Math.random() * 900000) + 100000;
        return String.valueOf(otp);
    }


    @Override
    public Participant getParticipant(int id) {
        Optional<Participant> participantOptional = participantRepo.findById(id);
        if (participantOptional.isEmpty()) {
            throw new RuntimeException("User not found");
        }
        return participantOptional.get();
    }

    @Override
    public LoginResponse loginUser(@NotNull LoginDTO loginDTO) {
        String msg = "";
        Users user1 = userRepo.findByEmail(loginDTO.getEmail());
        String Name =user1.getUsername();
        if (user1 != null) {
            Boolean admin =user1.getIs_admin();
            String password = loginDTO.getPassword();
            String encodedPassword = user1.getPassword();
            boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<Users> user = userRepo.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if (user.isPresent()) {
                    if(admin==true) {
                        System.out.println(Name);
                       return new LoginResponse(true, "Login Success");
                    }else{
                        return  new LoginResponse(false, "The User is not admin!");
                    }
                } else {
                    return new LoginResponse(false, "Login Failed");
                }
            } else {
                return new LoginResponse(false, "password Not Match");
            }
        }else {
            return new LoginResponse(false, "Email not exits");
        }
    }
}
