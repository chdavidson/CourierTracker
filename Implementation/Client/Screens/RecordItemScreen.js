import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import CameraComponent from '../components/CameraComponent'
import { Dimensions } from "react-native";

const RecordItemScreen = () => {return(
    <View style={styles.screen}>
        <View style={styles.uiContainer}>
            <Text>FORM STUFF</Text>
        </View>
        <View style={styles.CameraViewContainer}>
            <CameraComponent/>
        </View>
    </View>
)}

const styles = StyleSheet.create({
    CameraViewContainer:{
        height: 500
    },
    uiContainer: {
        height: 100
    }

})

export default RecordItemScreen;