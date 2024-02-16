package com.dailycodework.quizonline.service;

import com.dailycodework.quizonline.model.LoginDTO;
import com.dailycodework.quizonline.model.UserDTO;
import com.dailycodework.quizonline.security.LoginResponse;


public interface UserService {
    String addUser (UserDTO userDTO);
    LoginResponse loginUser(LoginDTO loginDTO);
}