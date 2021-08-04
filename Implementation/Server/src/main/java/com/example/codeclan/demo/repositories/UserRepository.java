package com.example.codeclan.demo.repositories;

import com.example.codeclan.demo.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
