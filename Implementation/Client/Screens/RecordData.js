import React, {useState, useContext, useEffect} from 'react'
import {View, StyleSheet, Text, Picker, ScrollView, TouchableOpacity, TextInput, SafeAreaView} from 'react-native'
import {COLORS, SIZES} from "../Constants";
import { Input } from 'react-native-elements';
import {LinearGradient} from "expo-linear-gradient";
import HeadBar from "../components/HeadBar";
import DateTimePicker from "@react-native-community/datetimepicker/src/datetimepicker";
import Request from '../helpers/request';
import PhotoUploader from '../helpers/PhotoUploader';
import CameraComponent from '../components/CameraComponent';
import { DbContext } from '../provider/DbProvider';



const RecordData = (navigation) => {

    const db = useContext(DbContext);
    const currentUser = db.currentUser;

    let currentDate = new Date();

    const [selectedValue, setSelectedValue] = useState("java");
    const [newPayslip, setNewPayslip] = useState({  "amount": 0.0,
                                                    "invoiceNumber": null,
                                                    "date": '',
                                                    "courierName": 'UBEREATS',
                                                    "image": [],
                                                    "user": {
                                                        "id": currentUser.id,
                                                        "firstName": currentUser.firstName,
                                                        "secondName": currentUser.secondName,
                                                        "username": currentUser.username,
                                                        "password": currentUser.password,
                                                        "profilePicture": currentUser.profilePicture,
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
        let photoUploader = new PhotoUploader();
        photoUploader.uploadPhoto(photoURI, currentUser.username+'/Payslips/'+newPayslip["invoiceNumber"])
        // newPayslip["image"] = photoURI;
        // console.log(newPayslip);
    }

    useEffect(() => {
        currentDate = Date.now();
    }, [])

    const handlePOST = (path, payload) => {
            const request = new Request();
            request.post(path, payload)
    }




    const renderForm = () => {
        return (
            <LinearGradient colors={[COLORS.primary, COLORS.secondary]} style={{
                marginTop: 30,
                marginBottom:150,
                marginHorizontal: SIZES.radius,
                alignItems: 'left',
                borderRadius: SIZES.radius,
                ...styles.shadow
            }}>
                <SafeAreaView >


                    <View style={{
                        flexDirection: 'column',
                        marginTop: SIZES.padding,
                        paddingHorizontal: SIZES.padding
                    }}>
                        <View style={{
                            flex: 1,
                            width: 300
                        }}>
                            <Input
                                onlyEnglish
                                id="amount"
                                label="Amount"
                                labelStyle={{color: COLORS.white}}
                                keyboardType="default"
                                required
                                contain=" "
                                autoCapitalize="sentences"
                                errorText="Your name is invalid"
                                initialValue=""
                                outlined
                                borderColor="white"
                                style={{
                                    color: 'white',
                                }}
                                placeholder={"£ 0.00"}
                                placeholderTextColor={COLORS.lightGray}
                                keyboardType={'decimal-pad'}
                                onChange={handleAmountChange}

                            />
                            <Input
                                onlyEnglish
                                id="invoice"
                                label="Invoice No."
                                labelStyle={{color: COLORS.white}}
                                keyboardType="default"
                                required
                                contain=" "
                                autoCapitalize="sentences"
                                errorText="Invalid No"
                                initialValue=""
                                outlined
                                borderColor="white"
                                style={{
                                    color: 'white'
                                }}
                                placeholder={"..."}
                                placeholderTextColor={COLORS.lightGray}
                                onChange={handleInvChange}



                            />
                            <DateTimePicker onDateChange={handleDateChange} textColor={'white'}  value={currentDate}  display={"default"} />




                            <Picker
                                selectedValue={selectedValue}
                                style={{ height: 40, width: 150,  }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="UberEats" value="uber" color={'white'} />
                                <Picker.Item label="Deliveroo" value="deliveroo" color={'white'} />
                            </Picker>

                            <View style={styles.cameraContainer}>
                                <CameraComponent handlePhoto={handlePhoto}/>
                            </View>
                        </View>
                    </View>

                </SafeAreaView>
            </LinearGradient>

        )
    }

    return (

        <View style={{
            flex: 1
        }}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={{
                    paddingTop: 60
                }}
            >
                <HeadBar />

            </TouchableOpacity>

                {renderForm()}

        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    cameraContainer:{
        height:300,
        width: 300
    }
})

export default RecordData
