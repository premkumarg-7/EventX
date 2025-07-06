package com.dailycodework.quizonline.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "participant_marks")
public class ParticipantMarks {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Use IDENTITY for auto-increment
    private Long id;

    @Column(name = "obtained_marks")
    private int obtainedMarks;

    @Column(name = "total_marks")
    private int totalMarks;

    @Column(name = "percentage")
    private float percentage;

    @Column(name = "subject", length = 255)
    private String subject;

    @ManyToOne
    @JoinColumn(name = "participant_id", nullable = false) // Foreign key
    private Participant participant;

    public ParticipantMarks() {
    }

    public ParticipantMarks(int obtainedMarks, int totalMarks, float percentage, Participant participant, String subject) {
        this.obtainedMarks = obtainedMarks;
        this.totalMarks = totalMarks;
        this.percentage = percentage;
        this.participant = participant;
        this.subject = subject;
    }
}
