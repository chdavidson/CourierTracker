import React, {useState, useContext, useEffect} from 'react'
import { StyleSheet, View, Button, TextInput, Text } from 'react-native'
import { DbContext } from "../provider/DbProvider";
import CameraComponent from '../components/CameraComponent'
import { Dimensions } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { counterEvent } from 'react-native/Libraries/Performance/Systrace';
import Request from '../helpers/request';

const RecordItemScreen = () => {

    const db = useContext(DbContext);
    const currentUser = db.currentUser

    let currentDate = new Date();



    const [expenseModal, setExpenseModal] = useState(false);
    const [earningModal, setEarningModal] = useState(false);
    // const [newPayslip, setNewPayslip] = useState({  "amount": 0.0,
    //                                                 "invoiceNumber": null,
    //                                                 "date": '',
    //                                                 "courierName": 'UBEREATS',
    //                                                 "image": [],
    //                                                 "user": {
    //                                                     "id": currentUser.id,
    //                                                     "firstName": currentUser.firstName,
    //                                                     "secondName": currentUser.secondName,
    //                                                     "username": currentUser.username,
    //                                                     "password": currentUser.password,
    //                                                     "profilePicture": currentUser.profilePicture,
    //                                                 }    
    //                                             })
    const [newPayslip, setNewPayslip] = useState({  "amount": 0.0,
                                                    "invoiceNumber": null,
                                                    "date": '',
                                                    "courierName": 'UBEREATS',
                                                    "image": [],
                                                    "user": {
                                                        "id": null,
                                                        "firstName": null,
                                                        "secondName": null,
                                                        "username": null,
                                                        "password": null,
                                                        "profilePicture": null,
                                                    }    
                                                })

    const handleDateChange = (event, date) => {
        newPayslip["date"] = date;
    }

    const handleInvChange = (event) => {
        newPayslip["invoiceNumber"] = event.nativeEvent.text;
    }

    const handleAmountChange = (event) => {
        newPayslip["amount"] = event.nativeEvent.text;
    }

    const handlePhoto = (photoURI) => {
        newPayslip["image"] = photoURI;
        console.log(newPayslip);
    }

    useEffect(() => {
        currentDate = Date.now();
    }, [])

    const handlePOST = (path, payload) => {
            const request = new Request();
            request.post(path, payload)
    }

    

    
    return(
    <View style={styles.screen}>
        <View>
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
                <Button title={"TEST POST"} onPress={() => handlePOST('payslips', newPayslip)}/>
            </View>
            
            <View style={styles.buttonContainer}>
                <Button title={"Record Earnings"} onPress={() => setEarningModal(!earningModal)}/>
            </View>
        </View>
        <View style={styles.CameraViewContainer}>
            <CameraComponent handlePhoto={handlePhoto}/>
        </View>
    </View>
)}

const styles = StyleSheet.create({
    CameraViewContainer:{
        height: 300,
        // width: 200
    },
    buttonContainer: {
        height: 100
    }

})

export default RecordItemScreen;