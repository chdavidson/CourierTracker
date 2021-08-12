import React from 'react'
import { View } from 'react-native'
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
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    
                }}
                verticalLabelRotation={0}
                fromZero={true}
                style={{marginLeft: 10}}
            />
        </View>
    )
}

export default BarChartComponent
