import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";

function PostList({navigation}) {
    return (
        <View style={styles.container}>
            <Text>This is Post List</Text>
            <Button
                title="Go To Chat List"
                onPress={() => navigation.navigate('ChatList', {name: 'CCC'})}
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



export default PostList;