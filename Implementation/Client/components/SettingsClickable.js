import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import ColourPalette from '../Constants/ColourPalette';


const SettingsClickable = ({navigation}) => {

    const handlePress = () => {
        navigation.navigate("Profile Settings")
        // Could forgotpassowrd screen be used to reset password?
    }

    return (
        <TouchableOpacity
                        onPress={handlePress}
                        activeOpacity='0.3'
        >
            <Entypo name="cog" style={styles.iconStyle} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    iconStyle: {
        fontSize: 30,
        marginTop: 15,
        color: ColourPalette.PRIMARY,
      }

})

export default SettingsClickable;