import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import { Table, Row, Rows } from 'react-native-table-component'

const Scheduled = ({ navigation }) => {
  const tableHead = ['Type', 'Description', 'Calendar'];
  const tableData = [['1', '2', '3'], ['a', 'b', 'c'], ['1', '2', '3']];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={require('../../assets/hamberger.png')} style={{ width: 14, height: 14, marginHorizontal: 15 }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, marginLeft: 6 }}>Reports / Scheduled Report</Text>
      </View>
      <View style={styles.trackdata}>
        <Table>
          <Row data={tableHead} style={{ height: 60, borderBottomWidth: 1, borderColor: '#7d7d7d' }} />
          <Rows data={tableData} />
        </Table>
      </View>
    </View>
  )
}

export default Scheduled

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
  btntext: {
    color: 'disabled' ? 'white' : 'green'
  },
  trackdata: {
    width: '90%',
    marginTop: 20
  },
  tbheading: {

  }
})