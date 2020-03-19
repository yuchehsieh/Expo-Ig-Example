import React from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';

function ChatList({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Chat List Screen over there</Text>
            <Button
                title="Back To Post List"
                // onPress={() => navigation.pop()}
                onPress={() => navigation.navigate('PostList', {name: 'Jane'})}
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

export default ChatList;