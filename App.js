import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Signuppage from './FrontEnd/Signuppage';
import Login from './FrontEnd/Login'
import Home from './FrontEnd/Home'
import Verification from './FrontEnd/Verification';
import Email from './FrontEnd/Email';
import ForgetVerify from './FrontEnd/ForgetVerify';
import Resetpassword from './FrontEnd/Resetpassword';
import Account from './NavigationScreen/Account'
import 'react-native-gesture-handler'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={Signuppage} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Verification" component={Verification} options={{ headerShown: false }} />
                <Stack.Screen name="Email" component={Email} options={{ headerShown: false }} />
                <Stack.Screen name="ForgetVerify" component={ForgetVerify} options={{ headerShown: false }} />
                <Stack.Screen name="Resetpassword" component={Resetpassword} options={{ headerShown: false }} />
                <Stack.Screen name="Account" component={Account} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
 export default App