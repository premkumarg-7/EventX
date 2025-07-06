package com.dailycodework.quizonline.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "participants")
public class Participant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Use IDENTITY for auto-increment
    private int id;

    @Column(name = "username", length = 255)
    private String name;

    @Column(name = "email", length = 255)
    private String email;

    @Column(name = "organization", length = 255)
    private String organization;

    @Column(name = "mobile_no", length = 20)
    private long mobile_no;

    @OneToMany(mappedBy = "participant", cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    private List<ParticipantMarks> marksList;

    public Participant() {
    }

    public Participant(String name, String email, String organization, long mobile_no) {
        this.name = name;
        this.email = email;
        this.organization = organization;
        this.mobile_no = mobile_no;
    }
}
