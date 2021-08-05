import React, {useEffect, useState} from 'react'
import { StyleSheet, View, Button} from 'react-native'

const LandingScreen = ({navigation}) => {

    const [users, setUsers] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [payslips, setPayslips] = useState(null)
    const [expenses, setExpenses] = useState(null)

    const getUsers = function() {
        fetch('http://localhost:8080/users')
            .then(res => res.json())
            .then(data => setUsers(data))
            //Set loaded
            .catch(err => {console.log(err)})
    }


    useEffect(() => {
        setUsers(getUsers());
        // console.log(users);
        // console.log(loaded);
    }, [])// watch on loaded

    return(
        <View>
            <Button
                title="My Account"
                onPress={() => {
                    navigation.navigate("Profile", {users: users})
                }}
            />
            <Button
                title="Reports"
                onPress={() => {
                    navigation.navigate("Reports")
                }}
            />
            <Button
                title="Record"
                onPress={() => {
                    navigation.navigate("Record")
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default LandingScreen;