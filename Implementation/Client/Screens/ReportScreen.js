import React from 'react'
import {useState, useEffect, useContext} from 'react'
import { StyleSheet, ScrollView, Text, View, TouchableWithoutFeedback, Button } from 'react-native'

import ColourPalette from '../Constants/ColourPalette';

import { DbContext } from '../provider/DbProvider'
import { ChartContext } from '../provider/ChartProvider';
import PieChartComponent from '../components/charts/PieChartComponent';
import BarChartComponent from '../components/charts/BarChartComponent';
import LineChartComponent from '../components/charts/LineChartComponent';
import DateTimePicker from '@react-native-community/datetimepicker/src/datetimepicker';
import { SafeAreaView } from 'react-native-safe-area-context';
import ExpensesNodes from '../components/charts/ExpensesNodes';

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

  const [refineEnable, setRefineEnable] = useState(false)


  const db = useContext(DbContext);
  // const userData = db.currentUser
  const userData  = {
    "id":2,"firstName":"Calum", "secondName":"Davidosn", "username":"calum@calum.calum","password":"123","profilePicture":"",
    "expenses":[
      {"id":1,"amount":20,"date":"2021-08-09T18:04:37.368+00:00","receipt":"","category":"FUEL"},
      {"id":2,"amount":30,"date":"2021-07-09T18:04:37.432+00:00","receipt":"","category":"ENTERTAINMENT"},
      {"id":3,"amount":50,"date":"2021-07-09T18:04:37.435+00:00","receipt":"","category":"FOOD"},
      {"id":4,"amount":200,"date":"2021-07-09T18:04:37.440+00:00","receipt":"","category":"INSURANCE"},
      {"id":5,"amount":23,"date":"2021-06-09T18:04:37.448+00:00","receipt":"","category":"MAINTENANCE"},
      {"id":6,"amount":23,"date":"2021-06-09T18:04:37.455+00:00","receipt":"","category":"MISC"},
      {"id":6,"amount":20,"date":"2021-06-09T18:04:37.455+00:00","receipt":"","category":"ENTERTAINMENT"},
      {"id":6,"amount":5,"date":"2021-06-09T18:04:37.455+00:00","receipt":"","category":"FOOD"},
      {"id":6,"amount":40,"date":"2021-05-09T18:04:37.455+00:00","receipt":"","category":"FOOD"},
      {"id":6,"amount":28,"date":"2021-05-09T18:04:37.455+00:00","receipt":"","category":"MISC"},
      {"id":6,"amount":23,"date":"2021-05-09T18:04:37.455+00:00","receipt":"","category":"FOOD"}],
    "payslips":[
      {"id":1,"amount":300,"invoiceNumber":"123abc","date":"2021-08-09T18:04:37.458+00:00","companyName":"UBEREATS","image":""},
      {"id":2,"amount":200,"invoiceNumber":"123abc","date":"2021-08-09T18:04:37.497+00:00","companyName":"JUSTEAT","image":""},
      {"id":2,"amount":200,"invoiceNumber":"123abc","date":"2021-08-04T18:04:37.497+00:00","companyName":"UBEREATS","image":""},
      {"id":2,"amount":200,"invoiceNumber":"123abc","date":"2021-08-02T18:04:37.497+00:00","companyName":"DELIVEROO","image":""},
      {"id":2,"amount":200,"invoiceNumber":"123abc","date":"2021-08-01T18:04:37.497+00:00","companyName":"JUSTEAT","image":""},
      {"id":2,"amount":200,"invoiceNumber":"123abc","date":"2021-07-20T18:04:37.497+00:00","companyName":"UBEREATS","image":""},
      {"id":2,"amount":200,"invoiceNumber":"123abc","date":"2021-07-03T18:04:37.497+00:00","companyName":"UBEREATS","image":""},
      {"id":3,"amount":50,"invoiceNumber":"123abc","date":"2021-06-09T18:04:37.503+00:00","companyName":"DELIVEROO","image":""},
      {"id":4,"amount":38,"invoiceNumber":"123abc","date":"2021-06-03T18:04:37.507+00:00","companyName":"JUSTEAT","image":""},
      {"id":5,"amount":239,"invoiceNumber":"123abc","date":"2021-05-30T18:04:37.510+00:00","companyName":"DELIVEROO","image":""},
      {"id":6,"amount":87,"invoiceNumber":"123abc","date":"2021-05-20T18:04:37.514+00:00","companyName":"JUSTEAT","image":""},
      {"id":7,"amount":87,"invoiceNumber":"123abc","date":"2021-04-09T18:04:37.514+00:00","companyName":"DELIVEROO","image":""},
      {"id":8,"amount":87,"invoiceNumber":"123abc","date":"2021-04-04T18:04:37.514+00:00","companyName":"UBEREATS","image":""},
      {"id":9,"amount":87,"invoiceNumber":"123abc","date":"2021-03-13T18:04:37.514+00:00","companyName":"JUSTEAT","image":""},
      {"id":20,"amount":87,"invoiceNumber":"123abc","date":"2021-03-16T18:04:37.514+00:00","companyName":"DELIVEROO","image":""},
      {"id":22,"amount":87,"invoiceNumber":"123abc","date":"2021-02-02T18:04:37.514+00:00","companyName":"UBEREATS","image":""},
      {"id":22,"amount":87,"invoiceNumber":"123abc","date":"2021-02-09T18:04:37.514+00:00","companyName":"JUSTEAT","image":""},
      {"id":22,"amount":87,"invoiceNumber":"123abc","date":"2021-01-29T18:04:37.514+00:00","companyName":"DELIVEROO","image":""},
      {"id":23,"amount":87,"invoiceNumber":"123abc","date":"2021-01-09T18:04:37.514+00:00","companyName":"UBEREATS","image":""}]}
  // console.log("data: " + JSON.stringify(userData));

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

  // console.log(earningsByMonthListOfObjects)

  console?.log("From = " + dateFrom.getTime())
  console?.log("To = " + dateTo.getTime())


  const refinedPayslips = []
  const refinedExpenses = []


  useEffect(() => {



    userData.payslips.map((payslip) => {
      var slipDate = new Date(payslip.date)
      // console.log(slipDate.getTime())
    if(slipDate.getTime() > dateFrom.getTime() && slipDate.getTime() < dateTo.getTime()){
      refinedPayslips.push(payslip)
    }
  })

    userData.expenses.map((expense) => {
      var expenseDate = new Date(expense.date)
      // console.log(expenseDate.getTime())
    if(expenseDate.getTime() > dateFrom.getTime() && expenseDate.getTime() < dateTo.getTime()){
      refinedExpenses.push(expense)
    }
  })

  console.log("refined expenses = " + refinedExpenses)



    if(refineEnable == true){

      for(var i = 0; refinedPayslips.length > i; i++){
        payslipTempTotal += refinedPayslips[i].amount
      if(refinedPayslips[i].companyName == "UBEREATS"){
        uberTempTotal += refinedPayslips[i].amount
      } else if (refinedPayslips[i].companyName == "DELIVEROO"){
        deliverooTempTotal += refinedPayslips[i].amount
      } else if (refinedPayslips[i].companyName == "JUSTEAT"){
        justEatTempTotal += refinedPayslips[i].amount
      } 
    }
  
      for(var i = 0; refinedExpenses.length > i; i++){
        expenseTempTotal += refinedExpenses[i].amount
        if(refinedExpenses[i].category == "FUEL"){
          fuelTempTotal += refinedExpenses[i].amount
        } else if (refinedExpenses[i].category == "ENTERTAINMENT"){
          entertainmentTempTotal += refinedExpenses[i].amount
        } else if (refinedExpenses[i].category == "FOOD"){
          foodTempTotal += refinedExpenses[i].amount
        } else if (refinedExpenses[i].category == "INSURANCE"){
          insuranceTempTotal += refinedExpenses[i].amount
        } else if (refinedExpenses[i].category == "MAINTENANCE"){
          maintenanceTempTotal += refinedExpenses[i].amount
        } else if (refinedExpenses[i].category == "MISC"){
          miscTempTotal += refinedExpenses[i].amount
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

      

    } else {

    


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

    }

  
  }, [refineEnable, dateTo, dateFrom])


  // console.log("Total Income = " + payslipTotal + "\n")

  // console.log("Uber Total = " + uberTotal)
  // console.log("Deliveroo Total = " + deliverooTotal)
  // console.log("Just Eat Total = " + justEatTotal + "\n")

  // console.log("Total Expense = " + expenseTotal + "\n")
  // console.log("Fuel Total = " + fuelTotal)
  // console.log("Entertainment Total = " + entertainmentTotal)
  // console.log("Food Total = " + foodTotal)
  // console.log("Insurance Total = " + insuranceTotal)
  // console.log("Maintenance Total = " + maintenanceTotal)
  // console.log("Misc Total = " + miscTotal)

  const onDateFromChange = (event, selectedDate) => {
    const currentDateFrom = selectedDate;
    setDateFrom(currentDateFrom);
    console.log("date from = " + dateFrom)
  };
  const onDateToChange = (event, selectedDate) => {
    const currentDateTo = selectedDate;
    setDateTo(currentDateTo);
    console.log("date from = " + dateFrom)
  };


  return(

    <SafeAreaView>
      <ScrollView style={styles.screen}>

      <DateTimePicker onChange={onDateFromChange} textColor={'white'}  value={dateFrom}  display={"default"} />
      <DateTimePicker onChange={onDateToChange} textColor={'white'}  value={dateTo}  display={"default"} /> 
      <Button title="Refine" onPress={() => setRefineEnable(true)}></Button>
      <Button title="Clear" onPress={() => setRefineEnable(false)}></Button>

        {refineEnable ? <Text>Total Earnings Between {dateFrom.getDate()} {dateFrom.getMonth()} {dateFrom.getFullYear()} and {dateTo.getDate()} {dateTo.getMonth()} {dateTo.getFullYear()} is {payslipTotal}</Text> : null }


          <ExpensesNodes 
          expenseTotal={expenseTotal} 
          fuelTotal={fuelTotal} 
          entertainmentTotal={entertainmentTotal} 
          foodTotal={foodTotal} 
          insuranceTotal={insuranceTotal} 
          maintenanceTotal={maintenanceTotal} 
          miscTotal={miscTotal}  />

          <PieChartComponent deliverooTotal={deliverooTotal} uberTotal={uberTotal} justEatTotal={justEatTotal} />

          <View style={styles.divider}></View>

          <Text>Income vs Expenses?</Text>

          <BarChartComponent payslipTotal={payslipTotal} expenseTotal={expenseTotal}/>

          <View style={styles.divider}></View>
          <Text>Earnings across n</Text>

          <LineChartComponent />
          <View style={styles.divider}></View>


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
















