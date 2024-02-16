package com.dailycodework.quizonline.security;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class LoginResponse {
    String message;
   Boolean status;

    public LoginResponse(String message, Boolean status){
        this.message=message;
        this.status=status;
    }

}
