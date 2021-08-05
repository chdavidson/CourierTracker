import React, {useState, useEffect} from 'react';
import Request from '../helpers/request'
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import ProfileScreen from "./ProfileScreen";
import UserServices from '../helpers/UserServices'

const MainContainer = () => {
    const [users, setUsers] = useState(null);
    const [payslips, setPayslips] = useState(null)
    const [expenses, setExpenses] = useState(null)
    // const [test, setTest] = useState('mahallu')

   const getUsers = function() {
        fetch('http://localhost:8080/users')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => {console.log(err)})
   }

    // console.log(users)

    useEffect(() => {
        setUsers(getUsers());
    }, [])

    // export const TestContext = React.createContext(
    //     test
    // )

    const userID = "saadtarik"

    const renderUser = users?.map((user, index) => {
        if(user.username === userID){
            return (
                <View>
                    <Text>{user.firstName}</Text>
                    <Text>{user.secondName}</Text>
                    <Text>Income: {user.payslips[0].amount}</Text>

                </View>)
        }
    })

    return(
        <View>
            {renderUser}
        </View>
    )

}
export default MainContainer;