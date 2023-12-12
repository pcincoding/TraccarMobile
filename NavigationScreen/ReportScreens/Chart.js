import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';

const Chart = ({navigation}) => {
  const [selectdevice, setSelectdevice] = useState();
  const [selectChartType, setSelectChartType] = useState();
  const [selectPeriod, setSelectPeriod] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>
        <Image source={require('../../assets/hamberger.png')} style={{ width: 14, height: 14, marginHorizontal: 15 }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, marginLeft: 6 }}>Reports / Chart</Text>
      </View>
      {/* <DrawerNav /> */}
      
      <View style={styles.dropdownsContainer}>
        <View style={styles.dropdown}>
          <Picker selectedValue={selectdevice} onValueChange={(item) => setSelectdevice(item)} style={styles.devices}>
            <Picker.Item label='Devices' value="nepali" />
          </Picker>
        </View>
        <View style={styles.dropdown}>
          <Picker selectedValue={selectPeriod} onValueChange={(item) => setSelectPeriod(item)} style={styles.devices}>
            <Picker.Item label='Today' value="Today" />
            <Picker.Item label='Yesterday' value="Yesterday" />
            <Picker.Item label='This Week' value="This Week" />
            <Picker.Item label='Previous Week' value="Previous Week" />
            <Picker.Item label='This Month' value="This Month" />
            <Picker.Item label='Previous Month' value="Previous Month" />
            <Picker.Item label='Custom' value="Custom" />
          </Picker>
        </View>
        <View style={styles.dropdown}>
          <Picker selectedValue={selectChartType} onValueChange={(item) => setSelectChartType(item)} style={styles.devices}>
            <Picker.Item label='Nepali' value="nepali" />
          </Picker>
        </View>
        <TouchableOpacity style={styles.btn}><Text style={styles.btntext}>SHOW</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default Chart

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
  dropdownsContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  dropdown: {
    width: '90%',
    height: '7%',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  devices: {
    width: '100%',
    display: 'flex',
    color: 'grey'
  },
  btn: {
    width: '90%',
    height: '7%',
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: 'disabled' ? 'grey' : undefined,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btntext:{
    color: 'disabled' ? 'white' : 'green' 
  },
  trackdata:{
    width: '90%',
    marginTop: 20
  },
  tbheading:{

  }
})