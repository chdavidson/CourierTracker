package com.example.codeclan.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "expenses")
public class Expense {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "amount")
    private double amount;

    @Column(name = "date")
    private Date date;

    @Lob
    @Column(name = "receipt")
    private byte[] receipt;
    private ExpenseCategory category;

    @JsonIgnoreProperties({"expenses"})
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Expense(double amount, Date date, ExpenseCategory category, User user) {
        this.amount = amount;
        this.date = date;
        this.receipt = new byte[0];
        this.category = category;
        this.user = user;
    }

    public Expense() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public byte[] getReceipt() {
        return receipt;
    }

    public void setReceipt(byte[] receipt) {
        this.receipt = receipt;
    }

    public String getCategory() {
        return category.getCategory();
    }

    public void setCategory(ExpenseCategory category) {
        this.category = category;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}

