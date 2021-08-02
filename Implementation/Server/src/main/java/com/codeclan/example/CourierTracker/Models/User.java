package com.codeclan.example.CourierTracker.Models;

import java.sql.Blob;
import java.util.List;

public class User {
    Long id;
    String firstName;
    String lastName;
    String username;
    String password;
    Blob profilePicture;
    List<Payslip> earnings;
    List<Expense> expenses;
}
