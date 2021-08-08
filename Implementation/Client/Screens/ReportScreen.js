import React from 'react'
import {useState, useEffect, useContext} from 'react'
import { StyleSheet, ScrollView, Text, View, TouchableWithoutFeedback } from 'react-native'

import ColourPalette from '../Constants/ColourPalette';

import { DbContext } from '../provider/DbProvider'
import PieChartComponent from '../components/charts/PieChartComponent';
import BarChartComponent from '../components/charts/BarChartComponent';
import LineChartComponent from '../components/charts/LineChartComponent';

const ReportScreen = () => {

  const db = useContext(DbContext);
  const userData = db.currentUser
  console.log("data: " + JSON.stringify(userData));

  var payslipTotal = 0
  var uberTotal = 0
  var deliverooTotal = 0
  var justEatTotal = 0 

  for(var i = 0; userData.payslips.length > i; i++){
    payslipTotal += userData.payslips[i].amount
    if(userData.payslips[i].companyName == "UBEREATS"){
      uberTotal += userData.payslips[i].amount
    } else if (userData.payslips[i].companyName == "DELIVEROO"){
      deliverooTotal += userData.payslips[i].amount
    } else if (userData.payslips[i].companyName == "JUSTEAT"){
      justEatTotal += userData.payslips[i].amount
    } 
  }

  console.log("Total Income = " + payslipTotal + "\n")

  console.log("Uber Total = " + uberTotal)
  console.log("Deliveroo Total = " + deliverooTotal)
  console.log("Just Eat Total = " + justEatTotal + "\n")

  var expenseTotal = 0
  var fuelTotal = 0
  var entertainmentTotal = 0
  var foodTotal = 0
  var insuranceTotal = 0
  var maintenanceTotal = 0
  var miscTotal = 0

  for(var i = 0; userData.expenses.length > i; i++){
    expenseTotal += userData.expenses[i].amount
  
    if(userData.expenses[i].category == "Fuel"){
      fuelTotal += userData.expenses[i].amount
    } else if (userData.expenses[i].category == "Entertainment"){
      entertainmentTotal += userData.expenses[i].amount
    } else if (userData.expenses[i].category == "Food"){
      foodTotal += userData.expenses[i].amount
    } else if (userData.expenses[i].category == "Insurance"){
      insuranceTotal += userData.expenses[i].amount
    } else if (userData.expenses[i].category == "Maintenance"){
      maintenanceTotal += userData.expenses[i].amount
    } else if (userData.expenses[i].category == "Misc"){
      miscTotal += userData.expenses[i].amount
    } 
  }

  console.log("Total Expense = " + expenseTotal + "\n")
  console.log("Fuel Total = " + fuelTotal)
  console.log("Entertainment Total = " + entertainmentTotal)
  console.log("Food Total = " + foodTotal)
  console.log("Insurance Total = " + insuranceTotal)
  console.log("Maintenance Total = " + maintenanceTotal)
  console.log("Misc Total = " + miscTotal)


  var earningsByMonthListOfObjects = []; 

  for(var i = 0; userData.payslips.length > i; i++){
    
    var earningsDate = new Date(userData.payslips[i].date)
    var earningsByMonthObject = {
      day: earningsDate.getDate(),
      month: earningsDate.getMonth(),
      year: earningsDate.getFullYear(),
      amount: userData.payslips[i].amount
    }
    earningsByMonthListOfObjects.push(earningsByMonthObject)
  
  }

  console.log(earningsByMonthListOfObjects)

  



  return(
    <ScrollView style={styles.screen}>

        <Text>Work Provider Comparisson?</Text>

        <Text>{payslipTotal}</Text>

        <PieChartComponent uberTotal={uberTotal} deliverooTotal={deliverooTotal} justEatTotal={justEatTotal}/>

        <View style={styles.divider}></View>

        <Text>Income vs Expenses?</Text>

        <BarChartComponent payslipTotal={payslipTotal} expenseTotal={expenseTotal}/>

        <View style={styles.divider}></View>
        <Text>Earnings across n</Text>

        <LineChartComponent />

    </ScrollView>
)}

const styles = StyleSheet.create({
    screen:{
        backgroundColor: ColourPalette.SECONDARY
    },
    divider:{
        borderBottomColor: ColourPalette.PRIMARY,
        borderBottomWidth: 2,
        paddingVertical: 10
    },
    circle:{
        backgroundColor: "white",
        position: "relative",
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 50,
        marginLeft: "auto",
        marginRight: "auto",
        right: 63,
        bottom: 150,
        marginBottom: -130
    }
})

export default ReportScreen;

