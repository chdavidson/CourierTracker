import React from 'react'
import {
    PieChart,
  } from "react-native-chart-kit";
  import { StyleSheet, ScrollView, Text, View, TouchableWithoutFeedback } from 'react-native'


import { Dimensions } from "react-native";
import ColourPalette from '../../Constants/ColourPalette';

const PieChartComponent = ({uberTotal, deliverooTotal, justEatTotal}) => {

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
      earnings: deliverooTotal,
      color: ColourPalette.DELIVEROO,
      legendFontColor: "#7F7F7F",
      legendFontSize: 12
    },
    {
      name: "JustEat",
      earnings: justEatTotal,
      color: ColourPalette.JUSTEAT,
      legendFontColor: "#7F7F7F",
      legendFontSize: 12
    },
    {
      name: "UberEats",
      earnings: uberTotal,
      color: ColourPalette.UBER,
      legendFontColor: "#7F7F7F",
      legendFontSize: 12
    }
  ];

    return (
        <View>
            <Text>Pie Chart</Text>    
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
        </View>
    )
}

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

export default PieChartComponent
