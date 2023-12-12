import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Report from '../NavigationScreen/ReportScreens/Report';
import Route from '../NavigationScreen/ReportScreens/Route';
import Events from '../NavigationScreen/ReportScreens/Events';
import Trips from '../NavigationScreen/ReportScreens/Trips';
import Stops from '../NavigationScreen/ReportScreens/Stops';
import Summary from '../NavigationScreen/ReportScreens/Summary';
import Chart from '../NavigationScreen/ReportScreens/Chart';
import Replay from '../NavigationScreen/ReportScreens/Replay';
import Scheduled from '../NavigationScreen/ReportScreens/Scheduled';

const Drawer = createDrawerNavigator();
const DrawerReport = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name='Combined' component={Report} options={{headerShown: false}}/>
        <Drawer.Screen name='Route' component={Route} options={{headerShown: false}}/>
        <Drawer.Screen name='Events' component={Events} options={{headerShown: false}}/>
        <Drawer.Screen name='Trips' component={Trips} options={{headerShown: false}}/>
        <Drawer.Screen name='Stops' component={Stops} options={{headerShown: false}}/>
        <Drawer.Screen name='Summary' component={Summary} options={{headerShown: false}}/>
        <Drawer.Screen name='Chart' component={Chart} options={{headerShown: false}}/>
        <Drawer.Screen name='Replay' component={Replay} options={{headerShown: false}}/>
        <Drawer.Screen name='Scheduled Reports' component={Scheduled} options={{headerShown: false}}/>
    </Drawer.Navigator>
  )
}

export default DrawerReport

