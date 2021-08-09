import React from 'react'
import { StyleSheet, ScrollView, Text, View, TouchableWithoutFeedback } from 'react-native'
import {
    LineChart,
  } from "react-native-chart-kit";

import { Dimensions } from "react-native";

const LineChartComponent = () => {
    const screenWidth = Dimensions.get("window").width;

  const chartConfig = {
    backgroundGradientFrom: "white",
    backgroundGradientFromOpacity: 1,

    backgroundGradientToOpacity: 1,
    backgroundGradientTo: "white",
    // backgroundGradientToOpacity: 0.5,

    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
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



    return (
        <View>
            <Text>Lines Chart</Text>
            <LineChart
            data={moreData}
            width={screenWidth}
            height={256}
            verticalLabelRotation={30}
            chartConfig={chartConfig}
            // bezier
        />
        </View>
    )
}

export default LineChartComponent
