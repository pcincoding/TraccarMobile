import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Report from '../NavigationScreen/Report';
const Drawer = createDrawerNavigator();
const DrawerReport = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name='Combined' component={Report} options={{headerShown: false}}/>
        <Drawer.Screen name='Route' component={Report} options={{headerShown: false}}/>
        <Drawer.Screen name='Events' component={Report} options={{headerShown: false}}/>
        <Drawer.Screen name='Trips' component={Report} options={{headerShown: false}}/>
        <Drawer.Screen name='Stops' component={Report} options={{headerShown: false}}/>
        <Drawer.Screen name='Summary' component={Report} options={{headerShown: false}}/>
        <Drawer.Screen name='Chart' component={Report} options={{headerShown: false}}/>
        <Drawer.Screen name='Replay' component={Report} options={{headerShown: false}}/>
        <Drawer.Screen name='Scheduled Reports' component={Report} options={{headerShown: false}}/>
    </Drawer.Navigator>
  )
}

export default DrawerReport

