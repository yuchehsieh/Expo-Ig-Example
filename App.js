import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import ChatListScreen from "./components/ChatListScreen";
import MainTabs from "./components/MainTabs";

import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

const RootStack = createStackNavigator();
const rootNavigationRef = React.createRef();

export default function App() {
    return (
        <NavigationContainer ref={rootNavigationRef}>
            <RootStack.Navigator>
                <RootStack.Screen name="MainTabs" component={MainTabs} options={{
                    headerLeft: () => <Image source={require('./assets/Camera.png')}
                                             style={{marginLeft: 15, marginBottom: 5}}/>,
                    headerTitle: () => <Image source={require('./assets/Logo.png')} style={{width: 100}}/>,
                    headerRight: () => {
                        return (
                            <TouchableOpacity
                                onPress={() => rootNavigationRef.current?.navigate('ChatListScreen', {name: 'CCC'})}>
                                <Image source={require('./assets/ChatIcon.png')}
                                       style={{marginRight: 15, marginBottom: 5}}/>
                            </TouchableOpacity>
                        )
                    }
                }}/>
                <RootStack.Screen
                    name="ChatListScreen"
                    component={ChatListScreen}
                    options={{
                        title: 'Murphy',
                        headerBackTitle: ' ',
                        headerLeft: () => {
                            return (
                                <TouchableOpacity style={{marginLeft: 15}}
                                                  onPress={() => rootNavigationRef.current?.navigate('MainTabs')}>
                                    <Ionicons name="ios-arrow-back" size={24}/>
                                </TouchableOpacity>
                            )
                        },
                        headerRight: () => {
                            return (
                                <View style={styles.row}>
                                    <TouchableOpacity style={{marginRight: 15}}>
                                        <FontAwesome name="video-camera" size={22}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <FontAwesome name="pencil-square-o" size={22}/>
                                    </TouchableOpacity>
                                </View>
                            )
                        }
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
    row: {
        flexDirection: 'row',
        paddingRight: 15,
    }
});
