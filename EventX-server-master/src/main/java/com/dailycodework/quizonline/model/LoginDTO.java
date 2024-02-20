package com.dailycodework.quizonline.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginDTO {
    private String email;
    private String password;


    public LoginDTO(String email, String password ) {
        this.email = email;
        this.password = password;

    }
}
