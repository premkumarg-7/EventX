package com.dailycodework.quizonline.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ParticipantMarksDTO {
    private String subject;
    private int obtained_marks;
    private int total_marks;
    private float percentage;
    private int userId;

    public ParticipantMarksDTO(int userId, int obtained_marks, int total_marks, float percentage, String subject) {
        this.obtained_marks = obtained_marks;
        this.total_marks = total_marks;
        this.percentage = percentage;
        this.userId = userId;
        this.subject = subject;
    }

}
