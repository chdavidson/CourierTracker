import React from 'react'
import { StyleSheet, ScrollView, Text, View, TouchableWithoutFeedback } from 'react-native'
import {
    BarChart,
  } from "react-native-chart-kit";

import { Dimensions } from "react-native";
import ColourPalette from '../../Constants/ColourPalette';


const ExpensesNodes = ({
    expenseTotal, 
    fuelTotal, 
    entertainmentTotal, 
    foodTotal, 
    insuranceTotal, 
    maintenanceTotal, 
    miscTotal
}) => {

    

    return (
        <View style={[styles.container]}>
            <View style={[styles.node]}>
                <Text style={[styles.nodeText]}>£{expenseTotal}</Text>
            </View>
            <View style={[styles.node]}>
                <Text style={[styles.nodeText]}>£{fuelTotal}</Text>
            </View>
            <View style={[styles.node]}>
                <Text style={[styles.nodeText]}>£{entertainmentTotal}</Text>
            </View>
            <View style={[styles.node]}>
                <Text style={[styles.nodeText]}>£{foodTotal}</Text>
            </View>
            <View style={[styles.node]}>
                <Text style={[styles.nodeText]}>£{insuranceTotal}</Text>
            </View>
            <View style={[styles.node]}>
                <Text style={[styles.nodeText]}>£{maintenanceTotal}</Text>
            </View>
            <View style={[styles.node]}>
                <Text style={[styles.nodeText]}>£{miscTotal}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: "space-evenly"
     
    },
    node: {
        height: 70,
        width: 70,
        padding: 0,
        backgroundColor: 'dodgerblue',
        margin: 10
    },
    nodeText: {
        top: 70,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
  });

export default ExpensesNodes
