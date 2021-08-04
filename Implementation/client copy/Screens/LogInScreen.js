import React from 'react'
import { StyleSheet, View, Button } from 'react-native'

const LogInScreen = ({navigation}) => {
    return(
        <View style={styles.logInContainer}>
            <Button
                title="Log In"
                onPress={() => {
                    navigation.navigate("Landing Page")
                }}
            />
            <Button
                title="Create Account"
                onPress={() => {
                    navigation.navigate("Create Account")
                }}
            />
            <Button
                title="Forgot Password?"
                onPress={() => {
                    navigation.navigate("Reset Password")
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default LogInScreen;