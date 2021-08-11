import React, {useContext, useEffect, useState} from 'react'
import { View, Text,
     TouchableOpacity, StyleSheet,
      FlatList, ImageBackground, ScrollView, Image } from 'react-native'
import {COLORS, SIZES, FONTS, icons, images, dummyData} from '../Constants'
import { DbContext } from "../provider/DbProvider";




const TransactionHistory = ({customerContainerStyle, history}) => {
    const db = useContext(DbContext);

    const currentUser = db.currentUser


    // const [paySlips, setPaySlips] = useState([])
    // useEffect(() => {
    //     setPaySlips(currentUser[paySlips])
    // }, [])
    //
    // console.log(paySlips)
    const paySlips = [...currentUser.payslips, ...currentUser.expenses]
    // console.log(paySlips)


    const renderItem = ({item}) => {
        return(
        <TouchableOpacity style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 12
        }}
        onPress={() => console.log(item)} >
        <Image 
            source={icons.transaction}
            style={{
                width: 30,
                height: 30,
                tintColor: COLORS.primary
            }}
         />
         <View 
            style={{ flex: 1, marginLeft: SIZES.radius}}
         >
            <Text style={{fontSize: 16}}>{item.companyName ? item.companyName : item.category }</Text>
            {/*<Text style={{fontSize: 12}} >{item.expenses[0].date}</Text>*/}
         </View>
          <View style={{flexDirection: 'row', height: '100%'}}>
              <Text style={{ color : item.companyName ? COLORS.green : COLORS.black}}>
                  £{item.amount}
              </Text>
              <Image source={icons.right_arrow}
              style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.gray
              }}/>
          </View>
        </TouchableOpacity>)
    }
    return (
        <View style={{
            marginTop: 100,
            marginHorizontal: 20,
            padding: 20,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.white,
            ...customerContainerStyle
        }}>
        <Text style={{fontFamily: 'Helvetica', fontSize: 20}} >Transaction History</Text>
        <FlatList
            contentContainerSty le={{marginTop: SIZES.radius}}
            scrollEnabled={false}
            data={paySlips}
            keyExtractor={item => {item.id}}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => {
                return(
                    <View style={{width: '100%',
                        height: 1,
                        backgroundColor: COLORS.lightGray
                    }}></View>
                )
            }}
         />
        </View>
    )
}

export default TransactionHistory
