package com.dailycodework.quizonline;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class QuizOnlineApplication {

    public static void main(String[] args) throws Exception{
        SpringApplication.run(QuizOnlineApplication.class, args);
    }

}
