import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'

const ForgetVerify = ({ navigation, route }) => {
  const { useremail, code } = route.params;
  console.log(useremail,code);
  const [coded, setCoded] = useState("");
  const verifyCode = () => {
    
    if (coded == '') {
      alert("Please enter verification code");
    }
    else if (coded != code) {
      alert("Incorrect verification code");
    }
    else{
      navigation.navigate('Resetpassword',{useremail, code});
    }
    

  }
  return (
    <ScrollView style={styles.bigcontainer}>
      <View>
        <View style={styles.container}>
          <Text style={{ fontSize: 32, fontWeight: '700', textAlign: 'center', marginBottom: 20 }}>Verification</Text>
          <Text style={styles.msg}>Verification code sent to your email</Text>
          <Text style={styles.label}>Code</Text>
          <TextInput style={styles.inputcode} placeholder="Enter 6-digit OTP code" value={coded} onChangeText={(e) => setCoded(e)} />
          <TouchableOpacity style={styles.verifybtn} onPress={()=>verifyCode()} ><Text style={{ color: '#fff', fontSize: 23 }}>Send Email</Text></TouchableOpacity>
          <Text style={styles.lasttxt}>Didn't receive code ? <Text style={{ color: 'red' }}>Resend</Text></Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default ForgetVerify

const styles = StyleSheet.create({
  bigcontainer: {
    zIndex: 1,
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    paddingTop: 300
  },
  container: {
    width: '100%',
    minHeight: '70%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#fff',
    zIndex: -1,
    marginHorizontal: 3,
    paddingHorizontal: 50,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  },
  msg: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
    marginBottom: 50
  },
  label: {
    color: "red",
    fontSize: 20,
    marginBottom: 5
  },
  inputcode: {
    color: '#7d7d7d',
    padding: 10,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 6,
    fontSize: 18,
    fontWeight: '700'
  },
  verifybtn: {
    backgroundColor: 'blue',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 15,
    padding: 10
  },
  lasttxt: {
    fontSize: 20,
    marginVertical: 30,
    textAlign: 'center'
  }
})