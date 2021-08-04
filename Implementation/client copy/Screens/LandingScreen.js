import React from 'react'
import { StyleSheet, View, Button} from 'react-native'

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
        </View>
    )
}

const styles = StyleSheet.create({

})

export default LandingScreen;