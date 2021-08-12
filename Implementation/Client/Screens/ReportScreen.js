import React from 'react'
import {useState, useEffect, useContext} from 'react'
import { StyleSheet, ScrollView, Text, View, TouchableOpacity, Button } from 'react-native'
import { COLORS, SIZES, FONTS, icons, images, dummyData } from '../Constants';

import ColourPalette from '../Constants/ColourPalette';

import { DbContext } from '../provider/DbProvider'
import PieChartComponent from '../components/charts/PieChartComponent';
import BarChartComponent from '../components/charts/BarChartComponent';
import LineChartComponent from '../components/charts/LineChartComponent';
import DateTimePicker from '@react-native-community/datetimepicker/src/datetimepicker';
import { SafeAreaView } from 'react-native-safe-area-context';
import ExpensesNodes from '../components/charts/ExpensesNodes';
import RefineBarChartExpensesComponent from '../components/charts/RefineBarChartExpensesComponent';
import RefineBarChartPayslipComponent from '../components/charts/RefineBarChartPayslipComponent';
import LineChartIncomeComponent from '../components/charts/LineChartIncomeComponent';
import { Icon } from 'react-native-elements'

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

  const [refinedSlipsState, setRefinedSlips] = useState([])
  const [refinedExpensesState, setRefinedExpenses] = useState([])

  const [refineEnable, setRefineEnable] = useState(false)

  const [expenseViewEnable, setExpenseViewEnable] = useState(false)
  const [incomeViewEnable, setIncomeViewEnable] = useState(false)
  


  const db = useContext(DbContext);
  const useerData = db.currentUser
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
      {"id":1,"amount":245.27,"invoiceNumber":"123abc","date":"2021-08-09T18:04:37.458+00:00","companyName":"UBEREATS","image":""},
      {"id":2,"amount":150.45,"invoiceNumber":"123abc","date":"2021-08-09T18:04:37.497+00:00","companyName":"JUSTEAT","image":""},
      {"id":2,"amount":37.38,"invoiceNumber":"123abc","date":"2021-08-04T18:04:37.497+00:00","companyName":"UBEREATS","image":""},
      {"id":2,"amount":182.34,"invoiceNumber":"123abc","date":"2021-08-02T18:04:37.497+00:00","companyName":"DELIVEROO","image":""},
      {"id":2,"amount":420.23,"invoiceNumber":"123abc","date":"2021-08-01T18:04:37.497+00:00","companyName":"JUSTEAT","image":""},
      {"id":2,"amount":200.00,"invoiceNumber":"123abc","date":"2021-07-20T18:04:37.497+00:00","companyName":"UBEREATS","image":""},
      {"id":2,"amount":133.33,"invoiceNumber":"123abc","date":"2021-07-03T18:04:37.497+00:00","companyName":"UBEREATS","image":""},
      {"id":3,"amount":50,"invoiceNumber":"123abc","date":"2021-06-09T18:04:37.503+00:00","companyName":"DELIVEROO","image":""},
      {"id":4,"amount":38,"invoiceNumber":"123abc","date":"2021-06-03T18:04:37.507+00:00","companyName":"JUSTEAT","image":""},
      {"id":5,"amount":239,"invoiceNumber":"123abc","date":"2021-05-30T18:04:37.510+00:00","companyName":"DELIVEROO","image":""},
      {"id":6,"amount":87,"invoiceNumber":"123abc","date":"2021-05-20T18:04:37.514+00:00","companyName":"JUSTEAT","image":""},
      {"id":7,"amount":248.34,"invoiceNumber":"123abc","date":"2021-04-09T18:04:37.514+00:00","companyName":"DELIVEROO","image":""},
      {"id":8,"amount":87.24,"invoiceNumber":"123abc","date":"2021-04-04T18:04:37.514+00:00","companyName":"UBEREATS","image":""},
      {"id":9,"amount":140.34,"invoiceNumber":"123abc","date":"2021-03-13T18:04:37.514+00:00","companyName":"JUSTEAT","image":""},
      {"id":20,"amount":95.45,"invoiceNumber":"123abc","date":"2021-03-16T18:04:37.514+00:00","companyName":"DELIVEROO","image":""},
      {"id":22,"amount":34.34,"invoiceNumber":"123abc","date":"2021-02-02T18:04:37.514+00:00","companyName":"UBEREATS","image":""},
      {"id":22,"amount":9.23,"invoiceNumber":"123abc","date":"2021-02-09T18:04:37.514+00:00","companyName":"JUSTEAT","image":""},
      {"id":22,"amount":395.95,"invoiceNumber":"123abc","date":"2021-01-29T18:04:37.514+00:00","companyName":"DELIVEROO","image":""},
      {"id":23,"amount":60.67,"invoiceNumber":"123abc","date":"2021-01-09T18:04:37.514+00:00","companyName":"UBEREATS","image":""}]}
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


  var refinedPayslips = []
  var refinedExpenses = []
  var allSlips = []

  useEffect(() => {

    userData.payslips.map((payslip) => {
      allSlips.push(payslip)
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

      setRefinedSlips(refinedPayslips)
      setRefinedExpenses(refinedExpenses)

      

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
      <View style={styles.totalShowContainer}> 
          <Text style={styles.totalShow}>
            £{payslipTotal}
          </Text>
        </View>
      <View style={{  justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            height: 90,
            ...styles.shadow
        }}>
      <TouchableOpacity
                style={{
                    width: 170,
                    paddingVertical: SIZES.padding,
                    paddingHorizontal: SIZES.padding,
                    // marginLeft: index === 0 ? SIZES.padding : 0,
                    marginRight: SIZES.radius,
                    borderRadius: 10,
                    backgroundColor: COLORS.primary,
                    justifyContent: 'center',
                    alignItems: 'center'


                }}
                onPress={() => {setIncomeViewEnable(true); setExpenseViewEnable(false)}}
            >
            <Text style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: 'white',

                }}>
                    Income
                </Text>
            </TouchableOpacity>
      <TouchableOpacity
                style={{
                    width: 170,
                    paddingVertical: SIZES.padding,
                    paddingHorizontal: SIZES.padding,
                    // marginLeft: index === 0 ? SIZES.padding : 0,
                    marginRight: SIZES.radius,
                    borderRadius: 10,
                    backgroundColor: COLORS.primary,
                    justifyContent: 'center',
                    alignItems: 'center'


                }}
                onPress={() => {setIncomeViewEnable(false); setExpenseViewEnable(true)}}
            >
            <Text style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: 'white',
                }}>
                    Expenses
                </Text>
            </TouchableOpacity>
            </View>
      <View style={styles.refineContainer}>

        <DateTimePicker onChange={onDateFromChange} textColor={'white'}  value={dateFrom}  display={"default"} style={styles.datePicker}/>
        <View style={{alignSelf: 'flex-start'}}>
          <Icon
              name='code-outline'
              type='ionicon'
              color='#7F5DF0'
              size={50}
              style={[styles.nodeIcon], {alignSelf: 'center'}}
          />
        </View>
        <DateTimePicker onChange={onDateToChange} textColor={'white'}  value={dateTo}  display={"default"} style={styles.datePicker}/> 
      </View>
      

      <View style={styles.refineButtonContainer}>
      {refineEnable ?  
        <>
          
            <View style={styles.dateShowContainer}>
              <Text style={styles.dateShow}>
                {dateFrom.getDate()}/{dateFrom.getMonth()}/{dateFrom.getFullYear()}
              </Text>

            <Icon
              name='close-circle-outline'
              type='ionicon'
              color='#7F5DF0'
              size={50}
              style={[styles.nodeIcon]}
              onPress={() => setRefineEnable(false)}
            />   

              <Text style={styles.dateShow}>
                {dateTo.getDate()}/{dateTo.getMonth()}/{dateTo.getFullYear()}
              </Text> 
            </View>

        </> : 
        <Icon
            name='checkmark-circle-outline'
            type='ionicon'
            color='#7F5DF0'
            size={50}
            style={[styles.nodeIcon]}
            onPress={() => setRefineEnable(true)}
        />       
      }
                
                    

      </View>
      
       

        {refineEnable ? 
        <>
        

        
        {incomeViewEnable ? <RefineBarChartPayslipComponent refinedSlipsState={refinedSlipsState}/> : null}
        
        {expenseViewEnable ? <RefineBarChartExpensesComponent refinedExpensesState={refinedExpensesState}/> : null}
        </>    
        : null }

       

          {expenseViewEnable ? 
          <>
            <ExpensesNodes 
            expenseTotal={expenseTotal} 
            fuelTotal={fuelTotal} 
            entertainmentTotal={entertainmentTotal} 
            foodTotal={foodTotal} 
            insuranceTotal={insuranceTotal} 
            maintenanceTotal={maintenanceTotal} 
            miscTotal={miscTotal}  /> 

            <LineChartComponent refinedExpensesState={refinedExpensesState}/>
          </>
          
          
          : null }

          {incomeViewEnable ? 

          <>
          
            <PieChartComponent deliverooTotal={deliverooTotal} uberTotal={uberTotal} justEatTotal={justEatTotal} />

            <LineChartIncomeComponent refinedSlipsState={refinedSlipsState}/>
          </>

            
     
          
          : null}


          <BarChartComponent payslipTotal={payslipTotal} expenseTotal={expenseTotal}/>
         

          
          <View style={styles.divider}></View>


      </ScrollView>
    </SafeAreaView>
)}

const styles = StyleSheet.create({
    screen:{
        backgroundColor: ColourPalette.SECONDARY
    },
    divider:{
        borderBottomColor: "#7f5df0",
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
    },
    refineContainer: {
      // backgroundColor: "dodgerblue",
      flex: 1,
      padding: 20,
      flexDirection: 'row',
      flexWrap: "wrap",
      justifyContent: "space-evenly"
    },
    refineButtonContainer: {
      // backgroundColor: "dodgerblue",
      flex: 1,
      padding: 20,
      flexDirection: 'row',
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      marginTop: -30,

    },
    datePicker: {
      width: 100,
      height: 50,
      top: 15,
      left: 10, 
    },
    dateShow: {
      fontSize: 25,
      color: "#7F5DF0"
    },
    dateShowContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: 'space-around',
      alignItems: 'center',

    },
    totalShow: {
      fontSize: 40,
      color: "#7F5DF0",
      marginTop: 30
    },
    totalShowContainer: {
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: 20,

    },
    nodeIcon: {
    },
    shadow: {
      shadowColor: COLORS.primary,
      shadowOffset: {
          width: 0,
          height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5
  }
})

export default ReportScreen;
