import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterSrceen'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';

export default function App() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
            options={{headerTitle:" "}}
                name="Welcome"
                component={WelcomeScreen}
            />
            <Stack.Screen options={{headerTitle:" "}} name="Login" component={LoginScreen} />
            <Stack.Screen options={{headerTitle:" "}} name="Register" component={RegisterScreen} />
            <Stack.Screen options={{headerTitle:" "}} name="Home" component={Home} />
        </Stack.Navigator>


    );
}

const styles = StyleSheet.create({

});
