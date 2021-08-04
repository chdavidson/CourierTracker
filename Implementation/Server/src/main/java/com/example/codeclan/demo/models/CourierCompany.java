package com.example.codeclan.demo.models;

public enum CourierCompany {

    UBEREATS("Uber Eats"),
    JUSTEAT("Just Eat"),
    DELIVEROO("Deliveroo");

    private String courierName;

    CourierCompany(String courierName) {
        this.courierName = courierName;
    }

    public String getCourierName() {
        return courierName;
    }
}
