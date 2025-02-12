import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Login from "@/component/login";

interface LoginIn {
    logged: boolean;
    setLogged: (text: boolean) => void;
    
}

const LoginIndex : React.FC<LoginIn> = ({logged, setLogged}) => {
   // const [logged, setLogged] = useState(false);

    return (
        <View style={styles.container}>
            <Login logged={logged} setLogged={setLogged}/> 
        </View>
    );
}
export default LoginIndex;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    },
});
