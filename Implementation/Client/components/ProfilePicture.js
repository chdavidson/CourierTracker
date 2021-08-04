import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import ColourPalette from '../Constants/ColourPalette'


const ProfilePicture = (props) => {


    const handlePress = () => {
        // Redirect to change user profile picture
        console.log("Image clicked..")
        
    }

    return (
        <View>
            <TouchableOpacity 
                    onPress={handlePress}
                    activeOpacity='0.5'
            >
                <Image
                    style={styles.profilePicture}
                    source={{
                        uri: props.uri,
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    profilePicture:{
        width: 180,
        height: 180,
        borderRadius: 30
    }

})

export default ProfilePicture;