import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native'


function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login here</Text>
            <Text style={styles.description}>Welcome back you've been missed !</Text>
            <View style={styles.Padding}>
                <TextInput
                    style={styles.inputs}
                    placeholder='Email'
                    placeholderTextColor="gray">
                </TextInput>

                <TextInput
                    style={styles.inputs}
                    placeholder='Password'
                    placeholderTextColor="gray">
                </TextInput>

            </View>
            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('Home')}>
                <Text style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>Sign in </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('Register')}>
                <Text style={styles.Padding}>Don't have an account ? create new account</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "white"
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        color: "#FE7654",
        fontWeight: "bold",
        paddingBottom: 30
    },
    description: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        width: 270
    },
    inputs: {
        backgroundColor: "#fff3f0",
        width: 350,
        height: 50,
        marginBottom: 25,
        borderRadius: 10,
        padding: 15,
        borderColor: "#FE7654",
        borderStyle: 'solid',
        borderWidth: 1
    },
    button: {
        marginTop: 50,
        width: 350,
        height: 50,
        backgroundColor: "#FE7654",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    Padding: {
        paddingTop: 70
    }
})

export default LoginScreen