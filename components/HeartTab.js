import React from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';

function HeartTab({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Heart Tab</Text>
            {/*<Button*/}
            {/*    title="Back To Post List"*/}
            {/*    onPress={() => navigation.navigate('PostList', {name: 'Jane'})}*/}
            {/*/>*/}
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

export default HeartTab;