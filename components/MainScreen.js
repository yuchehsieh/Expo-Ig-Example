import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatList from "./ChatList";
import PostList from "./PostList";

const MainScreenStack = createStackNavigator();

function MainScreen({navigation}) {
    return (
        <MainScreenStack.Navigator>
            <MainScreenStack.Screen name="PostList" component={PostList} />
            <MainScreenStack.Screen name="ChatList" component={ChatList} />
        </MainScreenStack.Navigator>
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


export default MainScreen;