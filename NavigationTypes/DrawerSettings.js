import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Account from '../NavigationScreen/AccSetScreens/Account';
import Setting from '../NavigationScreen/AccSetScreens/Setting'
import Notifications from '../NavigationScreen/AccSetScreens/Notifications'
import Device from '../NavigationScreen/AccSetScreens/Device'
import Geofences from '../NavigationScreen/AccSetScreens/Geofences'
import Groups from '../NavigationScreen/AccSetScreens/Groups'
import Drivers from '../NavigationScreen/AccSetScreens/Drivers'
import Calendars from '../NavigationScreen/AccSetScreens/Calendars'
import Attributes from '../NavigationScreen/AccSetScreens/Attributes'
import Maintenance from '../NavigationScreen/AccSetScreens/Maintenance'
import Commands from '../NavigationScreen/AccSetScreens/Commands'
const Drawer = createDrawerNavigator();
const DrawerSettings = () => {
  return (
        <Drawer.Navigator>
            <Drawer.Screen name="Preferences" component={Setting} options={{headerShown: false}}/>
            <Drawer.Screen name="Notifications" component={Notifications} options={{headerShown: false}}/>
            <Drawer.Screen name="Account" component={Account} options={{headerShown: false}}/>
            <Drawer.Screen name="Device" component={Device} options={{headerShown: false}}/>
            <Drawer.Screen name="Geofences" component={Geofences} options={{headerShown: false}}/>
            <Drawer.Screen name="Groups" component={Groups} options={{headerShown: false}}/>
            <Drawer.Screen name="Drivers" component={Drivers} options={{headerShown: false}}/>
            <Drawer.Screen name="Calendars" component={Calendars} options={{headerShown: false}}/>
            <Drawer.Screen name="Computed Attributes" component={Attributes} options={{headerShown: false}}/>
            <Drawer.Screen name="Maintenance" component={Maintenance} options={{headerShown: false}}/>
            <Drawer.Screen name="Saved Commands" component={Commands} options={{headerShown: false}}/>
        </Drawer.Navigator>
  )
}
export default DrawerSettings
