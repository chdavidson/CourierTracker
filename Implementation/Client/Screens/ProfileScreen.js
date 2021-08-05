import React, {useState, useEffect} from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import ColourPalette from '../Constants/ColourPalette'
import ProfilePicture from '../components/ProfilePicture'
import SettingsClickable from '../components/SettingsClickable'

const ProfileScreen = ({navigation}) => {
    // This will need the user data passed in from top level state in order to populate
    const testImage = 'data:image/jpeg;base64,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'
    const [users, setUsers] = useState(null);

    const getUsers = function() {
        fetch('http://localhost:8080/users')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => {console.log(err)})
    }

    useEffect(() => {
        setUsers(getUsers());
    }, [])
    const userID = "saadtarik"

    const renderUser = users?.map((user, index) => {
        if (user.username === userID) {
            return (
                <View>
                    <Text>{user.firstName} {user.secondName}</Text>
                    <Text>Income: {user.payslips[0].amount}</Text>
                </View>)
        }
    })
    // console.log(users)




    return(
        <View style={styles.screen}>
            <View style={styles.settingsContainer}>
                <SettingsClickable navigation={navigation}/>
            </View>
            <View style={styles.profilePictureContainer}>
                {/*<ProfilePicture uri={testImage}/>*/}
            </View>
            <View style={styles.userSummary}  >
                {renderUser}
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