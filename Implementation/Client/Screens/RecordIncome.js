// import React, {useState, useContext, useEffect} from 'react'
// import {View, StyleSheet, Text, Picker, ScrollView, TouchableOpacity, TextInput, SafeAreaView, Button} from 'react-native'
// import {COLORS, SIZES} from "../Constants";
// import { Input } from 'react-native-elements';
// import {LinearGradient} from "expo-linear-gradient";
// import HeadBar from "../components/HeadBar";
// import DateTimePicker from "@react-native-community/datetimepicker/src/datetimepicker";
// import Request from '../helpers/request';
// import PhotoUploader from '../helpers/PhotoUploader';
// import CameraComponent from '../components/CameraComponent';
// import { DbContext } from '../provider/DbProvider';
// import * as Firebase from 'firebase'



// const RecordIncome = (navigation) => {

//     const db = useContext(DbContext);
//     const currentUser = db.currentUser;

//     let currentDate = new Date();

//     const [selectedValue, setSelectedValue] = useState("java");
//     const [newPayslip, setNewPayslip] = useState({  "amount": 0.0,
//                                                     "invoiceNumber": null,
//                                                     "date": null,
//                                                     "courierName": 'UBEREATS',
//                                                     "image": [],
//                                                     "user": {
//                                                         "id": currentUser.id,
//                                                         "firstName": currentUser.firstName,
//                                                         "secondName": currentUser.secondName,
//                                                         "username": currentUser.username,
//                                                         "password": currentUser.password,
//                                                         "profilePicture": currentUser.profilePicture,
//                                                     }    
//                                                 })
//     // const [newPayslip, setNewPayslip] = useState({  "amount": 0.0,
//     //                                                 "invoiceNumber": null,
//     //                                                 "date": '',
//     //                                                 "courierName": 'UBEREATS',
//     //                                                 "image": [],
//     //                                                 "user": {
//     //                                                     "id": null,
//     //                                                     "firstName": null,
//     //                                                     "secondName": null,
//     //                                                     "username": null,
//     //                                                     "password": null,
//     //                                                     "profilePicture": null,
//     //                                                 }    
//     //                                             })


//     const handleDateChange = (event, date) => {
//         console.log(date);
//         newPayslip["date"] = date;
//     }

//     const handleInvChange = (event) => {
//         newPayslip["invoiceNumber"] = event.nativeEvent.text;
//     }

//     const handleAmountChange = (event) => {
//         newPayslip["amount"] = event.nativeEvent.text;
//     }

//     const handlePhoto = async (photoURI) => {
//             const blob = await new Promise((resolve, reject)=> {
//                 const xhr = new XMLHttpRequest();
//                 xhr.onload = function(){
//                   resolve(xhr.response)
//                 };
//                 xhr.onerror = function (){
//                   reject(new TypeError('Network request failed'));
//                 };
//                 xhr.responseType = 'blob';
//                 xhr.open('GET', photoURI, true);
//                 xhr.send(null);
//              });
    
    
//             const ref = Firebase.storage().ref().child(currentUser.username+'/Payslips/'+newPayslip["invoiceNumber"]);
//             const snapshot = ref.put(blob);
    
//             snapshot.on(    Firebase.storage.TaskEvent.STATE_CHANGED,
//                                         () => {
//                                             //setUploading(true);
//                                         },
//                                         err =>  { 
//                                                 //setUploading(false);
//                                                 console.log(err)
//                                                 blob.close();
//                                                 return err;
//                                                 },
//                                         () => { 
//                                                 //setUploading(false);
//                                                 snapshot.snapshot.ref.getDownloadURL()
//                                                 .then(url => {  
//                                                                 console.log("download url: "+url); 
//                                                                 newPayslip["image"] = url;
//                                                     })
//                                                 blob.close();
//                                                 return url;
//                                             }
//                                     )
//         }

//         const onFormSubmit = () => {
//             console.log(newPayslip);
//             const request = new Request();
//             request.post('/payslips', newPayslip)
//             //navigation.navigate("Landing Page")
//         }
    
    


//     useEffect(() => {
//         currentDate = Date.now();
//     }, [])

//     const renderForm = () => {
//         return (
//             <LinearGradient colors={[COLORS.primary, COLORS.secondary]} style={{
//                 marginTop: 30,
//                 marginBottom:150,
//                 marginHorizontal: SIZES.radius,
//                 alignItems: 'left',
//                 borderRadius: SIZES.radius,
//                 ...styles.shadow
//             }}>
//                 <SafeAreaView >


//                     <View style={{
//                         flexDirection: 'column',
//                         marginTop: SIZES.padding,
//                         paddingHorizontal: SIZES.padding
//                     }}>
//                         <View style={{
//                             flex: 1,
//                             width: 300
//                         }}>
//                             <Input
//                                 onlyEnglish
//                                 id="amount"
//                                 label="Amount"
//                                 labelStyle={{color: COLORS.white}}
//                                 keyboardType="default"
//                                 required
//                                 contain=" "
//                                 autoCapitalize="sentences"
//                                 errorText="Your name is invalid"
//                                 initialValue=""
//                                 outlined
//                                 borderColor="white"
//                                 style={{
//                                     color: 'white',
//                                 }}
//                                 placeholder={"£ 0.00"}
//                                 placeholderTextColor={COLORS.lightGray}
//                                 keyboardType={'decimal-pad'}
//                                 onChange={handleAmountChange}

//                             />
//                             <Input
//                                 onlyEnglish
//                                 id="invoice"
//                                 label="Invoice No."
//                                 labelStyle={{color: COLORS.white}}
//                                 keyboardType="default"
//                                 required
//                                 contain=" "
//                                 autoCapitalize="sentences"
//                                 errorText="Invalid No"
//                                 initialValue=""
//                                 outlined
//                                 borderColor="white"
//                                 style={{
//                                     color: 'white'
//                                 }}
//                                 placeholder={"..."}
//                                 placeholderTextColor={COLORS.lightGray}
//                                 onChange={handleInvChange}



//                             />
//                             <DateTimePicker onDateChange={handleDateChange} textColor={'white'}  value={currentDate}  display={"default"} />
                            



//                             <Picker
//                                 selectedValue={selectedValue}
//                                 style={{ height: 40, width: 150,  }}
//                                 onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
//                             >
//                                 <Picker.Item label="UberEats" value="uber" color={'white'} />
//                                 <Picker.Item label="Deliveroo" value="deliveroo" color={'white'} />
//                             </Picker>

//                             <View style={styles.cameraContainer}>
//                                 <CameraComponent handlePhoto={handlePhoto}/>
//                             </View>
//                         </View>
//                         <Button onPress={onFormSubmit} title="SUBMIT"/>
//                     </View>

//                 </SafeAreaView>
//             </LinearGradient>

//         )
//     }

//     return (

//         <View style={{
//             flex: 1
//         }}>
//             <TouchableOpacity
//                 onPress={() => navigation.navigate("Home")}
//                 style={{
//                     paddingTop: 60
//                 }}
//             >
//                 <HeadBar />

//             </TouchableOpacity>

//                 {renderForm()}

//         </View>

//     )
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     shadow: {
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: 4,
//         },
//         shadowOpacity: 0.30,
//         shadowRadius: 4.65,

//         elevation: 8,
//     },
//     cameraContainer:{
//         height:300,
//         width: 300
//     }
// })

// export default RecordIncome




import React, {useState} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Picker,
    ScrollView,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
    Image
} from 'react-native'
import {COLORS, images, SIZES} from "../Constants";
import CourierRender from "../components/CourierRender";
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {LinearGradient} from "expo-linear-gradient";
import HeadBar from "../components/HeadBar";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import DateTimePicker from "@react-native-community/datetimepicker/src/datetimepicker";
import {getBackgroundDarkColor} from "react-native/Libraries/LogBox/UI/LogBoxStyle";
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from '../components/DatePicker'
import { FontAwesome } from '@expo/vector-icons';
import CameraComponent from "../components/CameraComponent";






const RecordIncome = ({navigation}) => {
    const handleDateChange = (event, date) => { console.log(date)}

    const [selectedValue, setSelectedValue] = useState(" ");

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
                                errorText="Your name is invalid"
                                initialValue=""
                                outlined
                                borderColor="white"
                                style={{
                                    color: 'white',
                                }}
                                placeholder={"Enter here"}
                                placeholderTextColor={COLORS.lightGray}

                            />

                            <View>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 17,
                                    paddingLeft: 7,
                                    fontWeight: '600',
                                    paddingTop: 10
                                }}> Select Date</Text>
                                <DatePicker  />

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
                                    Select Courier
                                </Text>

                            <RNPickerSelect
                                placeholder={{ label: "Choose Here", value: null }}
                                onValueChange={(value) => console.log(value)} items={[
                                { label: 'UberEats', value: 'uberEats' },
                                { label: 'JustEat', value: 'justEat' },
                                { label: 'Deliveroo', value: 'deliveroo' },
                            ]}
                                style={{inputIOS: {
                                        fontSize: 12,
                                        fontWeight: '600',
                                        // paddingTop: 30,
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
                                    Upload Payslip
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


                                }} onPress={() =>  navigation.navigate('CameraComponent')}
                                >
                                    <Image  source={images.camera}
                                        resizeMode='contain'
                                    />
                                </TouchableOpacity>
                                <View style={{
                                    alignItems: "center",
                                    marginTop: 30,
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

                                    }} >
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

export default RecordIncome