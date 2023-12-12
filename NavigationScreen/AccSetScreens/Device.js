import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Collapsible from 'react-native-collapsible'
import { Picker } from '@react-native-picker/picker'
let base64 = require('base-64');
const Device = ({ navigation }) => {

  // for collapsing of accordion
  const [collapsed1, setCollapsed1] = useState(false);
  const [collapsed2, setCollapsed2] = useState(true);
  const [collapsed3, setCollapsed3] = useState(true);

  //for Required accordion
  const [required, setRequired] = useState({
    name: '',
    uniqueId: ''
  })

  // Extra
  const [phone, setPhone] = useState();
  const [model, setModel] = useState();
  const [contact, setContact] = useState();

  //for Category Picker
  const [category, setCategory] = useState();

  // for Required toggle
  const toggleRequired = () => {
    setCollapsed1(!collapsed1);
  }

  // for toggling extra
  const toggleExtra = () => {
    setCollapsed2(!collapsed2);
  }

  // for toggleAttributes
  const toggleAttributes = () => {
    setCollapsed3(!collapsed3);
  }

  // for disabling saving button
  const [isDisable, setIsDisable] = useState(true);
  useEffect(() => {
    if (required.name && required.uniqueId) {
      setIsDisable(false)
    }
    else {
      setIsDisable(true);
    }
  })
  const saveDevice = async () => {
    const email = 'chaudharypra89@gmail.com';
    const password = '123';
    await fetch('https://demo.traccar.org/api/devices', {
      method: 'GET',
      // headers: {
      //   'Content-Type': 'application/json',
      //   'Authorization': 'Basic'+ base64.encode('chaudharypra89@gmail.com'+':'+'123')
      // },
      // body: {
      //   name: "Your",
      //   email: "UniqueId12345",
      //   password: "1111"
      // }
    }).then(async (res) => console.log(await res.headers.get('Authorization')))
      // .then(async (data) => {
      //   if (await data.error) {
      //     console.log("Your Api error: ",await data.error);
      //   }
      //   else {
      //     console.log("Created Successfully");
      //   }
      // })
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image source={require('../../assets/hamberger.png')} style={{ width: 14, height: 14, marginHorizontal: 15 }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, marginLeft: 6 }}>Settings / Device</Text>
      </View>
      <ScrollView>
        <View style={styles.accordionContainer}>
          <View style={styles.accordionMap}>
            <TouchableOpacity onPress={toggleRequired} style={styles.toggleMap}><Text>Required</Text></TouchableOpacity>
            <Collapsible collapsed={collapsed1}>
              <View style={styles.collapsibleMap}>
                <View style={styles.droplistStyle}>
                  <TextInput placeholder='Name' value={required.name} onChangeText={(item) => setRequired({ ...required, name: item })} />
                </View>
                <View style={styles.droplistStyle}>
                  <TextInput placeholder='uniqueId' value={required.uniqueId} onChangeText={(item) => setRequired({ ...required, uniqueId: item })} />
                </View>
              </View>
            </Collapsible>
          </View>
          <View style={styles.accordionMap}>
            <TouchableOpacity onPress={toggleExtra} style={styles.toggleMap}><Text>Extra</Text></TouchableOpacity>
            <Collapsible collapsed={collapsed2}>
              <View style={styles.collapsibleMap}>
                <View style={styles.droplistStyle}>
                  <Picker placeholder='Group'>
                    <Picker.Item label='' value='' />
                  </Picker>
                </View>
                <View style={styles.droplistStyle}>
                  <TextInput placeholder='Phone' value={phone} onChangeText={(e) => setPhone(e)} />
                </View>
                <View style={styles.droplistStyle}>
                  <TextInput placeholder='Model' value={model} onChangeText={(e) => setModel(e)} />
                </View>
                <View style={styles.droplistStyle}>
                  <TextInput placeholder='Contact' value={contact} onChangeText={(e) => setContact(e)} />
                </View>

                <View style={styles.droplistStyle}>
                  <Picker placeholder='Category' selectedValue={category} onValueChange={(item) => setCategory(item)} >
                    <Picker.Item label='Default' value='Default' />
                    <Picker.Item label='Animal' value='Animal' />
                    <Picker.Item label='Bicycle' value='Bicycle' />
                    <Picker.Item label='Boat' value='Boat' />
                    <Picker.Item label='Bus' value='Bus' />
                    <Picker.Item label='Car' value='Car' />
                    <Picker.Item label='Crane' value='Crane' />
                    <Picker.Item label='Helicopter' value='Helicopter' />
                    <Picker.Item label='Motorcycle' value='Motorcycle' />
                    <Picker.Item label='Offroad' value='Offroad' />
                    <Picker.Item label='Person' value='Person' />
                    <Picker.Item label='Pickup' value='Pickup' />
                    <Picker.Item label='Plane' value='Plane' />
                    <Picker.Item label='Ship' value='Ship' />
                    <Picker.Item label='Tractor' value='Tractor' />
                    <Picker.Item label='Train' value='Train' />
                    <Picker.Item label='Tram' value='Tram' />
                    <Picker.Item label='Trolleybus' value='Trolleybus' />
                    <Picker.Item label='Truck' value='Truck' />
                    <Picker.Item label='Scooter' value='Scooter' />
                  </Picker>
                </View>
                <View style={styles.droplistStyle}>
                  <TextInput placeholder='Expiration' value="2099/01/01" />
                </View>
              </View>
            </Collapsible>
          </View>
          <View style={styles.accordionMap}>
            <TouchableOpacity onPress={toggleAttributes} style={styles.toggleMap}><Text>Attributes</Text></TouchableOpacity>
            <Collapsible collapsed={collapsed3}>
              <View style={styles.collapsibleMap}>
                <View style={styles.droplistStyle}>
                  <TouchableOpacity><Text>+ ADD</Text></TouchableOpacity>
                </View>
              </View>
            </Collapsible>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', marginVertical: 15 }}>
            <TouchableOpacity style={styles.cancelStyle}><Text style={{ color: 'blue' }}>Cancel</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.saveStyle, { backgroundColor: isDisable ? 'grey' : 'blue' }]} disabled={isDisable} onPress={saveDevice}><Text style={{ color: 'white' }}>Save</Text></TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Device

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
  cancelStyle: {
    width: '35%',
    paddingHorizontal: 30,
    justifyContent: 'center',
    borderStyle: 'solid',
    borderColor: 'blue',
    borderWidth: 1,
    alignItems: 'center',
    marginHorizontal: 20
  },
  saveStyle: {
    width: '35%',
    paddingHorizontal: 30,
    padding: 10,
    alignItems: 'center'
  }

})