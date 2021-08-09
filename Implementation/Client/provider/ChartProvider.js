import React, { createContext, useContext, useState, useEffect } from 'react';
import * as firebase from 'firebase';
const ChartContext = createContext();

import { DbContext } from '../provider/DbProvider'

const ChartProvider = (props) => {

    const db = useContext(DbContext);
    // console.log("db: " + db)
    const userData = db.currentUser
    
    // console.log("data for chart: " + JSON.stringify(userData));
    
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

    useEffect(()=>{
        if(userData){
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
    }
    }, [userData])

  earningsByMonthListOfObjects.length > 0 ? console.log(earningsByMonthListOfObjects) : null

  console?.log("From = " + dateFrom)
  console?.log("To = " + dateTo)

//   handleRefine = () => {
//     console.log("weeners")
//   }

  useEffect(() => {

    if(userData){for(var i = 0; userData.payslips.length > i; i++){
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
    setMiscTotal(miscTempTotal)}
  
  }, [userData])


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

    return (
        <ChartContext.Provider
        value = {{
            dateFrom,
            setDateFrom,
            dateTo,
            setDateTo,
            payslipTotal,
            uberTotal,
            deliverooTotal,
            justEatTotal,
            expenseTotal,
            fuelTotal,
            entertainmentTotal,
            foodTotal,
            insuranceTotal,
            maintenanceTotal,
            miscTotal
        }}
        >
            {props.children}
        </ChartContext.Provider>
    )
}

export { ChartContext, ChartProvider };
