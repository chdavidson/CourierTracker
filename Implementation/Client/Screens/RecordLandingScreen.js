import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {COLORS, SIZES, FONTS, icons, images, dummyData} from '../Constants'



const RecordLandingScreen = ({navigation}) =>{



    return(
        <View style={{height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <View style={{  justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: 290,
                        ...styles.shadow
                    }}>
            <View style={styles.touchableContainer}>
                <TouchableOpacity
                    style={{
                        width: 180,
                        paddingVertical: SIZES.padding,
                        paddingHorizontal: SIZES.padding,
                        // marginLeft: index === 0 ? SIZES.padding : 0,
                        marginRight: SIZES.radius,
                        borderRadius: 10,
                        backgroundColor: COLORS.primary

                    }}
                    onPress={() => navigation.navigate('RecordIncome')}
                >

                    <Text style={{color: COLORS.white}}>RECORD INCOME</Text>

                    
                </TouchableOpacity>
            </View>
            <View style={styles.touchableContainer}>
                <TouchableOpacity
                    style={{
                        width: 180,
                        paddingVertical: SIZES.padding,
                        paddingHorizontal: SIZES.padding,
                        // marginLeft: index === 0 ? SIZES.padding : 0,
                        marginRight: SIZES.radius,
                        borderRadius: 10,
                        backgroundColor: COLORS.primary

                    }}
                    onPress={() => navigation.navigate('RecordExpense')}
                >

                    <Text style={{color: COLORS.white}}>RECORD EXPENSE</Text>

                    
                </TouchableOpacity>
            </View>
        </View>
        </View>
    );
}

export default RecordLandingScreen;

const styles = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    },
    touchableContainer:{
        padding:20,
    }
})