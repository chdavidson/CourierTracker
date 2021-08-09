import React, {useState} from 'react'
import {View, StyleSheet, Text, Picker, ScrollView, TouchableOpacity, TextInput, SafeAreaView} from 'react-native'
import {COLORS, SIZES} from "../Constants";
import CourierRender from "../components/CourierRender";
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {LinearGradient} from "expo-linear-gradient";
import HeadBar from "../components/HeadBar";
import DatePicker from "react-native-date-picker";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import DateTimePicker from "@react-native-community/datetimepicker/src/datetimepicker";




const RecordData = (navigation) => {
    const [date, setDate] = useState(new Date())
    const [selectedValue, setSelectedValue] = useState("java");

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



                            />
                            <DateTimePicker onDateChange={setDate} textColor={'white'}  value={new Date()}  display={"default"} />




                            <Picker
                                selectedValue={selectedValue}
                                style={{ height: 40, width: 150,  }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="UberEats" value="uber" color={'white'} />
                                <Picker.Item label="Deliveroo" value="deliveroo" color={'white'} />
                            </Picker>
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
    }
})

export default RecordData
