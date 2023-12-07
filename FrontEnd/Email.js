import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import React,{ useState } from 'react'

const Email = ({navigation}) => {

    const [fdata, setFdata] = useState({
        email: '',
        verificationCode: ''
    });

    const verify = () =>{
        if(!fdata.email){
            alert('Plz enter your email address');
        }
        else{
            fetch('http://192.168.1.72:3000/reset',{
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(fdata)
            })
            .then(async res=> res.json())
            .then(async data =>{
                if(data.error){
                    alert(data.error);
                }
                else if(data.message = 'Verification code sent to your email'){
                    alert(data.message);
                    console.log(data);
                    navigation.navigate('ForgetVerify',{useremail: data.userdata ,code: data.verify});
                  }
            })       
        }
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/telemkotrack_bg.jpg')} style={styles.imgStyle} resizeMode='cover'>
                <View style={styles.loginStyle}>
                    <Text style={styles.label}>Your Email</Text>
                    <TextInput placeholder='Enter your email..' style={styles.emailpass} value={fdata.email} onChangeText={(text)=>setFdata({...fdata, email:text})} />
                </View>
                <TouchableOpacity onPress={()=>verify()}><Text>Verify Email</Text></TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default Email

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
    loginStyle: {
        width: '50%',
        height: '48%',
        diplay: 'flex',
        justifyContent: 'center',
        marginLeft: 10
    },
    label: {
        fontSize: 15
    },
    emailpass: {
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderWidth: 1,
        borderColor: '#7d7d7d',
        backgroundColor: '#fff',
        marginVertical: 6,
        fontSize: 15
    }
})