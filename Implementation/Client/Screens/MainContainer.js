import React, {useState, useEffect} from 'react';
import {StoreProvider, createStore} from "easy-peasy";
import Request from '../helpers/request'
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import ProfileScreen from "./ProfileScreen";
import UserServices from '../helpers/UserServices'
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import LogInScreen from "./LogInScreen";
import ResetPasswordScreen from "./ResetPasswordScreen";
import CreateAccountScreen from "./CreateAccountScreen";
import LandingScreen from "./LandingScreen";
import AccountSettingsScreen from "./AccountSettingsScreen";
import ReportScreen from "./ReportScreen";
import RecordItemScreen from "./RecordItemScreen";


const MainContainer = () => {
   //  const [users, setUsers] = useState(null);
   //  const [payslips, setPayslips] = useState(null)
   //  const [expenses, setExpenses] = useState(null)
   //
   // const getUsers = function() {
   //      fetch('http://localhost:8080/users')
   //          .then(res => res.json())
   //          .then(data => setUsers(data))
   //          .catch(err => {console.log(err)})
   // }
   //
   //
   //  useEffect(() => {
   //      setUsers(getUsers());
   //  }, [users])

    // console.log(users)


    const userID = "saadtarik"

    // const renderUser = users?.map((user, index) => {
    //     if(user.username === userID){
    //         return (
    //             <View>
    //                 <Text>{user.firstName}</Text>
    //                 <Text>{user.secondName}</Text>
    //                 <Text>Income: {user.payslips[0].amount}</Text>
    //             </View>
    //         )
    //     }
    // })
    const Stack = createStackNavigator();


    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Sign in" component={LogInScreen} />
                <Stack.Screen name="Reset Password" component={ResetPasswordScreen} />
                <Stack.Screen name="Create Account" component={CreateAccountScreen} />
                <Stack.Screen name="Landing Page" component={LandingScreen}/>
                <Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{ title: "Profile" }}
                />
                <Stack.Screen name="Profile Settings" component={AccountSettingsScreen} />
                <Stack.Screen name="Reports" component={ReportScreen} />
                <Stack.Screen name="Record" component={RecordItemScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}
export default MainContainer;