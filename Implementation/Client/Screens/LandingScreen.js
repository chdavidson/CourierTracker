import React from 'react'
import { StyleSheet, View, Button} from 'react-native'
import firebase from 'firebase'

const LandingScreen = ({navigation}) => {
    return(
        <View>
            <Button
                title="My Account"
                onPress={() => {
                    navigation.navigate("Profile")
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

})

export default LandingScreen;