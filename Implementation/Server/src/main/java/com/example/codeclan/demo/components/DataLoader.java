package com.example.codeclan.demo.components;

import com.example.codeclan.demo.models.*;
import com.example.codeclan.demo.repositories.ExpenseRepository;
import com.example.codeclan.demo.repositories.PayslipRepository;
import com.example.codeclan.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

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

        Expense expense1 = new Expense(20.00, new Date(),  ExpenseCategory.FUEL, saad);
        expenseRepository.save(expense1);

        Payslip uber = new Payslip(300.00, "123abc", new Date(), CourierCompany.UBEREATS, calum);
        payslipRepository.save(uber);

        Payslip uber2 = new Payslip(300.00, "123abc", new Date(), CourierCompany.UBEREATS, calum);
        payslipRepository.save(uber2);

        Expense expense2 =  new Expense(55.21, new Date(), ExpenseCategory.FUEL, calum);
        expenseRepository.save(expense2);


    }
}
