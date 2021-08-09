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
import {useNavigation} from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

const HeadBar = () => {

    const navigation = useNavigation();
  return (
      <View style={{
          paddingHorizontal: SIZES.padding,
          flexDirection: 'row'
      }}>
          <View style={{
              flex: 1, alignItems: 'flex-start'
          }} >
              <TouchableOpacity style={{
                  flexDirection: 'row',
                  alignItems: 'center'
              }} onPress={() => navigation.goBack()}>
                  <Image source={icons.back_arrow}
                        resizeMode="contain"
                         style={{
                             width: 25,
                             height: 25,
                             tintColor: COLORS.gray
                         }} />
                  <Text style={{marginLeft: SIZES.base, fontSize: 20, color: 'black'}}>Back</Text>

              </TouchableOpacity>
              {/*<Ionicons*/}
              {/*    name='careleft'*/}
              {/*    size={50}*/}
              {/*    color="black"*/}
              {/*    style={{*/}
              {/*        flexDirection: 'row',*/}
              {/*        alignItems: 'center'*/}
              {/*    }} onPress={() => navigation.goBack()}*/}
              {/*/>*/}
          </View>
      </View>
  )
}
export default HeadBar