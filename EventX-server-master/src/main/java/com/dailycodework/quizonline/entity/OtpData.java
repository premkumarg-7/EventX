package com.dailycodework.quizonline.entity;

import lombok.Getter;

import java.time.Instant;


@Getter
public class OtpData {
    private String otp;
    private Instant timestamp;

    public OtpData(String otp, Instant timestamp) {
        this.otp = otp;
        this.timestamp = timestamp;
    }

}
