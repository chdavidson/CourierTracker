import React, {useState, useEffect} from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import ColourPalette from '../Constants/ColourPalette'
import ProfilePicture from '../components/ProfilePicture'
import SettingsClickable from '../components/SettingsClickable'

const ProfileScreen = ({route, navigation}) => {
    const {users} = route.params;
    const userID = "saadtarik"
    const renderUser = users?.map((user, index) => {
        if (user.username === userID) {
            return (
                <View key={index}>
                    {/*{console.log(users)}*/}
                    <Text>{user.firstName} {user.secondName}</Text>
                    <Text>Income: {user.payslips[0].amount}</Text>
                </View>)
        }
    })
    // console.log(users)





































    return(
        <View style={styles.screen}>
            {console.log(users)}
            <View style={styles.settingsContainer}>
                <SettingsClickable navigation={navigation}/>
            </View>
            <View style={styles.profilePictureContainer}>
                {/*<ProfilePicture uri={testImage}/>*/}
            </View>
            <View style={styles.userSummary}  >
                {users ? renderUser : null}
            </View>

            
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 10,
        width: '100%',
        backgroundColor: ColourPalette.SECONDARY,
    },
    profilePictureContainer: {
        alignItems: 'center',
        paddingTop: 25
    },
    userSummary:{
        alignItems:'center',
        padding: 20
    },
    settingsContainer:{
        alignItems: 'flex-end'
    }
})

export default ProfileScreen;