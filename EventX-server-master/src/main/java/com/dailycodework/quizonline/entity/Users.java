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
        @Column(name = "username", length = 255)
        private String username;
        @Column(name = "email", length = 255)
        private String email;
        @Column(name = "password", length = 255)
        private String password;

        public Users() {
        }

        public Users(int id, String username, String email, String password) {
            this.id = id;
            this.username = username;
            this.email = email;
            this.password = password;
        }

}
