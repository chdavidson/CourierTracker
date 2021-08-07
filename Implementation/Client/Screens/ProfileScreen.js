import React, {useState, useEffect, useContext} from 'react'
import { View, Text, Button, StyleSheet, FlatList } from 'react-native'
import ColourPalette from '../Constants/ColourPalette'
import ProfilePicture from '../components/ProfilePicture'
import SettingsClickable from '../components/SettingsClickable'
import { AuthContext } from "../provider/AuthProvider";
import { DbContext } from "../provider/DbProvider";


const ProfileScreen = ({route, navigation}) => {


    const [transactions, setTransactions] = useState(null);

    const db = useContext(DbContext);
   
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
                                    <View key={i}>
                                        <Text>£{p.amount}</Text>
                                        <Text>{p.companyName}</Text>
                                        <Text>{p.invoiceNumber}</Text>
                                        <Text>{p.date}</Text>
                                    </View>
                            )
        }))
        let expenseList = (currentUser.expenses.map((e, i) => {
                                return(
                                    <View key={i+currentUser.payslips.length}>
                                        <Text>£{e.amount}</Text>
                                        <Text>{e.category}</Text>
                                        <Text>{e.date}</Text>
                                    </View>

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