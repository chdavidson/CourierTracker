package com.example.codeclan.demo.models;

public enum ExpenseCategory {

    FUEL("Fuel"),
    MAINTENANCE("Maintenance"),
    FOOD("Food"),
    INSURANCE("Insurance"),
    ENTERTAINMENT("Entertainment"),
    MISC("Misc");

    private final String category;

    ExpenseCategory(String category) {
        this.category = category;
    }

    public String getCategory() {
        return category;
    }
}
