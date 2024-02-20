package com.dailycodework.quizonline.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ParticipantDTO {
    private int id;
    private String username;
    private String email;
    private String college;
    private int mobile;

    public ParticipantDTO(int id, String username, String email, String college, int mobile) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.college = college;
        this.mobile = mobile;
    }
}
