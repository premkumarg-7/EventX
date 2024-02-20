package com.dailycodework.quizonline.repository;

import com.dailycodework.quizonline.entity.Participant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
@Repository
public interface ParticipantRepository extends JpaRepository<Participant,Integer> {
}
