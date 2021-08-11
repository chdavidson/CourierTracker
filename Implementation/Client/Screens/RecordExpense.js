import React, {useState, useContext, useEffect} from 'react'
import { StyleSheet, View, Button, TextInput, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { DbContext } from "../provider/DbProvider";
import RNPickerSelect from 'react-native-picker-select';
import {LinearGradient} from "expo-linear-gradient";
import {COLORS, SIZES, FONTS, icons, images, dummyData} from '../Constants';
import { Input } from 'react-native-elements';
import DatePicker from '../components/DatePicker';
import HeadBar from "../components/HeadBar";
import * as Firebase from 'firebase'
import Request from '../helpers/request';


const RecordExpense = ({navigation}) => {
    const db = useContext(DbContext);
    const currentUser = db.currentUser;

    const [newExpense, setNewExpense] = useState({
                                                    "amount": 0.0,
                                                    "date": '',
                                                    "receipt": '',
                                                    "category": '',
                                                    "user": {
                                                        "id": currentUser.id,
                                                        "firstName": currentUser.firstName,
                                                        "secondName": currentUser.secondName,
                                                        "username": currentUser.username,
                                                        "password": currentUser.password,
                                                        "profilePicture": currentUser.profilePicture,
                                                    }
                                                })

    
    const handleAmountChange = (event) => {
        let copiedState = newExpense;
        copiedState["amount"] = event.nativeEvent.text;
        setNewExpense(copiedState);
    }

    const handlePhoto = async (photoURI) => {
        const blob = await new Promise((resolve, reject)=> {
            const xhr = new XMLHttpRequest();
            xhr.onload = function(){
              resolve(xhr.response)
            };
            xhr.onerror = function (){
              reject(new TypeError('Network request failed'));
            };
            xhr.responseType = 'blob';
            xhr.open('GET', photoURI, true);
            xhr.send(null);
         });


        const ref = Firebase.storage().ref().child(currentUser.username+'/Expenses/'+newExpense["date"]);
        const snapshot = ref.put(blob);

        snapshot.on(    Firebase.storage.TaskEvent.STATE_CHANGED,
                                    () => { },
                                    err =>  {
                                            console.log(err)
                                            blob.close();
                                            return err;
                                            },
                                    () => { 
                                            snapshot.snapshot.ref.getDownloadURL()
                                            .then(url => {  
                                                            console.log("download url: "+url); 
                                                            let copiedState = newExpense;
                                                            copiedState["receipt"] = url;
                                                            setNewExpense(copiedState);
                                                })
                                            blob.close();
                                            return url;
                                        }
                                )
    }


    const handleDateChange = (event, date) => {
        let copiedState = newExpense;
        copiedState["date"] = date;
        setNewExpense(copiedState);
    }

    const handlePickerChange = (value) => {
        let copiedState = newExpense;
        copiedState["category"] = value;
        setNewExpense(copiedState);
    }


    const onFormSubmit = () => {
        console.log(newExpense);
        const request = new Request();
        request.post('/expenses', newExpense);
        navigation.navigate("HomeScreen")
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
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 25,
                                paddingBottom: 50,
                                color: 'white'
                            }}>
                                Invoice
                            </Text>
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
                                onChange={handleAmountChange}
                            />
                            <View>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 17,
                                    paddingLeft: 7,
                                    fontWeight: '600',
                                    paddingTop: 10
                                }}> Select Date</Text>
                            <DatePicker onDateChange={handleDateChange} />

                            </View>
                            <View style={{
                                paddingLeft:13
                            }}>
                                <Text style={{
                                    paddingTop: 20,
                                    fontSize: 17,
                                    color: 'white',
                                    fontWeight: '600',
                                    paddingBottom: 10
                                }}>
                                    Select Expense Category
                                </Text>
                                <RNPickerSelect
                                    placeholder={{ label: "Choose Here", value: null }}
                                    // onValueChange={(value) => console.log(value)} 
                                    onValueChange={handlePickerChange}
                                    items={[
                                        { label: 'Fuel', value: 'FUEL' },
                                        { label: 'Maintenance', value: 'MAINTENANCE' },
                                        { label: 'Food', value: 'FOOD' },
                                        { label: 'Insurance', value: 'INSURANCE' },
                                    ]}
                                    style={{inputIOS: {
                                            fontSize: 12,
                                            fontWeight: '600',
                                            color: 'white',
                                            paddingLeft: 2

                                        }}}
                                />
                                <Text style={{
                                    paddingTop: 25,
                                    fontSize: 17,
                                    color: 'white',
                                    fontWeight: '600',
                                    paddingBottom: 10
                                }}>
                                    Upload Expense Receipt
                                </Text>
                                <TouchableOpacity style={{
                                    width: 100,
                                    paddingVertical: SIZES.padding,
                                    paddingHorizontal: SIZES.padding,
                                    // marginLeft: index === 0 ? SIZES.padding : 0,
                                    marginRight: 10,
                                    borderRadius: 10,
                                    backgroundColor: COLORS.lightGray,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: 10,
                                }} onPress={() => navigation.navigate("CameraComponent",{ handlePhoto: handlePhoto })}
                                >
                                    <Image  source={images.camera}
                                            resizeMode='contain'
                                    />
                                </TouchableOpacity>

                                <View style={{
                                    alignItems: "center",
                                    marginTop: 60,
                                    ...styles.shadow
                                }}>
                                    <TouchableOpacity style={{
                                        width: 100,
                                        paddingVertical: 10,
                                        paddingHorizontal: 10,
                                        borderRadius: 10,
                                        backgroundColor: COLORS.green,
                                        marginTop: 50,
                                        height: 50,
                                        justifyContent: 'center',
                                        alignItems: 'center',

                                    }} onPress={onFormSubmit}>
                                        <Text style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            fontSize: 15
                                        }}>
                                            SUBMIT
                                        </Text>
                                    </TouchableOpacity>
                                </View>
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
    datePickerStyle: {
        width: 200,
        marginTop: 10,
    }
})

export default RecordExpense