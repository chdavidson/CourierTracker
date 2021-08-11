import React, {useEffect, useState} from 'react'
import { StyleSheet, View, Button} from 'react-native'
import firebase from 'firebase'
import ColourPalette from '../Constants/ColourPalette'

import Request from '../helpers/request';

const LandingScreen = ({navigation}) => {

    const [users, setUsers] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [payslips, setPayslips] = useState(null)
    const [expenses, setExpenses] = useState(null)

    const getUsers = function() {
        fetch(`http://192.168.0.25:8080/users`)
            .then(res => res.json())
            .then(data => setUsers(data))
            //Set loaded
            .catch(err => {console.log(err)})
    }

    const handleCreateRequest = (path, payload) => {
        const request = new Request();
        request.post(path, payload)
    }

    const handleUpdateRequest = (path, payload) => {
        const request = new Request();
        request.patch(path+'/'+payload.id, payload)
    }

    const handleDeleteRequest = (path, id) => {
        const request = new Request();
        request.delete(path, id);
        //.then(()=>{})
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
            <Button
                title="TEST POST user"
                onPress={() => {
                    handleCreateRequest('users', {  firstName: "A",
                                                    secondName: "A",
                                                    username: "A",
                                                    password: "A",
                                                    profilePicture: ""
                                                })
                }}
            />
            <Button
                title="TEST PUT user"
                onPress={() => {
                    handleUpdateRequest('users', {  id: 4,
                                                    firstName: "CCC",
                                                    secondName: "CCC",
                                                    username: "CCC",
                                                    password: "123",
                                                    profilePicture: "",
                                                    expenses: [],
                                                    payslips: []
                                                })
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