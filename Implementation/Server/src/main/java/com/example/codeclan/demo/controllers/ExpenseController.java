package com.example.codeclan.demo.controllers;

import com.example.codeclan.demo.models.Expense;
import com.example.codeclan.demo.models.User;
import com.example.codeclan.demo.repositories.ExpenseRepository;
import com.example.codeclan.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ExpenseController {

    @Autowired
    ExpenseRepository expenseRepository;

    @GetMapping(value = "/expenses")
    public ResponseEntity<List<Expense>> getExpenses(
        @RequestParam(name = "amount", required = false) double amount
    ){
        return new ResponseEntity<>(expenseRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping(value = "/expenses")
    public ResponseEntity<User> postExpense(@RequestBody Expense expense){
        expenseRepository.save(expense);
        return new ResponseEntity(expense, HttpStatus.CREATED);
    }

    @PutMapping(value = "/expenses/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody Expense expense){
        Expense currentExpense = expenseRepository.findById(id).get();
        currentExpense.setAmount(expense.getAmount());
        currentExpense.setDate(expense.getDate());
        currentExpense.setReceipt(expense.getReceipt());
        currentExpense.setCategory(expense.getCategory());
        currentExpense.setUser(expense.getUser());
        expenseRepository.save(currentExpense);
        return new ResponseEntity(currentExpense, HttpStatus.ACCEPTED);
    }
}
