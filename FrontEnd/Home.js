import { View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Map from '../NavigationScreen/Map'
import DrawerSettings from '../NavigationTypes/DrawerSettings';
import DrawerAccount from '../NavigationTypes/DrawerAccount';
import DrawerReport from '../NavigationTypes/DrawerReport';

const Tab = createBottomTabNavigator();

const Home = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Map" component={Map} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Image source={require('../assets/map.png')} resizeMode='contain'
                            style={{
                                tintColor: focused ? 'blue' : undefined
                            }}
                        />
                    </View>
                )
            }} />
            <Tab.Screen name="Report" component={DrawerReport} options={{
              headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Image source={require('../assets/report.png')} resizeMode='contain'
                            style={{
                                tintColor: focused ? 'blue' : undefined
                            }}
                        />
                    </View>
                )
            }} />
            <Tab.Screen name="Settings" component={DrawerSettings} options={{
                 headerShown: false,
                 headerLeftContainerStyle: {paddingLeft: 15},
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Image source={require('../assets/setting.png')} resizeMode='contain'
                            style={{
                                tintColor: focused ? 'blue' : undefined
                            }}
                        />
                    </View>
                )
            }} />
            <Tab.Screen name="Account" component={DrawerAccount} options={{
                headerShown: false,
                headerLeftContainerStyle: {paddingLeft: 15},
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Image source={require('../assets/account.png')} resizeMode='contain'
                            style={{
                                tintColor: focused ? 'blue' : undefined
                            }}
                        />
                    </View>
                )
            }} 
            />
        </Tab.Navigator>
    )
}
export default Home

