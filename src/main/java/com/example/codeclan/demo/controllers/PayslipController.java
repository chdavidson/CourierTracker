package com.example.codeclan.demo.controllers;

import com.example.codeclan.demo.models.Payslip;
import com.example.codeclan.demo.models.User;
import com.example.codeclan.demo.repositories.PayslipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PayslipController {

    @Autowired
    PayslipRepository payslipRepository;

    @GetMapping(value = "/payslips")
    public ResponseEntity<List<Payslip>> getPayslips(){
        return new ResponseEntity<>(payslipRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "payslips/{id}")
    public ResponseEntity getPayslip(@PathVariable Long id){
        return new ResponseEntity(payslipRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/payslips")
    public ResponseEntity<Payslip> postPayslip(@RequestBody Payslip payslip){
        payslipRepository.save(payslip);
        return new ResponseEntity<>(payslip, HttpStatus.CREATED);
    }

    @PutMapping(value = "/payslips/{id}")
    public ResponseEntity<Payslip> updatePayslip(@PathVariable Long id, @RequestBody Payslip payslip) {
        Payslip newPayslip = payslipRepository.findById(id).get();
        newPayslip.setAmount(payslip.getAmount());
        newPayslip.setInvoiceNumber(payslip.getInvoiceNumber());
        newPayslip.setDate(payslip.getDate());
        newPayslip.setCompanyName(payslip.getCompanyName());
        payslipRepository.save(newPayslip);
        return new ResponseEntity<>(newPayslip, HttpStatus.ACCEPTED);
    }
}
