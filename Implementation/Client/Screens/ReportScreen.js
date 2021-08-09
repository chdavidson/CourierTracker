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
  const [payslipTotal, setpayslipTotal] = useState(0)
  const [uberTotal, setuberTotal] = useState(0)
  const [deliverooTotal, setdeliverooTotal] = useState(0)
  const [justEatTotal, setjustEatTotal] = useState(0) 
  const [expenseTotal, setexpenseTotal] = useState(0)
  const [fuelTotal, setfuelTotal] = useState(0)
  const [entertainmentTotal, setentertainmentTotal] = useState(0)
  const [foodTotal, setfoodTotal] = useState(0)
  const [insuranceTotal, setinsuranceTotal] = useState(0)
  const [maintenanceTotal, setmaintenanceTotal] = useState(0)
  const [miscTotal, setmiscTotal] = useState(0)


  const db = useContext(DbContext);
  const userData = db.currentUser
  console.log("data: " + JSON.stringify(userData));

  var payslipTempTotal = 0
  var uberTempTotal = 0
  var deliverooTempTotal = 0
  var justEatTempTotal = 0 

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

  console.log("Total Income = " + payslipTempTotal + "\n")

  console.log("Uber TempTotal = " + uberTempTotal)
  console.log("Deliveroo TempTotal = " + deliverooTempTotal)
  console.log("Just Eat TempTotal = " + justEatTempTotal + "\n")

  var expenseTempTotal = 0
  var fuelTempTotal = 0
  var entertainmentTempTotal = 0
  var foodTempTotal = 0
  var insuranceTempTotal = 0
  var maintenanceTempTotal = 0
  var miscTempTotal = 0

  for(var i = 0; userData.expenses.length > i; i++){
    expenseTempTotal += userData.expenses[i].amount
  
    if(userData.expenses[i].category == "Fuel"){
      fuelTempTotal += userData.expenses[i].amount
    } else if (userData.expenses[i].category == "Entertainment"){
      entertainmentTempTotal += userData.expenses[i].amount
    } else if (userData.expenses[i].category == "Food"){
      foodTempTotal += userData.expenses[i].amount
    } else if (userData.expenses[i].category == "Insurance"){
      insuranceTempTotal += userData.expenses[i].amount
    } else if (userData.expenses[i].category == "Maintenance"){
      maintenanceTempTotal += userData.expenses[i].amount
    } else if (userData.expenses[i].category == "Misc"){
      miscTempTotal += userData.expenses[i].amount
    } 
  }

  console.log("TempTotal Expense = " + expenseTempTotal + "\n")
  console.log("Fuel TempTotal = " + fuelTempTotal)
  console.log("Entertainment TempTotal = " + entertainmentTempTotal)
  console.log("Food TempTotal = " + foodTempTotal)
  console.log("Insurance TempTotal = " + insuranceTempTotal)
  console.log("Maintenance TempTotal = " + maintenanceTempTotal)
  console.log("Misc TempTotal = " + miscTempTotal)


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
















