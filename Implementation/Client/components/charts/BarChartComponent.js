import React from 'react'
import { StyleSheet, ScrollView, Text, View, TouchableWithoutFeedback } from 'react-native'
import {
    BarChart,
  } from "react-native-chart-kit";

import { Dimensions } from "react-native";
import ColourPalette from '../../Constants/ColourPalette';


const BarChartComponent = ({payslipTotal, expenseTotal}) => {

    const screenWidth = Dimensions.get("window").width;

    const data = {
        labels: ["Income", "Expenses"],
        datasets: [
        {
            data: [payslipTotal, expenseTotal]
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

export default BarChartComponent
