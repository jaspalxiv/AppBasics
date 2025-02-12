import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from "expo-router";
import credentials from "../credentials.json"
import Welcome from './welcome';


interface LoginIn {
    logged: boolean;
    setLogged: (text: boolean) => void;
    
}
const Login : React.FC<LoginIn> = ({logged, setLogged}) => {
    const router = useRouter();
    //router.navigate("./welcome") //TODO REMOVE THIS TEST PURSPOSE ONLY

    const [username, setUsername] = useState('johnDoe');
    const [password, setPassword] = useState('PassworD@123');

    const validateInputs = () => {
        const usernameRegex = /^.{5,}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!usernameRegex.test(username)) {
            Alert.alert('Error', 'Username must be at least 5 characters long.');
            return false;
        }
        if (!passwordRegex.test(password)) {
            Alert.alert('Error', 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.');
            return false;
        }
        return true;
    };
    const validateCredentials = () => {
        return new Promise<string>((resolve, reject) => {
            let isValid = "username not found";

            for (const user of credentials.users) {
                if (user.username === username) {
                    isValid = "incorrect password";
                    if (user.password === password) {
                        isValid = "OK";
                        setLogged(true)
                        break;
                    }

                }
            }

            resolve(isValid);
        });
    };


    const handleSignIn = () => {
        if (validateInputs()) {
            validateCredentials()
                .then(function (status) {
                    if (status == "OK") {
                        console.log('Username:', username, 'Password:', password);
                        //router.navigate("./welcome")
                    }
                    else {
                        Alert.alert('Error', status);
                    }
                })
        }
    };

    

    return (
        <View style={styles.container}>
            
              <LoginForm username={username} setUsername={setUsername} password={password} setPassword={setPassword} handleSignIn={handleSignIn}/>
            

            
            
        </View>

    )
}

export default Login;


interface LoginFormProps {
    username: string;
    setUsername: (text: string) => void;
    password: string;
    setPassword: (text: string) => void;
    handleSignIn: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ username, setUsername, password, setPassword, handleSignIn }) => {
    return (
        <View style={styles.loginForm}>
            <Text style={styles.title}>Home Screen</Text>

            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f8f9fa', // Light gray background
    },
    loginForm: {
        width: '100%',
        maxWidth: 400, // Ensures it doesn’t stretch too wide on large screens
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5, // Shadow effect for Android
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        marginBottom: 12,
        backgroundColor: '#f8f9fa',
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
