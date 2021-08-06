import React, {useState, useEffect, useContext} from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import ColourPalette from '../Constants/ColourPalette'
import ProfilePicture from '../components/ProfilePicture'
import SettingsClickable from '../components/SettingsClickable'
import { AuthContext } from "../provider/AuthProvider";
import { DbContext } from "../provider/DbProvider";


const ProfileScreen = ({route, navigation}) => {
    // const {users} = route.params;
    // const userID = "saadtarik"

    // const auth = useContext(AuthContext);
    // const userData = auth.userData;

    const db = useContext(DbContext);
    // console.log("db: " + db)
    const currentUser = db.currentUser

    useEffect(() => {
        if(currentUser){        
            console.log(currentUser.firstName)
        }
        else(
            console.log("NAEBODY HERE")
        )
    },[currentUser])

    return(
        <View style={styles.screen}>
            <View style={styles.userSummaryContainer}>
                {currentUser ? <Text>{currentUser.firstName}</Text> : null}
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