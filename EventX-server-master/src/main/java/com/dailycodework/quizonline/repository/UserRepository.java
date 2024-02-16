package com.dailycodework.quizonline.repository;


import com.dailycodework.quizonline.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface UserRepository extends JpaRepository<Users,Integer>
{
    Optional<Users> findOneByEmailAndPassword(String email, String password);

    Users findByEmail(String email);
}