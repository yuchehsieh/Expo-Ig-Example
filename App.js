import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import MainScreen from './components/MainScreen';
import SearchScreen from "./components/SerachScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (

      <NavigationContainer>
          <Tab.Navigator>
              <Tab.Screen name="MainScreen" component={MainScreen} options={{title: 'Main-Screen'}}/>
              <Tab.Screen name="SearchScreen" component={SearchScreen} options={{title: 'Search-Screen'}}/>
          </Tab.Navigator>
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
