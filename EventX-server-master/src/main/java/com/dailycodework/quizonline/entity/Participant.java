package com.dailycodework.quizonline.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "participants")
public class Participant {
    @Id
    @Column(name = "id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "username",length = 255,nullable = false)
    private String name;
    @Column(name = "email",length = 255,nullable = false)
    private String email;
    @Column(name = "college",length = 255,nullable = false)
    private String college;
    @Column(name = "mobile",length = 25)
    private int mobile;
    public Participant() {

    }

    public Participant(int id, String name, String email, String college, int mobile) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.college = college;
        this.mobile = mobile;
    }


}
