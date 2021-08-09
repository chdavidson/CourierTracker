import React, {useEffect, useState} from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text,
     TouchableOpacity, StyleSheet,
      FlatList, ImageBackground, ScrollView, Image, LogBox } from 'react-native'
import {COLORS, SIZES, FONTS, icons, images, dummyData} from '../Constants'
import { LinearGradient } from 'expo-linear-gradient'
import Tabs from '../navigation/tabs'
import TransactionHistory from '../components/TransactionHistory'
import * as Font from 'expo-font'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Settings from "./Settings";


const HomeScreen = ({navigation}) => {

    const [trending, setTrending] = React.useState(dummyData.trendingCurrencies)
    const [transactionHistory , SetTransactionHistory] = React.useState(dummyData.transactionHistory);



    function renderHeader() {
        const renderItem = ({item, index}) => (
        <TouchableOpacity
            style={{
                width: 170,
                paddingVertical: SIZES.padding,
                paddingHorizontal: SIZES.padding,
                marginLeft: index === 0 ? SIZES.padding : 0,
                marginRight: SIZES.radius,
                borderRadius: 10,
                backgroundColor: 'white'

            }}
            onPress={() => navigation.navigate('ReportDetailScreen', {currency: item})}
        >
            <View style={{flexDirection: 'row'}}>
                <View>
                    <Image
                        source={item.image}
                        resizeMode="cover"
                        style={{
                            marginTop: 5,
                            height: 25,
                            width: 25
                        }}
                    />
                </View>
                <View style={{marginLeft: SIZES.base}}>
                       <Text style={{ fontFamily: 'Roboto', fontSize: 18}}>{item.currency}</Text>
                       <Text style={{fontFamily: 'Roboto', fontSize: 14}} >{item.code}</Text>

                </View>
            </View>
            <View style={{ marginTop: SIZES.radius}}>
                        <Text style={{fontFamily: 'Roboto', fontSize: 22}} >£{item.amount}</Text>
            </View>

        </TouchableOpacity>
        )

        return(
            <View style={{
                width: '100%',
                height: 290,
                ...styles.shadow,
                
            }}>
                <ImageBackground
                source={images.banner}
                resizeMode="cover"
                style={{
                    flex: 1,
                    alignItems: 'center',
                }}
                >
                    <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingTop: 80
                    }}
                    >
                        <Text style= {{color: COLORS.white, fontFamily: 'Roboto', fontSize: 24}}>Your Balance</Text>
                        <Text style={{ marginTop: SIZES.base, color: COLORS.white, fontFamily: 'Roboto', fontSize:30}}>£{dummyData.portfolio.balance}</Text>
                    </View>
                    <View style={{
                        position: 'absolute',
                        bottom: '-30%'
                    }}>
                        <Text style={{ marginLeft: SIZES.padding,
                            color: COLORS.white, fontFamily: 'RobotoSemiBold', fontSize:24
                        }}>Couriers</Text>
                        <FlatList
                            contentContainerStyle={{marginTop: SIZES.base}}
                            data={trending}
                            renderItem={renderItem}
                            keyExtractor={item => {item.id}}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                         />

                    </View>
                </ImageBackground>
                
            </View>
        )
    }

    function renderTransactionHistory() {
        return (
            <TransactionHistory 
                customerContainerStyle={{...styles.shadow}}
                history={transactionHistory}
            />
        )
    }

    return (
        <ScrollView>
            <StatusBar  style="Dark" />
            <View style={{flex: 1, paddingBottom: 110}}>
                {renderHeader()}
                {renderTransactionHistory()}
            </View>            
        </ScrollView>
    )
}

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

export default HomeScreen
