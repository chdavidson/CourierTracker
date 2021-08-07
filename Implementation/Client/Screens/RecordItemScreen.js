import React, {useState, useContext, useEffect} from 'react'
import { StyleSheet, View, Button, TextInput, Text } from 'react-native'
import { DbContext } from "../provider/DbProvider";
import CameraComponent from '../components/CameraComponent'
import { Dimensions } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { counterEvent } from 'react-native/Libraries/Performance/Systrace';

const RecordItemScreen = () => {

    const db = useContext(DbContext);
    const currentUser = db.currentUser

    let currentDate = new Date();



    const [expenseModal, setExpenseModal] = useState(false);
    const [earningModal, setEarningModal] = useState(false);
    const [newPayslip, setNewPayslip] = useState({  "amount": 0.0,
                                                    "invoiceNumber": null,
                                                    "date": '',
                                                    "courierName": '',
                                                    "image": [],
                                                    "user": currentUser     })

    const handleDateChange = (event, date) => {
        newPayslip["date"] = date;
    }

    const handleInvChange = (event) => {
        newPayslip["invoiceNumber"] = event.nativeEvent.text;
    }

    const handleAmountChange = (event) => {
        newPayslip["amount"] = event.nativeEvent.text;
    }

    useEffect(() => {
        currentDate = Date.now();
    }, [])

    

    
    return(
    <View style={styles.screen}>
        <View>
            <Text>Amount: </Text>
            <TextInput
            keyboardType={'decimal-pad'}
            placeholder={'0.0'}
            onChange={handleAmountChange}
            />
        </View>
        <View>
            <Text>Invoice #: </Text>
            <TextInput
            name={'invoiceNumber'}
            keyboardType={'default'}
            placeholder={'###'}
            onChange={handleInvChange}
            />
        </View>
        <View>
            <Text>Work Provider: </Text>
        </View>
        <View>
        <DateTimePicker
            value={ currentDate }
            is24Hour={true}
            display="default"
            onChange={handleDateChange}
        />
        </View>
        <View>
            <Button title={"Take photo"}/>
        </View>
        
        <View style={styles.buttonContainer}>
            <Button title={"Record Earnings"} onPress={() => setEarningModal(!earningModal)}/>
        </View>
        <View style={styles.CameraComponent}>
            <CameraComponent />
        </View>
    </View>
)}

const styles = StyleSheet.create({
    CameraViewContainer:{
        height: 200,
        width: 200
    },
    buttonContainer: {
        height: 100
    }

})

export default RecordItemScreen;