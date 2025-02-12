import { Tabs } from "expo-router";
import React, { useState } from 'react';
import { StyleSheet, View , Image} from 'react-native';
import Login from "@/component/login";
import Welcome from '@/component/welcome';
import LoginIndex from './LoginIndex'
export default function TabLayout() {

  const [logged, setLogged] = useState(false);

  return (
    <>
      {!logged ? (
        <Login logged={logged} setLogged={setLogged} />
      ) : (
        <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
          <Tabs.Screen name="calgary" options={{ title: "Calgary", tabBarIcon: ({ color, size }) => (
                <Image
                  source={require("@/assets/cityA.png")} // Load from assets
                  style={{ width: size, height: size, tintColor: color }}
                />
              ), }} />
          <Tabs.Screen name="edmonton" options={{ title: "Edmonton", tabBarIcon: ({ color, size }) => (
                <Image
                  source={require("@/assets/cityB.png")} // Load from assets
                  style={{ width: size, height: size, tintColor: color }}
                />
              ), }} />
          <Tabs.Screen name="index" options={{ title: "Welcome", href: null }} />
          <Tabs.Screen name="LoginIndex" options={{ title: "Login", href: null }} />
        </Tabs>
      )}
    </>

  );
}


const styles = StyleSheet.create({
  container: {
      height: '80%',
      width: '100%'
  },
});
