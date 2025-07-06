package com.dailycodework.quizonline.model;

import com.dailycodework.quizonline.entity.Participant;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ParticipantDTO {
    private int id;
    private String username;
    private String email;
    private String organization;
    private long mobile_no;

    public ParticipantDTO(int id, String username, String email, String organization, String mobile_no) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.organization = organization;
        this.mobile_no = Long.parseLong(mobile_no);
    }

    public ParticipantDTO(Participant p) {
        this.id = p.getId();
        this.username = p.getName();
        this.email = p.getEmail();
        this.organization = p.getOrganization();
        this.mobile_no = p.getMobile_no();
    }
}
