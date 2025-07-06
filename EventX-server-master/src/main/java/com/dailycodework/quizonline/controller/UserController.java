package com.dailycodework.quizonline.controller;

import com.dailycodework.quizonline.entity.Participant;
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

}
