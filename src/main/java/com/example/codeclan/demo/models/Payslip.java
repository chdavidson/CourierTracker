package com.example.codeclan.demo.models;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "payslips")
public class Payslip {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "amount")
    private double amount;

    @Column(name = "invoiceNo")
    private String invoiceNumber;

    @Column(name = "date")
    private Date date;

    @Column(name = "courierCompany")
    private CourierCompany companyName;

    @Lob
    @Column(name = "receiptImage")
    private byte[] image;

    @JsonIgnoreProperties({"payslip"})
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Payslip(double amount, String invoiceNumber, Date date, CourierCompany companyName, User user) {
        this.amount = amount;
        this.invoiceNumber = invoiceNumber;
        this.date = date;
        this.companyName = companyName;
        this.image = new byte[0];
        this.user = user;
    }

    public Payslip() {
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

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

    public String getInvoiceNumber() {
        return invoiceNumber;
    }

    public void setInvoiceNumber(String invoiceNumber) {
        this.invoiceNumber = invoiceNumber;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public CourierCompany getCompanyName() {
        return companyName;
    }

    public void setCompanyName(CourierCompany companyName) {
        this.companyName = companyName;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
