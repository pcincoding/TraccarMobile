import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Collapsible from 'react-native-collapsible'
import { Picker } from '@react-native-picker/picker'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Account = ({ navigation }) => {
  // for required
  const [yourName, setYourName] = useState('');
  const [youremail, setYouremail] = useState('');
  useEffect(() => {
    fetch('https://demo.traccar.org/api/session?token=SDBGAiEAor7sKk6urMPW7OjZE7H9f6JLG2UC9Yz7VP2VgAvRSgUCIQCGAkmHuvlI3Nq4zF944raVpNEPgajNNSN5IGpIP_1HRXsidSI6NDU5ODAsImUiOiIyMDIzLTEyLTEwVDE4OjE1OjAwLjAwMCswMDowMCJ9', {
      method: 'GET',
    }).then(res => res.json()).then(async (data) => {
      setYourName(data.name);
      setYouremail(data.email)
    })
  })

  // for collapsing of accordion
  const [collapsed1, setCollapsed1] = useState(false);
  const [collapsed2, setCollapsed2] = useState(true);
  const [collapsed3, setCollapsed3] = useState(true);
  const [collapsed4, setCollapsed4] = useState(true);

  //for Prefenences
  const [selectMap, setSelectMap] = useState();
  const [coordinate, setCoordinate] = useState();
  const [speed, setSpeed] = useState();
  const [distance, setDistance] = useState();
  const [altitude, setAltitude] = useState();
  const [volume, setVolume] = useState();

  // for map toggle work
  const toggleRequired = () => {
    setCollapsed1(!collapsed1);
  }

  // for toggling devices
  const togglePreferences = () => {
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
  const Logout = async () => {
    await AsyncStorage.removeItem('LoginItem');
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
        <Image source={require('../../assets/hamberger.png')} style={{ width: 14, height: 14, marginHorizontal: 15 }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, marginLeft: 6 }}>Settings / Account</Text>
      </View>
      <ScrollView>
        <View style={styles.accordionContainer}>
          <View style={styles.accordionMap}>
            <TouchableOpacity onPress={toggleRequired} style={styles.toggleAccount}><Text>Required</Text></TouchableOpacity>
            <Collapsible collapsed={collapsed1}>
              <View style={styles.collapsibleAccount}>
                <View style={styles.droplistStyle}>
                  <TextInput placeholder="Name" value={yourName}/>
                </View>
                <View style={styles.droplistStyle}>
                  <TextInput placeholder="Email" value={youremail} />
                </View>
                <View style={styles.droplistStyle}>
                  <TextInput placeholder="Password" />
                </View>
              </View>
            </Collapsible>
          </View>
          <View style={styles.accordionMap}>
            <TouchableOpacity onPress={togglePreferences} style={styles.toggleAccount}><Text>Preferences</Text></TouchableOpacity>
            <Collapsible collapsed={collapsed2}>
              <View style={styles.collapsibleAccount}>
                <View style={styles.droplistStyle}>
                  <TextInput placeholder="Phone" />
                </View>
                <View style={styles.droplistStyle}>
                  <Picker selectedValue={selectMap} onValueChange={(item) => setSelectMap(item)}>
                    <Picker.Item label='LocationIQ Streets' value="LocationIQ Streets" />
                    <Picker.Item label='LocationIQ Dark' value="LocationIQ Dark" />
                    <Picker.Item label='OpenStreetMap' value="OpenStreetMap" />
                    <Picker.Item label='OpenTopoMap' value="OpenTopoMap" />
                    <Picker.Item label='Carto Basemaps' value="Carto Basemaps" />
                    <Picker.Item label='Google Road' value="Google Road" />
                    <Picker.Item label='Google Satellite' value="Google Satellite" />
                    <Picker.Item label='Google Hybrid' value="Google Hybrid" />
                    <Picker.Item label='AutoNavi' value="AutoNavi" />
                    <Picker.Item label='Ordnance Survey' value="Ordnance Survey" />
                  </Picker>
                </View>
                <View style={styles.droplistStyle}>
                  <Picker selectedValue={coordinate} onValueChange={(item) => setCoordinate(item)}>
                    <Picker.Item label='Decimal Degrees' value="Decimal Degrees" />
                    <Picker.Item label='Degrees Decimal Minutes' value="Degrees Decimal Minutes" />
                    <Picker.Item label='Degrees Minutes Seconds' value="Degrees Minutes Seconds" />
                  </Picker>
                </View>
                <View style={styles.droplistStyle}>
                  <Picker selectedValue={speed} onValueChange={(item) => setSpeed(item)}>
                    <Picker.Item label='kn' value="kn" />
                    <Picker.Item label='km/hr' value="km/hr" />
                    <Picker.Item label='mph' value="mph" />
                  </Picker>
                </View>
                <View style={styles.droplistStyle}>
                  <Picker selectedValue={distance} onValueChange={(item) => setDistance(item)}>
                    <Picker.Item label='km' value="km" />
                    <Picker.Item label='mi' value="mi" />
                    <Picker.Item label='nmi' value="nmi" />
                  </Picker>
                </View>
                <View style={styles.droplistStyle}>
                  <Picker selectedValue={altitude} onValueChange={(item) => setAltitude(item)}>
                    <Picker.Item label='m' value="m" />
                    <Picker.Item label='ft' value="ft" />
                  </Picker>
                </View>
                <View style={styles.droplistStyle}>
                  <Picker selectedValue={volume} onValueChange={(item) => setVolume(item)}>
                    <Picker.Item label='Litre' value="Litre" />
                    <Picker.Item label='U.S Gallon' value="U.S Gallon" />
                    <Picker.Item label='Imp. Gallon' value="Imp. Gallon" />
                  </Picker>
                </View>
              </View>
            </Collapsible>
          </View>
          <View style={styles.accordionMap}>
            <TouchableOpacity onPress={toggleNotification} style={styles.toggleAccount}><Text>Location</Text></TouchableOpacity>
            <Collapsible collapsed={collapsed3}>
              <View style={styles.collapsibleAccount}>
                <View style={styles.droplistStyle}>
                  <TextInput placeholder="Latitude" value="0" />
                </View>
                <View style={styles.droplistStyle}>
                  <TextInput placeholder="Longitude" value="0" />
                </View>
                <View style={styles.droplistStyle}>
                  <TextInput placeholder="Zomm" value="0" />
                </View>
                <View style={styles.droplistStyle}>
                  <TouchableOpacity>
                    <Text>CURRENT LOCATION</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Collapsible>
          </View>
          <View style={styles.accordionMap}>
            <TouchableOpacity onPress={toggleToken} style={styles.toggleAccount}><Text>Delete Account</Text></TouchableOpacity>
            <Collapsible collapsed={collapsed4}>
              <View style={styles.collapsibleAccount}>
                <View style={styles.droplistStyle}>
                  <TextInput placeholder="Email" value={youremail} />
                </View>
                <TouchableOpacity><Text>Delete Account</Text></TouchableOpacity>
              </View>
            </Collapsible>
          </View>
          <View style={styles.accordionMap}>
            <TouchableOpacity onPress={Logout}>
              <Text>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity><Text>Cancel</Text></TouchableOpacity>
        <TouchableOpacity><Text>Save</Text></TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default Account

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
  toggleAccount: {
    width: '100%',
    paddingVertical: 10,
    display: 'flex',
    paddingLeft: 15,
    justifyContent: 'center'
  },
  collapsibleAccount: {
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