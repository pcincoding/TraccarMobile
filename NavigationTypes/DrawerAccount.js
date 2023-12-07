import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Account from '../NavigationScreen/Account';
const Drawer = createDrawerNavigator();
const DrawerAccount = () => {
  return (
        <Drawer.Navigator>
            <Drawer.Screen name="Preferences" component={Account} options={{headerShown: false}}/>
            <Drawer.Screen name="Notifications" component={Account} options={{headerShown: false}}/>
            <Drawer.Screen name="Accounts" component={Account} options={{headerShown: false}}/>
            <Drawer.Screen name="Device" component={Account} options={{headerShown: false}}/>
            <Drawer.Screen name="Geofences" component={Account} options={{headerShown: false}}/>
            <Drawer.Screen name="Groups" component={Account} options={{headerShown: false}}/>
            <Drawer.Screen name="Drivers" component={Account} options={{headerShown: false}}/>
            <Drawer.Screen name="Calendars" component={Account} options={{headerShown: false}}/>
            <Drawer.Screen name="Computed Attributes" component={Account} options={{headerShown: false}}/>
            <Drawer.Screen name="Maintenance" component={Account} options={{headerShown: false}}/>
            <Drawer.Screen name="Saved Commands" component={Account} options={{headerShown: false}}/>
        </Drawer.Navigator>
  )
}
export default DrawerAccount
