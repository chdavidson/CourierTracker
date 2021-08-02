package com.codeclan.example.CourierTracker.Models;

import com.codeclan.example.CourierTracker.Components.ExpenseCategory;

import java.sql.Blob;
import java.util.Date;

public class Expense {
    Long id;
    Double amount;
    Date date;
    Blob proofOfPurchase;
    ExpenseCategory category;
}
