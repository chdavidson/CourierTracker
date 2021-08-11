import React from 'react'
import { StyleSheet, ScrollView, Text, View, TouchableWithoutFeedback } from 'react-native'
import {
    LineChart,
  } from "react-native-chart-kit";

import { Dimensions } from "react-native";

const LineChartComponent = ({refinedExpensesState}) => {

    const assignedLabels = [1, 2, 3, 4]
    const assignedData = [33, 234, 33, 33]

    console.log(refinedExpensesState)

    var currentObject = {
      0: 0, 
      1 : 0,
      2 : 0,
      3 : 0,
      4 : 0,
      5 : 0,
      6 : 0,
      7 : 0,
      8 : 0,
      9 : 0,
      10 : 0,
      11 : 0,
    }
   
    refinedExpensesState.map((expense) => 
    
        {          
            const newExpenseDate = new Date(expense.date)
            console.log(newExpenseDate.getMonth())
            console.log(expense.amount)

            currentObject[newExpenseDate.getMonth()] += expense.amount 

            // console.log("new date log = " + newExpenseDate.getDate());
            assignedLabels.push((newExpenseDate.getDate() + "/" + newExpenseDate.getMonth())); 
            assignedData.push(expense.amount)})

            console.log(currentObject)
        
    

    // console.log("data = " + assignedData)
    // console.log("labels = " + assignedLabels)

    if(assignedLabels.length > 6){
        assignedLabels.length = 6
    }
    if(assignedData.length > 6){
        assignedData.length = 6
    }

    // const formattedMonth = () => {
    //   for(const month in currentObject){

    //   }
    // }

    assignedData.reverse()
    assignedLabels.reverse()

    let assignedMonths = [0,0,0,0,0,0,0,0,0,0,0,0]

    assignedMonths = Object.values(currentObject)
    console.log(assignedMonths)






    const screenWidth = Dimensions.get("window").width;

  const chartConfig = {
    backgroundGradientFrom: "white",
    backgroundGradientFromOpacity: 1,

    backgroundGradientToOpacity: 1,
    backgroundGradientTo: "white",
    // backgroundGradientToOpacity: 0.5,
    fillGradientFrom:'rgba(127, 93, 240, 1)',
    fillShadowGradient:'rgba(127, 93, 240, 1)',
    fillShadowGradientOpacity: 1,

    color: (opacity = 0.5) => `rgba(127, 93, 240, ${opacity})`,        // Tips of bars
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };



  const moreData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
    datasets: [
      {
        data: [...assignedMonths],
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    // legend: ["Fat Stacks"] 
  };



    return (
        <View>
            {/* <Text>Lines Chart</Text> */}
            <LineChart
            data={moreData}
            width={screenWidth}
            height={256}
            verticalLabelRotation={30}
            chartConfig={chartConfig}
            bezier={true}
        />
        </View>
    )
}

export default LineChartComponent
