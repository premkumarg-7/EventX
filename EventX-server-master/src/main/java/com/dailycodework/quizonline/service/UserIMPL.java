package com.dailycodework.quizonline.service;

import com.dailycodework.quizonline.entity.Users;
import com.dailycodework.quizonline.model.LoginDTO;
import com.dailycodework.quizonline.model.UserDTO;
import com.dailycodework.quizonline.repository.UserRepository;
import com.dailycodework.quizonline.security.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserIMPL implements UserService{
    @Autowired
    private UserRepository userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public String addUser(UserDTO UserDTO) {
        Users user = new Users(
                UserDTO.getId(),
                UserDTO.getUsername(),
                UserDTO.getEmail(),
                this.passwordEncoder.encode(UserDTO.getPassword())
        );
        userRepo.save(user);
        return user.getUsername();
    }
    UserDTO userDTO;
    @Override
    public LoginResponse loginUser(LoginDTO loginDTO) {
        String msg = "";
        Users user1 = userRepo.findByEmail(loginDTO.getEmail());
        if (user1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = user1.getPassword();
            boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<Users> employee = userRepo.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if (employee.isPresent()) {
                    return new LoginResponse("Login Success", true);
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
