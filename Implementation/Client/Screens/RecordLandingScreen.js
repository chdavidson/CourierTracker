import React from 'react';
import { StyleSheet, TouchableOpacity, View} from 'react-native';
import {COLORS, SIZES, FONTS, icons, images, dummyData} from '../Constants'



const RecordLandingScreen = ({navigation}) =>{



    return(
        <View style={{  justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: 290,
                        ...styles.shadow
                    }}>
            <TouchableOpacity
                style={{
                    width: 170,
                    paddingVertical: SIZES.padding,
                    paddingHorizontal: SIZES.padding,
                    // marginLeft: index === 0 ? SIZES.padding : 0,
                    marginRight: SIZES.radius,
                    borderRadius: 10,
                    backgroundColor: 'white'

                }}
                onPress={() => navigation.navigate('RecordIncome')}
            >
                
            </TouchableOpacity>
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
    }
})