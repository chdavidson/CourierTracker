import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Image,
    Animated, ScrollView
} from 'react-native';
import {dummyData, COLORS, SIZES, FONTS, icons} from "../Constants";
import {useNavigation} from '@react-navigation/native'
import HeadBar from '../components/HeadBar'
import CourierRender from "../components/CourierRender";

const ReportDetailScreen = ({ navigation, route }) => {

    // const [selectedCourier, setSelectedCourier] = useState(null)
    //
    // useEffect(() => {
    //     const {currency} = route.params;
    //     setSelectedCourier(currency)
    // })



    function renderChart() {
        return(
            <View style={{
                marginTop: SIZES.padding,
                marginHorizontal: SIZES.radius,
                alignItems: 'center',
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.white,
                ...styles.shadow
            }}>

                <View style={{
                    flexDirection: 'row',
                    marginTop: SIZES.padding,
                    paddingHorizontal: SIZES.padding
                }}>
                    <View style={{
                        flex: 1
                    }}>
                        <CourierRender />
                    </View>
                </View>

            </View>
        )
    }
    return (
       <SafeAreaView
        style={{
            flex: 1,
            backgroundColor: COLORS.lightGray1
        }}
       >
           <View >
               <TouchableOpacity
                   onPress={() => navigation.navigate("Home")}
               >
                   <HeadBar />

               </TouchableOpacity>
               <ScrollView>
                   <View style={{
                       flex: 1, paddingBottom: SIZES.padding
                   }}>
                       {renderChart()}
                   </View>
               </ScrollView>
           </View>

       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
})

export default ReportDetailScreen;