package com.example.codeclan.demo.repositories;

import com.example.codeclan.demo.models.Payslip;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PayslipRepository extends JpaRepository<Payslip, Long> {
}
