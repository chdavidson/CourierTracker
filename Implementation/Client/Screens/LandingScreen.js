import React, {useEffect, useState} from 'react'
import { StyleSheet, View, Button} from 'react-native'
import firebase from 'firebase'
import ColourPalette from '../Constants/ColourPalette'

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
        <View style={styles.screen}>
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
             <Button
              status="danger"
              title="Logout"
              onPress={() => {
                firebase.auth().signOut();
              }}
              style={{
                marginTop: 10,
              }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor: ColourPalette.SECONDARY
    }

})

export default LandingScreen;