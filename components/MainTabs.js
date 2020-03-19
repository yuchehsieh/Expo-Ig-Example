import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import PostListTab from "./PostListTab";
import SearchTab from "./SerachTab";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="PostListTab" component={PostListTab} options={{title: 'Post-List-Tab'}}/>
            <Tab.Screen name="SearchTab" component={SearchTab} options={{title: 'Search-Tab'}}/>
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
