package com.dailycodework.quizonline.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name="users")
public class Users {

        @Id
        @Column(name = "id", length = 45)
        @GeneratedValue(strategy = GenerationType.AUTO)
        private int id;
        @Column(name = "username", length = 255 ,nullable = false)
        private String username;
        @Column(name = "is_admin", nullable = false)
        private Boolean is_admin;
        @Column(name = "email", length = 255)
        private String email;
        @Column(name = "password", length = 255)
        private String password;

        public Users(int id, String username, Boolean is_admin ,String email, String password) {
            this.id = id;
            this.username = username;
            this.is_admin =is_admin;
            this.email = email;
            this.password = password;
        }


    public Users() {

    }
}
