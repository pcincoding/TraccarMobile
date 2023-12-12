import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Collapsible from 'react-native-collapsible'
import { Picker } from '@react-native-picker/picker'
import CheckBox from 'expo-checkbox'
import DateTimePicker from "@react-native-community/datetimepicker";

const Groups = ({navigation}) => {

  // for collapsing of accordion
  const [collapsed1, setCollapsed1] = useState(false);
  const [collapsed2, setCollapsed2] = useState(true);
  const [collapsed3, setCollapsed3] = useState(true);
  const [collapsed4, setCollapsed4] = useState(true);

  //for Maps accordion
  const [activeMap, setActiveMap] = useState('');
  const [mapoverlay, setMapoverlay] = useState('Map Overlay');
  const [info, setInfo] = useState('');
  const [selectedval, setSelectedval] = useState([]);
  const [routes, setRoutes] = useState('');
  const [direction, setDirection] = useState('');
  const [isChecked1, setIsChecked1] = useState(true);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);

  // for devices
  const [title, setTitle] = useState('Name');
  const [deviceDetails, setDeviceDetails] = useState('');


  // for notification
  const [soundevent, setSoundevent] = useState('Sound Event');
  const [soundalarms, setSoundalarms] = useState('SOS');

  // for map toggle work
  const toggleMapwork = () => {
    setCollapsed1(!collapsed1);
  }

  // for toggling devices
  const toggleDevices = () => {
    setCollapsed2(!collapsed2);
  }

  // for toggleNotification
  const toggleNotification = () => {
    setCollapsed3(!collapsed3);
  }

  // for token
  const toggleToken = () => {
    setCollapsed4(!collapsed4);
  }

  const handleChange = (item) => {
    setInfo(item);
    if (info) {
      setSelectedval([...info, selectedval]);
      console.log(selectedval);
      setInfo('');
    }
  }
  // for date and time
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const showDatePicker = () => {
   return setDatePickerVisibility(true);

  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = ({ type }, date) => {
    if (type == "set") {
      hideDatePicker();
      setSelectedDate(date);  
    }
    else{
      hideDatePicker();
    }

  };


  //for devices accordion
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
        <Image source={require('../../assets/hamberger.png')} style={{ width: 14, height: 14, marginHorizontal: 15 }} />
        </TouchableOpacity>
          <Text style={{ fontSize: 20, marginLeft: 6 }}>Settings / Groups</Text>
      </View>
      <ScrollView>
        <View style={styles.accordionContainer}>
          <View style={styles.accordionMap}>
            <TouchableOpacity onPress={toggleMapwork} style={styles.toggleMap}><Text>Map</Text></TouchableOpacity>
            <Collapsible collapsed={collapsed1}>
              <View style={styles.collapsibleMap}>
                <View style={styles.droplistStyle}>
                  <Picker selectedValue={activeMap} onValueChange={(item) => setActiveMap(item)}>
                    <Picker.Item label='Location IQ Street' value="Location IQ Street" />
                    <Picker.Item label='OpenStreetMap' value="OpenStreetMap" />
                    <Picker.Item label='Location IQ Dark' value="Location IQ Dark" />
                    <Picker.Item label='Open TopoMap' value="Open TopoMap" />
                    <Picker.Item label='Carto Basemaps' value="Carto Basemaps" />
                    <Picker.Item label='Google Road' value="Google Road" />
                    <Picker.Item label='Google Satellite' value="Google Satellite" />
                    <Picker.Item label='Google Hybrid' value="Google Hybrid" />
                    <Picker.Item label='MapTiler Basic' value="MapTiler Basic" />
                    <Picker.Item label='MapTiler Hybrid' value="MapTiler Hybrid" />
                    <Picker.Item label='Bing Maps Road' value='Bing Maps Road' />
                    <Picker.Item label='Bing Maps Aerial' value='Bing Maps Aerial' />
                    <Picker.Item label='Bing Maps Hybrid' value='Bing Maps Hybrid' />
                    <Picker.Item label='TomTom Basic' value='TomTom Basic' />
                    <Picker.Item label='Here Basic' value='Here Basic' />
                    <Picker.Item label='Here Hybrid' value='Here Hybrid' />
                    <Picker.Item label='Here Satellite' value='Here Satellite' />
                    <Picker.Item label='AutoNavi' value='AutoNavi' />
                    <Picker.Item label='Ordinance Survey' value='Ordinance Survey' />
                    <Picker.Item label='Mapbox Outdoors' value='Mapbox Outdoors' />
                    <Picker.Item label='Mapbox Street' value='Mapbox Street' />
                    <Picker.Item label='Mapbox Satellite' value='Mapbox Satellite' />
                    <Picker.Item label='Custom (XYZ)' value='Custom (XYZ)' />
                  </Picker>
                </View>
                <View style={styles.droplistStyle}>
                  <Picker selectedValue={mapoverlay} onValueChange={(item) => setMapoverlay(item)}>
                    <Picker.Item label='' value="" />
                    <Picker.Item label='OpenSeaMap' value="OpenSeaMap" />
                    <Picker.Item label='OpenRailwayMap' value="OpenRailwayMap" />
                    <Picker.Item label='OpenWeather Clouds' value="OpenWeather Clouds" />
                    <Picker.Item label='OpenWeather Precipitation' value='OpenWeather Precipitation' />
                    <Picker.Item label='OpenWeather Pressure' value='OpenWeather Pressure' />
                    <Picker.Item label='OpenWeather Wind' value='OpenWeather Wind' />
                    <Picker.Item label='OpenWeather Temperature' value='OpenWeather Temperature' />
                    <Picker.Item label='TomTom Traffic Flow' value='TomTom Traffic Flow' />
                    <Picker.Item label='TomTom Traffic Incidents' value='TomTom Traffic Incidents' />
                    <Picker.Item label='Here Traffic Flow' value='Here Traffic Flow' />
                    <Picker.Item label='Custom Overlay' value='Custom Overlay' />
                  </Picker>
                </View>
                <View style={styles.droplistStyle}>
                  <Picker selectedValue={info} onValueChange={(e) => handleChange(e)}>
                    <Picker.Item label='OpenSeaMap' value="OpenSeaMap" />
                    <Picker.Item label='OpenRailwayMap' value="OpenRailwayMap" />
                    <Picker.Item label='OpenWeather Clouds' value="OpenWeather Clouds" />
                    <Picker.Item label='OpenWeather Precipitation' value='OpenWeather Precipitation' />
                    <Picker.Item label='OpenWeather Pressure' value='OpenWeather Pressure' />
                    <Picker.Item label='OpenWeather Wind' value='OpenWeather Wind' />
                    <Picker.Item label='OpenWeather Temperature' value='OpenWeather Temperature' />
                    <Picker.Item label='TomTom Traffic Flow' value='TomTom Traffic Flow' />
                    <Picker.Item label='TomTom Traffic Incidents' value='TomTom Traffic Incidents' />
                    <Picker.Item label='Here Traffic Flow' value='Here Traffic Flow' />
                    <Picker.Item label='Custom Overlay' value='Custom Overlay' />
                  </Picker>
                </View>
                <View style={styles.droplistStyle}>
                  <Picker selectedValue={routes} onValueChange={(item) => setRoutes(item)}>
                    <Picker.Item label='Disabled' value="Disabled" />
                    <Picker.Item label='Selected Device' value='Selected Device' />
                    <Picker.Item label='All Devices' value='All Devices' />
                  </Picker>
                </View>
                <View style={styles.droplistStyle}>
                  <Picker selectedValue={direction} onValueChange={(item) => setDirection(item)}>
                    <Picker.Item label='Disabled' value="Disabled" />
                    <Picker.Item label='Selected Device' value='Selected Device' />
                    <Picker.Item label='All Devices' value='All Devices' />
                  </Picker>
                </View>
                <View style={{ alignSelf: 'stretch' }}>
                  <View style={styles.checkboxStyle}>
                    <CheckBox value={isChecked1} onValueChange={() => setIsChecked1(!isChecked1)} />
                    <Text>Show Georeferences</Text>
                  </View>
                  <View style={styles.checkboxStyle}>
                    <CheckBox value={isChecked2} onValueChange={() => setIsChecked2(!isChecked2)} />
                    <Text>Follow</Text>
                  </View>
                  <View style={styles.checkboxStyle}>
                    <CheckBox value={isChecked3} onValueChange={() => setIsChecked3(!isChecked3)} />
                    <Text>Markers Clustering</Text>
                  </View>
                  <View style={styles.checkboxStyle}>
                    <CheckBox value={isChecked4} onValueChange={() => setIsChecked4(!isChecked4)} />
                    <Text>Show Map on Selection</Text>
                  </View>
                </View>
              </View>
            </Collapsible>
          </View>
          <View style={styles.accordionMap}>
            <TouchableOpacity onPress={toggleDevices} style={styles.toggleMap}><Text>Devices</Text></TouchableOpacity>
            <Collapsible collapsed={collapsed2}>
              <View style={styles.collapsibleMap}>
                <View style={styles.droplistStyle}>
                  <Picker selectedValue={title} onValueChange={(item) => setTitle(item)}>
                    <Picker.Item label='Name' value="Name" />
                    <Picker.Item label='Identifier' value="Identifier" />
                    <Picker.Item label='Phone' value="Phone" />
                    <Picker.Item label='Model' value="Model" />
                    <Picker.Item label='Contact' value="Contact" />
                  </Picker>
                </View>
                <View style={styles.droplistStyle}>
                  <Picker selectedValue={deviceDetails} onValueChange={(item) => setDeviceDetails(item)}>
                    <Picker.Item label='Name' value="Name" />
                    <Picker.Item label='Identifier' value="Identifier" />
                    <Picker.Item label='Phone' value="Phone" />
                    <Picker.Item label='Model' value="Model" />
                    <Picker.Item label='Contact' value="Contact" />
                  </Picker>
                </View>
              </View>
            </Collapsible>
          </View>
          <View style={styles.accordionMap}>
            <TouchableOpacity onPress={toggleNotification} style={styles.toggleMap}><Text>Notification Sound</Text></TouchableOpacity>
            <Collapsible collapsed={collapsed3}>
              <View style={styles.collapsibleMap}>
                <View style={styles.droplistStyle}>
                  <Picker selectedValue={soundevent} onValueChange={(item) => setSoundevent(item)}>
                    <Picker.Item label='Command result' value="Command result" />
                    <Picker.Item label='Status online' value="Status online" />
                    <Picker.Item label='Status offline' value="Status offline" />
                    <Picker.Item label='Device inactive' value="Device inactive" />
                    <Picker.Item label='Device moving' value="Device moving" />
                    <Picker.Item label='Device stopped' value="Device stopped" />
                    <Picker.Item label='Speed limit exceeded' value="Speed limit exceeded" />
                    <Picker.Item label='Fuel drop' value="Fuel drop" />
                    <Picker.Item label='Fuel increase' value="Fuel increase" />
                    <Picker.Item label='Geofence entered' value="Geofence entered" />
                    <Picker.Item label='Alarm' value="Alarm" />
                    <Picker.Item label='Ignition on' value="Ignition on" />
                    <Picker.Item label='Ignition off' value="Ignition off" />
                    <Picker.Item label='Maintenance required' value="Maintenance required" />
                    <Picker.Item label='Text message received' value="Text message received" />
                    <Picker.Item label='Driver changed' value="Driver changed" />
                    <Picker.Item label='Media' value="Media" />
                  </Picker>
                </View>
                <View style={styles.droplistStyle}>
                  <Picker selectedValue={soundalarms} onValueChange={(item) => setSoundalarms(item)}>
                    <Picker.Item label='General' value="General" />
                    <Picker.Item label='SOS' value="SOS" />
                    <Picker.Item label='Vibration' value="Vibration" />
                    <Picker.Item label='Movement' value="Movement" />
                    <Picker.Item label='Low speed' value="Low speed" />
                    <Picker.Item label='Overspeed' value="Overspeed" />
                    <Picker.Item label='Fall Down' value="Fall Down" />
                    <Picker.Item label='Low Power' value="Low Power" />
                    <Picker.Item label='Low Battery' value="Low Battery" />
                    <Picker.Item label='Fault' value="Fault" />
                    <Picker.Item label='Power Off' value="Power Off" />
                    <Picker.Item label='Power On' value="Power On" />
                    <Picker.Item label='Door' value="Door" />
                    <Picker.Item label='Lock' value="Lock" />
                    <Picker.Item label='Unlock' value="Unlock" />
                    <Picker.Item label='Geofence' value="Geofence" />
                    <Picker.Item label='Geofence Enter' value="Geofence Enter" />
                    <Picker.Item label='Geofence Exit' value="Geofence Exit" />
                    <Picker.Item label='GPS Antenna Cut' value="GPS Antenna Cut" />
                    <Picker.Item label='Accident' value="Accident" />
                    <Picker.Item label='Tow' value="Tow" />
                    <Picker.Item label='Idle' value="Idle" />
                    <Picker.Item label='High RPM' value="High RPM" />
                    <Picker.Item label='High Acceleration' value="High Acceleration" />
                    <Picker.Item label='Hard Braking' value="Hard Braking" />
                    <Picker.Item label='Hard Cornering' value="Hard Cornering" />
                    <Picker.Item label='Lane Change' value="Lane Change" />
                    <Picker.Item label='Fatigue Driving' value="Fatigue Driving" />
                    <Picker.Item label='Power Cut' value="Power Cut" />
                    <Picker.Item label='Power Restored' value="Power Restored" />
                    <Picker.Item label='Jamming' value="Jamming" />
                    <Picker.Item label='Temperature' value="Temperature" />
                    <Picker.Item label='Parking' value="Parking" />
                    <Picker.Item label='Bonnet' value="Bonnet" />
                    <Picker.Item label='Foot Brake' value="Foot Brake" />
                    <Picker.Item label='Fuel Leak' value="Fuel Leak" />
                    <Picker.Item label='Tampering' value="Tampering" />
                    <Picker.Item label='Removing' value="Removing" />
                  </Picker>
                </View>
              </View>
            </Collapsible>
          </View>
          <View style={styles.accordionMap}>
            <TouchableOpacity onPress={toggleToken} style={styles.toggleMap}><Text>Token</Text></TouchableOpacity>
            <Collapsible collapsed={collapsed4}>
              <View style={styles.collapsibleMap}>
                <View style={styles.droplistStyle}>
                    <TextInput value={selectedDate ? selectedDate.toLocaleDateString() : ''} onPressIn={showDatePicker} onChangeText={(e)=>setSelectedDate(e)} />
                  {isDatePickerVisible && (
                    <DateTimePicker
                      testID='dateTimePicker'
                      value={selectedDate}
                      mode="date"
                      onChange={handleConfirm}
                    />
                  )}
                </View>
                <View style={styles.droplistStyle}>
                  <Picker selectedValue={soundalarms} onValueChange={(item) => setSoundalarms(item)}>
                    <Picker.Item label='General' value="General" />
                    <Picker.Item label='SOS' value="SOS" />
                    <Picker.Item label='Vibration' value="Vibration" />
                    <Picker.Item label='Movement' value="Movement" />
                    <Picker.Item label='Low speed' value="Low speed" />
                    <Picker.Item label='Overspeed' value="Overspeed" />
                    <Picker.Item label='Fall Down' value="Fall Down" />
                    <Picker.Item label='Low Power' value="Low Power" />
                    <Picker.Item label='Low Battery' value="Low Battery" />
                    <Picker.Item label='Fault' value="Fault" />
                    <Picker.Item label='Power Off' value="Power Off" />
                    <Picker.Item label='Power On' value="Power On" />
                    <Picker.Item label='Door' value="Door" />
                    <Picker.Item label='Lock' value="Lock" />
                    <Picker.Item label='Unlock' value="Unlock" />
                    <Picker.Item label='Geofence' value="Geofence" />
                    <Picker.Item label='Geofence Enter' value="Geofence Enter" />
                    <Picker.Item label='Geofence Exit' value="Geofence Exit" />
                    <Picker.Item label='GPS Antenna Cut' value="GPS Antenna Cut" />
                    <Picker.Item label='Accident' value="Accident" />
                    <Picker.Item label='Tow' value="Tow" />
                    <Picker.Item label='Idle' value="Idle" />
                    <Picker.Item label='High RPM' value="High RPM" />
                    <Picker.Item label='High Acceleration' value="High Acceleration" />
                    <Picker.Item label='Hard Braking' value="Hard Braking" />
                    <Picker.Item label='Hard Cornering' value="Hard Cornering" />
                    <Picker.Item label='Lane Change' value="Lane Change" />
                    <Picker.Item label='Fatigue Driving' value="Fatigue Driving" />
                    <Picker.Item label='Power Cut' value="Power Cut" />
                    <Picker.Item label='Power Restored' value="Power Restored" />
                    <Picker.Item label='Jamming' value="Jamming" />
                    <Picker.Item label='Temperature' value="Temperature" />
                    <Picker.Item label='Parking' value="Parking" />
                    <Picker.Item label='Bonnet' value="Bonnet" />
                    <Picker.Item label='Foot Brake' value="Foot Brake" />
                    <Picker.Item label='Fuel Leak' value="Fuel Leak" />
                    <Picker.Item label='Tampering' value="Tampering" />
                    <Picker.Item label='Removing' value="Removing" />
                  </Picker>
                </View>
              </View>
            </Collapsible>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Groups

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  headerContainer: {
    width: '100%',
    height: '9%',
    marginTop: 28,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    shadowColor: '#7d7d7d',
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 5
  },
  accordionContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 20
  },
  accordionMap: {
    width: '90%',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowColor: 'grey',
    elevation: 5,
    borderRadius: 5,
  },
  toggleMap: {
    width: '100%',
    paddingVertical: 10,
    display: 'flex',
    paddingLeft: 15,
    justifyContent: 'center'
  },
  collapsibleMap: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  droplistStyle: {
    width: '85%',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    marginVertical: 7
  },
  checkboxStyle: {
    flexDirection: 'row',
    marginHorizontal: 25,
    marginVertical: 10,
    gap: 15
  }
})