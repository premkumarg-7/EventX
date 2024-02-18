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

    public UserDTO(int id, String username,Boolean is_admin, String email, String password ) {
        this.id = id;
        this.username = username;
        this.is_admin =is_admin;
        this.email = email;
        this.password = password;
    }

}
