package com.dailycodework.quizonline.service;

import com.dailycodework.quizonline.entity.Participant;
import com.dailycodework.quizonline.model.LoginDTO;
import com.dailycodework.quizonline.model.ParticipantDTO;
import com.dailycodework.quizonline.model.ParticipantMarksDTO;
import com.dailycodework.quizonline.model.UserDTO;
import com.dailycodework.quizonline.security.LoginResponse;
import org.springframework.http.ResponseEntity;


public interface UserService {
    int addUser (UserDTO userDTO);
    Participant addParticipant(ParticipantDTO participantDTO);
    ResponseEntity<String> saveMarks(ParticipantMarksDTO participantMarksDTO);
    LoginResponse loginUser(LoginDTO loginDTO);
    Participant getParticipant(int id);
    String getOTP();
}