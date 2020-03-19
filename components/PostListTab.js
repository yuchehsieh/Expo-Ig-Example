import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";

function PostListTab({route, navigation}) {
    return (
        <View style={styles.container}>
            <Text>This is Post List</Text>
            <Text>{route.params?.name || ''}</Text>
            <Button
                title="Go To Chat List"
                onPress={() => navigation.navigate('ChatListScreen', {name: 'CCC'})}
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



export default PostListTab;