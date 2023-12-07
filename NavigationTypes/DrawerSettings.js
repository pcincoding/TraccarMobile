import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Setting from '../NavigationScreen/Setting';
const Drawer = createDrawerNavigator();
const DrawerSettings = () => {
  return (
        <Drawer.Navigator>
            <Drawer.Screen name="Preferences" component={Setting} options={{headerShown: false}}/>
            <Drawer.Screen name="Notifications" component={Setting} options={{headerShown: false}}/>
            <Drawer.Screen name="Account" component={Setting} options={{headerShown: false}}/>
            <Drawer.Screen name="Device" component={Setting} options={{headerShown: false}}/>
            <Drawer.Screen name="Geofences" component={Setting} options={{headerShown: false}}/>
            <Drawer.Screen name="Groups" component={Setting} options={{headerShown: false}}/>
            <Drawer.Screen name="Drivers" component={Setting} options={{headerShown: false}}/>
            <Drawer.Screen name="Calendars" component={Setting} options={{headerShown: false}}/>
            <Drawer.Screen name="Computed Attributes" component={Setting} options={{headerShown: false}}/>
            <Drawer.Screen name="Maintenance" component={Setting} options={{headerShown: false}}/>
            <Drawer.Screen name="Saved Commands" component={Setting} options={{headerShown: false}}/>
        </Drawer.Navigator>
  )
}
export default DrawerSettings
