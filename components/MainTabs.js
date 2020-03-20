import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import FoundationIcon  from '@expo/vector-icons/Foundation';
import EvilIconsIcon  from '@expo/vector-icons/EvilIcons';
import IoniIcon  from '@expo/vector-icons/Ionicons';
import FontAwesomeIcon  from '@expo/vector-icons/FontAwesome';
import PostListTab from "./PostListTab";
import SearchTab from "./SerachTab";
import AddTab from "./AddTab";
import HeartTab from "./HeartTab";
import MyInfoTab from "./MyInfoTab";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
    return (
        <Tab.Navigator tabBarOptions={{showLabel: false, activeTintColor: '#000000'}}>
            <Tab.Screen name="PostListTab" component={PostListTab} options={{
                tabBarIcon: ({ focused, color, size }) => {
                    return <FoundationIcon name='home' size={size} color={color} />;
                },
            }}/>
            <Tab.Screen name="SearchTab" component={SearchTab} options={{
                tabBarIcon: ({ focused, color, size }) => {
                    return <EvilIconsIcon name='search' size={size} color={color} />;
                },
            }}/>
            <Tab.Screen name="AddTab" component={AddTab} options={{
                tabBarIcon: ({ focused, color, size }) => {
                    return <IoniIcon name='ios-add-circle-outline' size={size} color={color} />;
                },
            }}/>
            <Tab.Screen name="HeartTab" component={HeartTab} options={{
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = focused ? 'md-heart' : 'md-heart-empty';
                    return <IoniIcon name={iconName} size={size} color={color} />;
                },
            }}/>
            <Tab.Screen name="MyInfoTab" component={MyInfoTab} options={{
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = focused ? 'user-circle' : 'user-circle-o';
                    return <FontAwesomeIcon name={iconName} size={size} color={color} />;
                },
            }}/>
        </Tab.Navigator>
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
