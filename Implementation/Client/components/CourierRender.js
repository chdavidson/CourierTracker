import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Image,
    Animated
} from 'react-native';
import {dummyData, COLORS, SIZES, FONTS, icons} from "../Constants";


const CourierRender = ({icon, currency, code}) => {
    return (
        <View>
            <Image source={icon}
                   resizeMode="cover"
                   style={{
                       width: 25,
                       height: 25,
                       marginTop: 5
                   }} />
            <View style={{marginLeft: SIZES.base}}>
                {/*<Text style={{...FONTS.h3}}>{currency}</Text>*/}
                {/*<Text style={{color: COLORS.gray, ...FONTS.body4}}>{code}</Text>*/}
            </View>
        </View>
    )
}

export default CourierRender