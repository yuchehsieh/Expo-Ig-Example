import React from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';

function ChatListScreen({route, navigation}) {
    return (
        <View style={styles.container}>
            <Text>Chat List Screen over there</Text>
            <Text>{route.params.name}</Text>
            <Button
                title="Back To Post List"
                // onPress={() => navigation.pop()}
                onPress={() => navigation.navigate('PostListTab', {name: 'Jane'})}
            />
        </View>
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

export default ChatListScreen;