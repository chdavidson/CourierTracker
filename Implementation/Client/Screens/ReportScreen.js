import React from 'react'
import {useState, useEffect, useContext} from 'react'
import { StyleSheet, ScrollView, Text, View, TouchableWithoutFeedback } from 'react-native'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

import { Dimensions } from "react-native";
import ColourPalette from '../Constants/ColourPalette';

import { DbContext } from '../provider/DbProvider'

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

  const screenWidth = Dimensions.get("window").width;

  const chartConfig = {
    backgroundGradientFrom: "black",
    backgroundGradientFromOpacity: 1,

    backgroundGradientToOpacity: 1,
    backgroundGradientTo: "black",
    // backgroundGradientToOpacity: 0.5,

    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  const sampleData = [
    {
      name: "Deliveroo",
      earnings: 300,
      color: ColourPalette.DELIVEROO,
      legendFontColor: "#7F7F7F",
      legendFontSize: 12
    },
    {
      name: "JustEat",
      earnings: 620,
      color: ColourPalette.JUSTEAT,
      legendFontColor: "#7F7F7F",
      legendFontSize: 12
    },
    {
      name: "UberEats",
      earnings: 110,
      color: ColourPalette.UBER,
      legendFontColor: "#7F7F7F",
      legendFontSize: 12
    }
  ];

  const data = {
    labels: ["Income", "Expenses"],
    datasets: [
      {
        data: [2001, 380]
      }
    ]
  };

  const moreData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
    datasets: [
      {
        data: [2000, 1845, 1228, 1980, 899, 1743],
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Fat Stacks"] // optional
  };


  
  


  return(
    <ScrollView style={styles.screen}>
        <Text>Work Provider Comparisson?</Text>
        <Text>{payslipTotal}</Text>
        <PieChart
            data={sampleData}
            width={screenWidth}
            height={200}
            chartConfig={chartConfig}
            accessor={"earnings"}
            backgroundColor={"transparent"}
            paddingLeft={"40"}
            // center={[10, 50]}
        />
        <View style={styles.circle}></View>
        <View style={styles.divider}></View>
        <Text>Income vs Expenses?</Text>
        <BarChart
            // style={graphStyle}
            data={data}
            width={screenWidth}
            height={250}
            yAxisLabel="£"
            chartConfig={{
            //     backgroundGradientFrom: "rgba(255,255,255)",
            //     backgroundGradientTo: "rgba(255,255,255)",
                backgroundGradientFromOpacity: 0,
                backgroundGradientToOpacity: 0,

                fillGradientFrom:'dodgerblue',
                fillShadowGradient:'dodgerblue',
                fillShadowGradientOpacity: 1,
              
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,        // Tips of bars
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,   // Labels x&y
                
            }}
            verticalLabelRotation={0}
            fromZero={true}
        />
        <View style={styles.divider}></View>
        <Text>Earnings across n</Text>
        <LineChart
            data={moreData}
            width={screenWidth}
            height={256}
            verticalLabelRotation={30}
            chartConfig={chartConfig}
            // bezier
        />
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