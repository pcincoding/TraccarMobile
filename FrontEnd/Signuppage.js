import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import React, { useState } from 'react';
const Signuppage = ({ navigation }) => {
  const [fdata, setFdata] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: ''
  });
  const submit = () =>{
    if(fdata.name == '' || fdata.email == '' || fdata.password == '' || fdata.cpassword ==''){
      Alert.alert("Plz fill in all the details of the data");
    }
    else{
      if(fdata.password !==  fdata.cpassword){
        Alert.alert("Password and Confirm password doesn't match");
      }
      else{
        fetch('http://192.168.1.67:3000/verify',{
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify(fdata),
        })
        .then(async res=> await res.json())
        .then(async data => {
          const dataerror =await data.error;
          if(dataerror === "Invalid Credentials"){
           alert(dataerror);
          }
          else if(data.message = 'Verification code sent to your email'){
            alert(data.message);
            navigation.navigate('Verification',{userdata:data.userdata});
          }
        }
        )   
      }
    }

  }
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={{ textAlign: 'center', fontSize: 30, marginVertical: 50 }}>Enroll By</Text>
      <View style={styles.inputStyle}>
        <Text style={styles.labelStyle}>Name</Text>
        <TextInput style={styles.inputbox} placeholder='Your Name' value={fdata.name} autoComplete='off' onChangeText={(text)=> setFdata({...fdata, name: text})} maxLength={20} />
      </View>
      <View style={styles.inputStyle}>
        <Text style={styles.labelStyle}>Email</Text>
        <TextInput style={styles.inputbox} placeholder='Your Email' inputMode='email' autoCapitalize='none'  value={fdata.email} onChangeText={(text)=> setFdata({...fdata, email: text})} />
      </View>
      <View style={styles.inputStyle}>
        <Text style={styles.labelStyle}>Password</Text>
        <TextInput style={styles.inputbox} placeholder='Your Password' value={fdata.password} onChangeText={(text)=> setFdata({...fdata, password: text})} maxLength={15} secureTextEntry={true} />
      </View>
      <View style={styles.inputStyle}>
        <Text style={styles.labelStyle}>Confirm Password</Text>
        <TextInput style={styles.inputbox} placeholder='Reenter Password' value={fdata.cpassword} onChangeText={(text)=> setFdata({...fdata, cpassword: text})} maxLength={15} secureTextEntry={true} />
      </View>
      <View style={styles.btnStyle}>
        <TouchableOpacity onPress={submit} style={styles.register}><Text style={{color: '#fff', fontSize: 15}}>Save</Text></TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  )
}

export default Signuppage

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  inputStyle: {
    marginHorizontal: 20,
    marginBottom: 10
  },
  labelStyle:{
    fontSize: 20
  },
  inputbox:{
    padding: 10,
    borderWidth: 1,
    borderColor: '#7d7d7d',
    borderRadius: 5
  },
  btnStyle:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 20
  },
  register:{
    backgroundColor: 'crimson',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5
  }


})