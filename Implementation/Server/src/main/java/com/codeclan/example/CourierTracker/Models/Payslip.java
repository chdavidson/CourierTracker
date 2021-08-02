package com.codeclan.example.CourierTracker.Models;

import com.codeclan.example.CourierTracker.Components.WorkProvider;

import java.util.Date;
import java.util.HashMap;

public class Payslip {
    Long id;
    HashMap<Date, Date> dateRange;          //Start Date : End Date
    String invoiceNo;
    Double amount;
    WorkProvider workProvider;
}
