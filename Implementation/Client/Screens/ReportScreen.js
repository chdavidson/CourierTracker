import React from 'react'
import {useState, useEffect, useContext} from 'react'
import { StyleSheet, ScrollView, Text, View, TouchableWithoutFeedback, Button } from 'react-native'

import ColourPalette from '../Constants/ColourPalette';

import { DbContext } from '../provider/DbProvider'
import PieChartComponent from '../components/charts/PieChartComponent';
import BarChartComponent from '../components/charts/BarChartComponent';
import LineChartComponent from '../components/charts/LineChartComponent';
import DateTimePicker from '@react-native-community/datetimepicker/src/datetimepicker';
import { SafeAreaView } from 'react-native-safe-area-context';

const ReportScreen = () => {

  const [dateFrom, setDateFrom] = useState(new Date())
  const [dateTo, setDateTo] = useState(new Date())
  const [payslipTotal, setPayslipTotal] = useState(0)
  const [uberTotal, setUberTotal] = useState(0)
  const [deliverooTotal, setDeliverooTotal] = useState(0)
  const [justEatTotal, setJustEatTotal] = useState(0) 
  const [expenseTotal, setExpenseTotal] = useState(0)
  const [fuelTotal, setFuelTotal] = useState(0)
  const [entertainmentTotal, setEntertainmentTotal] = useState(0)
  const [foodTotal, setFoodTotal] = useState(0)
  const [insuranceTotal, setInsuranceTotal] = useState(0)
  const [maintenanceTotal, setMaintenanceTotal] = useState(0)
  const [miscTotal, setMiscTotal] = useState(0)
//

  const db = useContext(DbContext);
  const userData = db.currentUser
  console.log("data: " + JSON.stringify(userData));

  var payslipTempTotal = 0
  var uberTempTotal = 0
  var deliverooTempTotal = 0
  var justEatTempTotal = 0 

  var expenseTempTotal = 0
  var fuelTempTotal = 0
  var entertainmentTempTotal = 0
  var foodTempTotal = 0
  var insuranceTempTotal = 0
  var maintenanceTempTotal = 0
  var miscTempTotal = 0

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

  console?.log("From = " + dateFrom)
  console?.log("To = " + dateTo)

  handleRefine = () => {
    console.log("weeners")
  }

  useEffect(() => {

    for(var i = 0; userData.payslips.length > i; i++){
      payslipTempTotal += userData.payslips[i].amount
    if(userData.payslips[i].companyName == "UBEREATS"){
      uberTempTotal += userData.payslips[i].amount
    } else if (userData.payslips[i].companyName == "DELIVEROO"){
      deliverooTempTotal += userData.payslips[i].amount
    } else if (userData.payslips[i].companyName == "JUSTEAT"){
      justEatTempTotal += userData.payslips[i].amount
    } 
  }

    for(var i = 0; userData.expenses.length > i; i++){
      expenseTempTotal += userData.expenses[i].amount
      if(userData.expenses[i].category == "FUEL"){
        fuelTempTotal += userData.expenses[i].amount
      } else if (userData.expenses[i].category == "ENTERTAINMENT"){
        entertainmentTempTotal += userData.expenses[i].amount
      } else if (userData.expenses[i].category == "FOOD"){
        foodTempTotal += userData.expenses[i].amount
      } else if (userData.expenses[i].category == "INSURANCE"){
        insuranceTempTotal += userData.expenses[i].amount
      } else if (userData.expenses[i].category == "MAINTENANCE"){
        maintenanceTempTotal += userData.expenses[i].amount
      } else if (userData.expenses[i].category == "MISC"){
        miscTempTotal += userData.expenses[i].amount
      } 
    }
    setPayslipTotal(payslipTempTotal)

    setUberTotal(uberTempTotal)
    setDeliverooTotal(deliverooTempTotal)
    setJustEatTotal(justEatTempTotal)

    setExpenseTotal(expenseTempTotal)

    setFuelTotal(fuelTempTotal)
    setEntertainmentTotal(entertainmentTempTotal)
    setFoodTotal(foodTempTotal)
    setInsuranceTotal(insuranceTempTotal)
    setMaintenanceTotal(maintenanceTempTotal)
    setMiscTotal(miscTempTotal)
  
  }, [])


  console.log("Total Income = " + payslipTotal + "\n")

  console.log("Uber Total = " + uberTotal)
  console.log("Deliveroo Total = " + deliverooTotal)
  console.log("Just Eat Total = " + justEatTotal + "\n")

  console.log("Total Expense = " + expenseTotal + "\n")
  console.log("Fuel Total = " + fuelTotal)
  console.log("Entertainment Total = " + entertainmentTotal)
  console.log("Food Total = " + foodTotal)
  console.log("Insurance Total = " + insuranceTotal)
  console.log("Maintenance Total = " + maintenanceTotal)
  console.log("Misc Total = " + miscTotal)


  return(

    <SafeAreaView>
      <ScrollView style={styles.screen}>

      <DateTimePicker onDateChange={setDateFrom} textColor={'white'}  value={new Date()}  display={"default"} />
      <DateTimePicker onDateChange={setDateTo} textColor={'white'}  value={new Date()}  display={"default"} />
      <Button title="Refine" onPress={handleRefine}></Button>

          <Text>Work Provider Comparisson?</Text>

          <PieChartComponent />

          <View style={styles.divider}></View>

          <Text>Income vs Expenses?</Text>

          <BarChartComponent/>

          <View style={styles.divider}></View>
          <Text>Earnings across n</Text>

          <LineChartComponent />

      </ScrollView>
    </SafeAreaView>
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
















