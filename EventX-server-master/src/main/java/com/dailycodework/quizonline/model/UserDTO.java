package com.dailycodework.quizonline.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO {
    private int id;
    private String username;
    private Boolean is_admin;
    private String email;
    private String password;
    private String otp;

    public UserDTO(int id, String username,Boolean is_admin, String email, String password, String otp) {
        this.id = id;
        this.username = username;
        this.is_admin =is_admin;
        this.email = email;
        this.password = password;
        this.otp = otp;
    }

}
