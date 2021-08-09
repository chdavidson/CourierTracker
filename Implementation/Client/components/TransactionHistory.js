import React, {useContext, useEffect, useState} from 'react'
import { View, Text,
     TouchableOpacity, StyleSheet,
      FlatList, ImageBackground, ScrollView, Image } from 'react-native'
import {COLORS, SIZES, FONTS, icons, images, dummyData} from '../Constants'
// import { DbContext } from "../provider/DBPovider";
// import { AuthContext } from "../provider/DBPovider";




const TransactionHistory = ({customerContainerStyle, history}) => {

    // const db = useContext(DbContext);

    // const currentUser = db.currentUser

    // useEffect(() => {
    //     if(currentUser){
    //         console.log(currentUser.firstName)
    //         displayTransactions();
    //     }
    //     else(
    //         console.log("NAEBODY HERE")
    //     )
    // },[currentUser])
    // console.log(currentUser)
   

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
            {/*<Text style={{fontSize: 16}}>{item.expenses[0].category}</Text>*/}
            {/*<Text style={{fontSize: 12}} >{item.expenses[0].date}</Text>*/}
         </View>
          <View style={{flexDirection: 'row', height: '100%'}}>
              <Text style={{ color : item.type === "B" ? COLORS.green : COLORS.black}}>
                  £{item.username}
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
            data={history}
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
