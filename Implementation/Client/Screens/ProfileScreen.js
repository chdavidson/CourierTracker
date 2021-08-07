import React, {useState, useEffect, useContext} from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import ColourPalette from '../Constants/ColourPalette'
import ProfilePicture from '../components/ProfilePicture'
import SettingsClickable from '../components/SettingsClickable'
import { AuthContext } from "../provider/AuthProvider";
import { DbContext } from "../provider/DbProvider";


const ProfileScreen = ({route, navigation}) => {
    const {users} = route.params;
    const userID = "saadtarik"

    const auth = useContext(AuthContext);
    const userData = auth.userData;

    const db = useContext(DbContext);
    console.log("db: " + db)
    const userDbData = db.users

    const renderUser = userDbData?.map((user, index) => {
        if (user.username === userID && userDbData) {
            return (
                <View key={index}>
                
                    {/*{console.log(users)}*/}
                    <Text>{user.firstName} {user.secondName}</Text>
                    <Text>Income: {user.payslips[0].amount}</Text>
                    <Text>{userData.email}</Text>
                    <Text>{userData.uid}</Text>
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