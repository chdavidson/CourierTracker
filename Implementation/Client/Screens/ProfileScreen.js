import React, {useState, useEffect, useContext} from 'react'
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import ColourPalette from '../Constants/ColourPalette'
import ProfilePicture from '../components/ProfilePicture'
import SettingsClickable from '../components/SettingsClickable'
import { AuthContext } from "../provider/AuthProvider";
import { DbContext } from "../provider/DbProvider";


const ProfileScreen = ({route, navigation}) => {

    const db = useContext(DbContext);
    console.log("db: " + db)
    const userDbData = db.users

    // const renderUser = userDbData?.map((user, index) => {
    //     if (user.username === userID && userDbData) {
    //         return (
    //             <View key={index}>
                
    //                 {/*{console.log(users)}*/}
    //                 <Text>{user.firstName} {user.secondName}</Text>
    //                 <Text>Income: {user.payslips[0].amount}</Text>
    //                 <Text>{userData.email}</Text>
    //                 <Text>{userData.uid}</Text>
    //             </View>)}

    //         })
   
    const currentUser = db.currentUser

    useEffect(() => {
        if(currentUser){        
            console.log(currentUser.firstName)
            displayTransactions();
        }
        else(
            console.log("NAEBODY HERE")
        )
    },[currentUser])

    const displayTransactions = () => {
        console.log(currentUser.expenses);
        let payList = (currentUser.payslips.map((p,i) => {
                            return(
                                <TouchableOpacity key={i}>
                                    <View>
                                        <Text>£{p.amount}</Text>
                                        <Text>{p.companyName}</Text>
                                        <Text>{p.invoiceNumber}</Text>
                                        <Text>{p.date}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
        }))
        let expenseList = (currentUser.expenses.map((e, i) => {
                                return(
                                    <TouchableOpacity key={i+currentUser.payslips.length}>
                                        <View>
                                            <Text>£{e.amount}</Text>
                                            <Text>{e.category}</Text>
                                            <Text>{e.date}</Text>
                                        </View>
                                    </TouchableOpacity>

                                )
        }))


        // Maybe sort by date first?

        return[...payList,...expenseList];
    }

    return(
        <View style={styles.screen}>
            <View style={styles.userSummaryContainer}>
                {currentUser ? <Text>{currentUser.firstName}</Text> : null}
                    {currentUser ? <View>{displayTransactions()}</View> : null}
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
    transactionList:{
        width: '100%',
        height: 40
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