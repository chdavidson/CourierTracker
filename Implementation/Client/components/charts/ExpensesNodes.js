import React from 'react'
import { StyleSheet, ScrollView, Text, View, TouchableWithoutFeedback, useColorScheme } from 'react-native'
import {
    BarChart,
  } from "react-native-chart-kit";

import { Dimensions } from "react-native";
import { Icon } from 'react-native-elements'

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
        <>
        {/* <Text style={[styles.nodeText]}>£{expenseTotal}</Text> */}
        
        <View style={[styles.container]}>
           
            <View style={[styles.node]}>
            <Icon
                    name='ios-color-fill'
                    type='ionicon'
                    color='#7F5DF0'
                    size={50}
                    style={[styles.nodeIcon]}
                />
                <Text style={[styles.nodeText]}>£{fuelTotal}</Text>
            </View>
            <View style={[styles.node]}>
            <Icon
                    name='ios-film'
                    type='ionicon'
                    color='#7F5DF0'
                    size={50}
                    style={[styles.nodeIcon]}
                />
                <Text style={[styles.nodeText]}>£{entertainmentTotal}</Text>
            </View>
            <View style={[styles.node]}>
            <Icon
                    name='ios-pizza'
                    type='ionicon'
                    color='#7F5DF0'
                    size={50}
                    style={[styles.nodeIcon]}
                />
                <Text style={[styles.nodeText]}>£{foodTotal}</Text>
            </View>
            <View style={[styles.node]}>
            <Icon
                    name='ios-car'
                    type='ionicon'
                    color='#7F5DF0'
                    size={50}
                    style={[styles.nodeIcon]}
                />
                <Text style={[styles.nodeText]}>£{insuranceTotal}</Text>
            </View>
            <View style={[styles.node]}>
            <Icon
                    name='ios-construct'
                    type='ionicon'
                    color='#7F5DF0'
                    size={50}
                    style={[styles.nodeIcon]}
                />
                <Text style={[styles.nodeText]}>£{maintenanceTotal}</Text>
            </View>
            <View style={[styles.node]}>
            <Icon
                    name='ios-paw'
                    type='ionicon'
                    color='#7F5DF0'
                    size={50}
                    style={[styles.nodeIcon]}
                />
                <Text style={[styles.nodeText]}>£{miscTotal}</Text>
            </View>
        </View>
        </>
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
        // backgroundColor: 'dodgerblue',
        margin: 10
    },
    nodeText: {
        top: 0,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    
    bgCircle: {
        height: 60,
        width: 60,
        backgroundColor: "hotpink",
        left: 5,
        bottom: 70,
        borderRadius: 30,
       
    },
    nodeIcon: {
        color: 'dodgerblue',
        
    }

  });

export default ExpensesNodes
