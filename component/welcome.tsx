import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Welcome() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to My New App</Text>

        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',  // Moves content to the top
        alignItems: 'center',
        paddingTop: 25, // Adds spacing from the top
    },
    title: {
        fontSize: 24,
    },
});
