package com.dailycodework.quizonline.service;

import com.dailycodework.quizonline.entity.Participant;
import com.dailycodework.quizonline.entity.Users;
import com.dailycodework.quizonline.model.LoginDTO;
import com.dailycodework.quizonline.model.ParticipantDTO;
import com.dailycodework.quizonline.model.UserDTO;
import com.dailycodework.quizonline.repository.ParticipantRepository;
import com.dailycodework.quizonline.repository.UserRepository;
import com.dailycodework.quizonline.security.LoginResponse;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.lang.*;

import java.util.Optional;

@Service
public class UserIMPL implements UserService{
    @Autowired
    private UserRepository userRepo;

    @Autowired
    private ParticipantRepository participantRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public String addUser(@NotNull UserDTO UserDTO) {
        Users user = new Users(
                UserDTO.getId(),
                UserDTO.getUsername(),
                UserDTO.getIs_admin(),
                UserDTO.getEmail(),
                this.passwordEncoder.encode(UserDTO.getPassword())
        );
        userRepo.save(user);
        return user.getUsername();
    }

    /**
     * @param participantDTO
     * @return
     */
    @Override
    public String addParticipant(@NotNull ParticipantDTO participantDTO) {
        Participant participant = new Participant(
                participantDTO.getId(),
                participantDTO.getUsername(),
                participantDTO.getEmail(),
                participantDTO.getCollege(),
                participantDTO.getMobile()
        );
        participantRepo.save(participant);
        System.out.println(participant.getName());
        return participant.getName();
    }

    UserDTO userDTO;
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
                       return new LoginResponse(true,
                               "Login Success");
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
