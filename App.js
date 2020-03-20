import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import ChatListScreen from "./components/ChatListScreen";
import MainTabs from "./components/MainTabs";

const RootStack = createStackNavigator();
const rootNavigationRef = React.createRef();

export default function App() {
  return (
      <NavigationContainer ref={rootNavigationRef}>
          <RootStack.Navigator>
              <RootStack.Screen name="MainTabs" component={MainTabs} options={{
                  headerLeft: () => <Image source={require('./assets/Camera.png')} style={{ marginLeft: 15, marginBottom: 5 }}/>,
                  headerTitle: () => <Image source={require('./assets/Logo.png')} style={{width: 100}}/>,
                  headerRight: () => {
                      return (
                          <TouchableOpacity onPress={() => rootNavigationRef.current?.navigate('ChatListScreen', {name: 'CCC'})}>
                              <Image source={require('./assets/ChatIcon.png')} style={{ marginRight: 15, marginBottom: 5 }}/>
                          </TouchableOpacity>
                      )
                  }
              }}/>
              <RootStack.Screen
                  name="ChatListScreen"
                  component={ChatListScreen}
                  options={{
                      title: 'Murphy',
                      headerBackTitle: ' '
                  }}
              />
          </RootStack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
