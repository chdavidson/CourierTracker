import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet
} from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import { COLORS, FONTS, icons } from "../Constants"
import HomeScreen from "../Screens/HomeScreen";
import Settings from "../Screens/Settings";
import { LinearGradient } from 'expo-linear-gradient';
import RecordLandingScreen from "../Screens/RecordLandingScreen";
import CameraComponent from "../components/CameraComponent";

const Tab = createBottomTabNavigator()
const TabBarCustomButton = ({children, onPress}) => {
    return(
        <TouchableOpacity
            style={{
                top: -30,
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 30,
                ...styles.shadow
            }}
            onPress={onPress}
         >
             <LinearGradient
                colors={[COLORS.primary, COLORS.secondary]}
                style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35
                }}
             >
                 {children}
             </LinearGradient>
         </TouchableOpacity>
    )
}
const Tabs = () => {
    return (
        <Tab.Navigator 
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: COLORS.white,
                    borderTopColor: "transparent"
                }
            }}
            screenOptions={{
                headerShown: null
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center',
                            justifyContent: 'center',
                            paddingTop: 20
                        }}>
                        <Image 
                            source={icons.home}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? COLORS.primary
                                : COLORS.black
                            }}
                    
                         />
                         <Text style={{color : focused ? COLORS.primary : COLORS.black,
                            ...FONTS.body5
                         }}>Home</Text>

                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="CameraComponent"
                component={CameraComponent}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center',
                            justifyContent: 'center',
                            paddingTop: 20
                        }}>
                        <Image 
                            source={icons.pie_chart}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? COLORS.primary
                                : COLORS.black
                            }}
                    
                         />
                         <Text style={{color : focused ? COLORS.primary : COLORS.black,
                            ...FONTS.body5
                         }}>Reports</Text>

                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Transaction"
                component={RecordLandingScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={icons.transaction}
                            resizeMode= 'contain'
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: COLORS.white,
                            }} />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton {...props}/>
                    )
                }}
                
            />
            <Tab.Screen
                name="Details"
                component={Detail}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center',
                            justifyContent: 'center',
                            paddingTop: 20
                        }}>
                        <Image 
                            source={icons.line_graph}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? COLORS.primary
                                : COLORS.black
                            }}
                    
                         />
                         <Text style={{color : focused ? COLORS.primary : COLORS.black,
                            ...FONTS.body5
                         }}>Stats</Text>

                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center',
                            justifyContent: 'center',
                            paddingTop: 20
                        }}>
                        <Image 
                            source={icons.settings}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? COLORS.primary
                                : COLORS.black
                            }}
                    
                         />
                         <Text style={{color : focused ? COLORS.primary : COLORS.black,
                            ...FONTS.body5
                         }}>Settings</Text>

                        </View>
                    )
                }}
            />
        </Tab.Navigator>
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

export default Tabs;