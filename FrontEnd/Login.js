
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [selectdLanguage, setSelectdLanguage] = useState('English');
  const [fdata,setFdata] = useState({
    email: '',
    password: ''
  })
  const [values,setValues] = useState();
  
  const checkLoginItem = async() =>{
    setValues(await AsyncStorage.getItem('LoginItem'));
    setTimeout(() => {
    console.log('I am logged out');
    setValues(AsyncStorage.removeItem("LoginItem"));
    }, 360000);
  }

  useEffect(() => {
    checkLoginItem();
    if(values){
      navigation.navigate('Home');
    }
    else{
      alert("Your token expired. Please Sign in");
      navigation.navigate('Login');
      
    }
  });
  
  const loginbackend = () =>{
    if(!fdata.email || !fdata.password){
      alert('Plz fill in all the data');
    }
    else{
      fetch('http://192.168.1.64:3000/login',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(fdata)
      }).then(res=> res.json()).then(async (data)=>{
        if(data.error){
          alert(data.error);
        }
        else if(data.message == "Login successful"){
          await AsyncStorage.setItem("LoginItem", data.token);
          navigation.navigate('Home');
        }
      })
    }
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/telemkotrack_bg.jpg')} style={styles.imgStyle} resizeMode='cover'>
        <View>
        <Text style={{color: 'red', fontSize: 20, paddingLeft: 10}}>Telemko</Text>
        <Text style={{fontSize: 10,paddingLeft: 10}}>MONITORING ASSETS</Text>
        </View>
        <View style={{width: 200 ,marginTop: 35}}>
        <Text style={{fontSize: 20, paddingLeft: 10}}>Login to Account</Text>
        <Text style={{fontSize: 12,paddingLeft: 10, marginBottom:30}}>Access our premium tracking platform to monitor your assets all over Nepal</Text>
        </View>

        <View style={styles.loginStyle}>
        <Text style={styles.label}>Your Email</Text>
        <TextInput placeholder='Enter your email..' autoCapitalize='none' style={styles.emailpass} value={fdata.email} onChangeText={(text)=> setFdata({...fdata, email: text})}/>
        <Text style={styles.label}>Your Password</Text>
        <TextInput placeholder='Enter your password..' style={styles.emailpass} secureTextEntry={true} value={fdata.password} onChangeText={(text)=> setFdata({...fdata, password: text})} />
        <View style={styles.btnsStyle}>
        <TouchableOpacity style={styles.btnStyle}><Text style={{color: '#fff'}} onPress={()=>loginbackend()}>Login</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.btnStyle,{backgroundColor: 'blue'}]} onPress={()=> navigation.navigate('SignUp')}><Text style={{color: '#fff'}}>Register</Text></TouchableOpacity>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Email')}><Text style={{color: 'red',marginVertical: 8, textAlign: 'right'}}>Forgot Password ?</Text></TouchableOpacity>
        <Picker selectedValue={selectdLanguage} onValueChange={(item)=>setSelectdLanguage(item)}>
          <Picker.Item label='English(US)' value="english" />
          <Picker.Item label='English(UK)' value="english"/>
          <Picker.Item label='Nepali' value="nepali"/>
        </Picker>
        </View>
        
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'center'
  },
  imgStyle:{
    width: '100%',
    height: undefined,
    aspectRatio: 1
  },
  label:{
    fontSize: 15
  },
  loginStyle:{
    width: '50%',
    height: '48%',
    diplay: 'flex',
    justifyContent: 'center',
    marginLeft: 10
  },
  emailpass:{
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderWidth: 1,
    borderColor: '#7d7d7d',
    backgroundColor: '#fff',
    marginVertical: 6,
    fontSize: 15
  },
  btnsStyle:{
    display: 'flex',
    flexDirection: 'row',
    gap: 10
  },
  btnStyle:{
    backgroundColor: 'green', 
    width: 100, 
    height: 30, 
    padding: 5, 
    display: 'flex', 
    justifyContent:'center',
    alignItems: 'center',
    borderRadius:5,
    marginTop: 8
  }
});

export default Login
