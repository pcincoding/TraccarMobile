import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import React,{ useState } from 'react'

const Resetpassword = ({ navigation, route }) => {
  let {useremail} = route.params;
  const [rpass, setRpass] = useState({
    rpassword: '',
    crpassword: '',
    useremail
  })
  const resetbackend = () =>{
    if(rpass.rpassword != rpass.crpassword){
      alert("Your password and confirmpassword did't match");
    }
    else{
      try{
        fetch('http://192.168.1.67:3000/resetpassword',{
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify(rpass)
        }).then(res => res.json())
        .then(data=> {
          if(data.message=="Your password reset successfully"){
            alert(data.message);
            navigation.navigate('Login');
          }
        })

      }catch(err){
        console.log('Your error is'+err);
      }
    }
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/telemkotrack_bg.jpg')} style={styles.imgStyle} resizeMode='cover'>
        <View>
          <Text style={{ color: 'red', fontSize: 20, paddingLeft: 10 }}>Telemko</Text>
          <Text style={{ fontSize: 10, paddingLeft: 10 }}>MONITORING ASSETS</Text>
        </View>
        <View style={{ width: 200, marginTop: 35 }}>
          <Text style={{ fontSize: 20, paddingLeft: 10 }}>Reset Your Account</Text>
          <Text style={{ fontSize: 12, paddingLeft: 10, marginBottom: 30 }}>Access our premium tracking platform to monitor your assets all over Nepal</Text>
        </View>

        <View style={styles.loginStyle}>
          <Text style={styles.label}>New password</Text>
          <TextInput placeholder='Enter your email..' style={styles.newpass} value={rpass.rpassword} onChangeText={(text) => setRpass({ ...rpass, rpassword: text })} />
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput placeholder='Enter your password..' style={styles.newpass} value={rpass.crpassword} onChangeText={(text) => setRpass({ ...rpass, crpassword: text })} />
          <View style={styles.btnsStyle}>
            <TouchableOpacity style={styles.btnStyle}><Text style={{ color: '#fff' }} onPress={() => resetbackend()}>Reset</Text></TouchableOpacity>
          </View>
        </View>

      </ImageBackground>
    </View>
  )
}

export default Resetpassword

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'center'
  },
  imgStyle: {
    width: '100%',
    height: undefined,
    aspectRatio: 1
  },
  label: {
    fontSize: 15
  },
  loginStyle: {
    width: '50%',
    height: '48%',
    diplay: 'flex',
    justifyContent: 'center',
    marginLeft: 10
  },
  newpass: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderWidth: 1,
    borderColor: '#7d7d7d',
    backgroundColor: '#fff',
    marginVertical: 6,
    fontSize: 15
  },
  btnsStyle: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10
  },
  btnStyle: {
    backgroundColor: 'green',
    width: 100,
    height: 30,
    padding: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 8
  }
})