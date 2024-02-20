package com.dailycodework.quizonline.controller;

import com.dailycodework.quizonline.model.LoginDTO;
import com.dailycodework.quizonline.model.ParticipantDTO;
import com.dailycodework.quizonline.model.UserDTO;
import com.dailycodework.quizonline.security.LoginResponse;
import com.dailycodework.quizonline.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("api/v1/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping(path = "/save")
    public String saveUser(@RequestBody UserDTO userDTO){
        String id=userService.addUser(userDTO);
        return id;
    }
    @PostMapping(path = "/participant_save")
    public  String saveParticipant(@RequestBody ParticipantDTO participantDTO)
    {
        String id=userService.addParticipant(participantDTO);
        return id;
    }
    @PostMapping (path = "/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO) {
        LoginResponse loginResponse = userService.loginUser(loginDTO);
        return  ResponseEntity.ok(loginResponse);
    }

}
