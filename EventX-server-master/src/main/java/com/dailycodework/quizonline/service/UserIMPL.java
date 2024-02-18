package com.dailycodework.quizonline.service;

import com.dailycodework.quizonline.entity.Users;
import com.dailycodework.quizonline.model.LoginDTO;
import com.dailycodework.quizonline.model.UserDTO;
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
    UserDTO userDTO;
    @Override
    public LoginResponse loginUser(@NotNull LoginDTO loginDTO) {
        String msg = "";
        Users user1 = userRepo.findByEmail(loginDTO.getEmail());
        if (user1 != null) {
            Boolean admin =user1.getIs_admin();
            String password = loginDTO.getPassword();
            String encodedPassword = user1.getPassword();
            boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<Users> user = userRepo.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if (user.isPresent()) {
                    if(admin==true) {
                        return new LoginResponse("Login Success", true);
                    }else{
                        return  new LoginResponse("The User is not admin!", false);
                    }
                } else {
                    return new LoginResponse("Login Failed", false);
                }
            } else {
                return new LoginResponse("password Not Match", false);
            }
        }else {
            return new LoginResponse("Email not exits", false);
        }
    }
}
