import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import WelcomeImg from "../assets/welcome-image.png"
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function WelcomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Image source={WelcomeImg}
                style={styles.Img} />

            <Text style={styles.title}>Discover Your Dream Job Here</Text>

            <Text style={styles.description}>Explore all the existing job roles based on your intrests and study major </Text>

            <View style={styles.buttons}>

                <TouchableOpacity 
                style={styles.login} 
                onPress={() =>  navigation.navigate('Login')}>
                    <Text style={{color:"white",fontSize:"20px",fontWeight:"bold"}} >Login</Text>
                </TouchableOpacity >

                <TouchableOpacity
                style={styles.register}
                onPress={() =>  navigation.navigate('Register')}>
                    
                    <Text style={{color:"#FE7654",fontSize:"20px",fontWeight:"bold"}}>Register</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height:"100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor:"white"
    },
    Img: {
        width: 400,
        height: 300,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 44,
        textAlign: "center",
        color: "#FE7654",
        fontWeight: "bold",
        paddingBottom: 30
    },
    description: {
        textAlign: "center",
        width: 270
    },
    buttons:{
        display:"flex",
        flexDirection:"row",
        gap:10,
        backgroundColor:"white"
    },
    login :{
        marginTop:100,
        width:150,
        height:50,
        backgroundColor:"#FE7654",
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius:10
    },
    register:{
        marginTop:100,
        width:150,
        height:50,
        backgroundColor:"white",
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius:10,
    }

});
export default WelcomeScreen