import React from 'react'
import { StyleSheet, ScrollView, Text, View } from 'react-native'
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

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
    // backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    // backgroundGradientTo: "#08130D",
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

const ReportScreen = () => {return(
    <ScrollView style={styles.screen}>
        <Text>Work Provider Comparisson?</Text>
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

                fillShadowGradient:'dodgerblue',
                fillShadowGradientOpacity:1,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,        // Tips of bars
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
    }
})

export default ReportScreen;