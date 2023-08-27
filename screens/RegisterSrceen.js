import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native'


function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.description}>Create an account so you can explore all the existing jobs</Text>
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

                <TextInput
                    style={styles.inputs}
                    placeholder='Confirm Password'
                    placeholderTextColor="gray">
                </TextInput>

            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                style={styles.button}>
                <Text style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>Sign up </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.Padding}>Already have an account</Text>
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
        fontSize: 14,
        fontWeight: "600",
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