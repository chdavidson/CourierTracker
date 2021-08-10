import React from 'react'
import { StyleSheet, ScrollView, Text, View, TouchableWithoutFeedback } from 'react-native'
import {
    BarChart,
  } from "react-native-chart-kit";

import { Dimensions } from "react-native";
import ColourPalette from '../../Constants/ColourPalette';


const RefineBarChartComponent = ({payslipTotal, expenseTotal, refinedExpensesState}) => {

    console.log(refinedExpensesState)

    const assignedLabels = []
    const assignedData = []

   
    refinedExpensesState.map((expense) => 
    
        {
            console.log("new date log = " + new Date(expense.date));
            assignedLabels.push(new Date(expense.date)); 
            assignedData.push(expense.amount)})
        
    

    console.log("data = " + assignedData)
    console.log("labels = " + assignedLabels)
    

  

    const screenWidth = Dimensions.get("window").width;

    const data = {
        labels: assignedLabels,
        datasets: [
        {
            data: assignedData
        }
        ]
    };

    return (
        <View>
            <Text>Bar Chart</Text>
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
        </View>
    )
}

export default RefineBarChartComponent
