import React from 'react'
import { View, Text, StyleSheet, ColorPropType } from 'react-native'
import ColourPalette from '../Constants/ColourPalette'

const Header = (props) => {
    return(
        <View style={styles.header}>
            <Text style={styles.headerText}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        paddingTop: 36,
        height: 90,
        backgroundColor: ColourPalette.PRIMARY,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText:{
        color: ColourPalette.SECONDARY,
        fontSize: 18,
        fontWeight: 'bold'
    }

})

export default Header;