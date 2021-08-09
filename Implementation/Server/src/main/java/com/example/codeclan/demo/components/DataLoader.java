package com.example.codeclan.demo.components;

import com.example.codeclan.demo.models.*;
import com.example.codeclan.demo.repositories.ExpenseRepository;
import com.example.codeclan.demo.repositories.PayslipRepository;
import com.example.codeclan.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.text.DateFormat;
import java.time.LocalDate;
import java.util.Date;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    ExpenseRepository expenseRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    PayslipRepository payslipRepository;

    public DataLoader() {}

    public void run(ApplicationArguments args){
        User saad = new User("Saad", "Tariq", "test@test.test", "123");
        User calum = new User("Calum", "Davidosn", "calum@calum.calum", "123");
        User michael = new User("Michael", "Chirstie", "mikeySB", "123");
        userRepository.save(saad);
        userRepository.save(calum);
        userRepository.save(michael);

        Expense expense1 = new Expense(20.00, new Date(),  ExpenseCategory.FUEL, calum);
        expenseRepository.save(expense1);
        Expense expense2 = new Expense(30.00, new Date(),  ExpenseCategory.ENTERTAINMENT, calum);
        expenseRepository.save(expense2);
        Expense expense3 = new Expense(50.00, new Date(),  ExpenseCategory.FOOD, calum);
        expenseRepository.save(expense3);
        Expense expense4 = new Expense(5.00, new Date(),  ExpenseCategory.INSURANCE, calum);
        expenseRepository.save(expense4);
        Expense expense5 = new Expense(23.00, new Date(),  ExpenseCategory.MAINTENANCE, calum);
        expenseRepository.save(expense5);
        Expense expense6 = new Expense(23.00, new Date(),  ExpenseCategory.MISC, calum);
        expenseRepository.save(expense6);

        Payslip uber = new Payslip(300.00, "123abc", new Date(), CourierCompany.UBEREATS, calum);
        payslipRepository.save(uber);

        Payslip uber2 = new Payslip(200.00, "123abc", new Date(), CourierCompany.UBEREATS, calum);
        payslipRepository.save(uber2);
        Payslip justEat = new Payslip(50.00, "123abc", new Date(), CourierCompany.JUSTEAT, calum);
        payslipRepository.save(justEat);
        Payslip justEat2 = new Payslip(38.00, "123abc", new Date(), CourierCompany.JUSTEAT, calum);
        payslipRepository.save(justEat2);
        Payslip deliveroo = new Payslip(239.00, "123abc", new Date(), CourierCompany.DELIVEROO, calum);
        payslipRepository.save(deliveroo);
        Payslip deliveroo2 = new Payslip(87.00, "123abc", new Date(), CourierCompany.DELIVEROO, calum);
        payslipRepository.save(deliveroo2);


    }
}
