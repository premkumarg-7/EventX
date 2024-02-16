package com.dailycodework.quizonline.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO {
    private int id;
    private String username;
    private String email;
    private String password;
    public UserDTO() {
    }
    public UserDTO(int id, String username, String email, String password) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
    }
}
