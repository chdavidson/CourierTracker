import React from 'react'
import { StyleSheet, View, Button} from 'react-native'
import ColourPalette from '../Constants/ColourPalette'

const LandingScreen = ({navigation}) => {
    return(
        <View style={styles.screen}>
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
    screen:{
        backgroundColor: ColourPalette.SECONDARY
    }

})

export default LandingScreen;