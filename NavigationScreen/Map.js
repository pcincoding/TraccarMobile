import { StyleSheet, View, TextInput, Text, Image, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import MapView, {Marker} from 'react-native-maps'
import * as Location from 'expo-location'
import Tooltip from 'react-native-walkthrough-tooltip'

const Map = () => {
  const [mapRegion, setMapRegion] = useState({
    latitude: 28.39487,
    longitude: 84.124008,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421

  })
  const [showtip,setShowtip] = useState(true);
  const userLocation = async () =>{
    let {status} = await Location.requestForegroundPermissionsAsync();
    if(status !== "granted"){
      setErrorMsg('Permission to access location was denied');
    }
    let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    })
  }
  useEffect(() => {
    userLocation();
  }, [])
  // const register = () =>{

  // }
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>console.log("hello")}><Image source={require('../assets/list.png')} resizeMode='contain' /></TouchableOpacity>
        <View style={styles.searchcontainer}>
          <TextInput placeholder='Search Devices' style={styles.search}></TextInput>
          <Image source={require('../assets/equilizer.png')} resizeMode='contain' style={{ marginRight: 10 }} />
        </View>
        <Tooltip isVisible={showtip} placement='bottom' content={
          <View><Text>Register Your Device</Text></View>
        } onClose={()=>setShowtip(false)}
        >
        <View><Text style={{ fontSize: 30 }} >+</Text></View>
        </Tooltip>
      </View>
      <View style={styles.mapcontainer}>
        <MapView Region={mapRegion}
          zoomControlEnabled={true} zoomEnabled={true}
          style={styles.map}>
        <Marker coordinate={mapRegion} title='Marker'/>    
        </MapView>
      </View>
    </View>

  )
}

export default Map

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  header: {
    width: '100%',
    height: '10%',
    borderWidth: 1,
    borderColor: '#7d7d7d',
    marginTop: 28,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 200
    },
    shadowOpacity: 0.9,
    elevation: 5
  },
  searchcontainer: {
    width: '70%',
    height: '65%',
    borderWidth: 1,
    borderColor: 'grey',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'space-between',
    paddingLeft: 6,
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: 5,
    paddingLeft: 10,
  },
  mapcontainer: {
    width: '100%',
    height: '85%'
  },
  map: {
    width: '100%',
    height: '100%'
  }
})