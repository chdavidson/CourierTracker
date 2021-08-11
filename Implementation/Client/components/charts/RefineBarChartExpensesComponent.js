import React from 'react'
import { StyleSheet, ScrollView, Text, View, TouchableWithoutFeedback } from 'react-native'
import {
    BarChart,
  } from "react-native-chart-kit";

import { Dimensions } from "react-native";
import ColourPalette from '../../Constants/ColourPalette';
import { AutoFocus } from 'expo-camera/build/Camera.types';


const RefineBarChartExpensesComponent = ({refinedExpensesState}) => {

    // console.log(refinedExpensesState)

    const assignedLabels = []
    const assignedData = []

   
    refinedExpensesState.map((expense) => 
    
        {
            const newExpenseDate = new Date(expense.date)
            // console.log("new date log = " + newExpenseDate.getDate());
            
            assignedLabels.push((newExpenseDate.getDate() + "/" + newExpenseDate.getMonth())); 
            assignedData.push(expense.amount)})
        
    

    // console.log("data = " + assignedData)
    // console.log("labels = " + assignedLabels)

    if(assignedLabels.length > 6){
        assignedLabels.length = 6
    }
    if(assignedData.length > 6){
        assignedData.length = 6
    }

    assignedData.reverse()
    assignedLabels.reverse()


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
            {/* <Text style={{marginLeft: "auto", marginRight: "auto"}}>Recent Expenses</Text> */}
            <BarChart
                // style={graphStyle}
                data={data}
                width={screenWidth - 20}
                height={250}
                yAxisLabel="£"
                chartConfig={{
                //     backgroundGradientFrom: "rgba(255,255,255)",
                //     backgroundGradientTo: "rgba(255,255,255)",
                    backgroundGradientFromOpacity: 0,
                    backgroundGradientToOpacity: 0,

                    fillGradientFrom:'rgba(127, 93, 240, 1)',
                    fillShadowGradient:'rgba(127, 93, 240, 1)',
                    fillShadowGradientOpacity: 1,
                
                    color: (opacity = 0.5) => `rgba(127, 93, 240, ${opacity})`,        // Tips of bars
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,   // Labels x&y
                    
                }}
                verticalLabelRotation={0}
                fromZero={true}
            />
        </View>
    )
}

export default RefineBarChartExpensesComponent



