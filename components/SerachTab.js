import React from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';

function SearchTab({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Search Screen</Text>
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

export default SearchTab;