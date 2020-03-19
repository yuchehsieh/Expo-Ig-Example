import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import ChatListScreen from "./components/ChatListScreen";
import MainTabs from "./components/MainTabs";

const RootStack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <RootStack.Navigator>
              <RootStack.Screen name="MainTabs" component={MainTabs}/>
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
