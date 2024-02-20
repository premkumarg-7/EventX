package com.dailycodework.quizonline.service;

import com.dailycodework.quizonline.model.LoginDTO;
import com.dailycodework.quizonline.model.ParticipantDTO;
import com.dailycodework.quizonline.model.UserDTO;
import com.dailycodework.quizonline.security.LoginResponse;


public interface UserService {
    String addUser (UserDTO userDTO);
    String addParticipant(ParticipantDTO participantDTO);
    LoginResponse loginUser(LoginDTO loginDTO);
}