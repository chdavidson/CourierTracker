package com.example.codeclan.demo.controllers;

import com.example.codeclan.demo.models.Expense;
import com.example.codeclan.demo.repositories.ExpenseRepository;
import com.example.codeclan.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ExpenseController {

    @Autowired
    ExpenseRepository expenseRepository;

    @GetMapping(value = "expenses")
    public ResponseEntity<List<Expense>> getExpenses(
        @RequestParam(name = "amount", required = false) double amount
    ){
        return new ResponseEntity<>(expenseRepository.findAll(), HttpStatus.OK);
    }
}
