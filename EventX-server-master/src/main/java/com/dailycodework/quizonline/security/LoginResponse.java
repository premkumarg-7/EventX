package com.dailycodework.quizonline.security;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class LoginResponse {
    String message;
    Boolean status;
    String name;


    public LoginResponse(Boolean status, String message){
        this.message=message;
        this.status=status;


    }

}
