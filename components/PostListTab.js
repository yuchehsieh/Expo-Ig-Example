import React from "react";
import {Button, StyleSheet, Text, View, Image, Dimensions, ScrollView} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import EvilIcons from '@expo/vector-icons/EvilIcons';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

function PostListTab({route, navigation}) {
    return (
        <View style={styles.container}>
            {/*<Text>This is Post List</Text>*/}
            {/*<Text>{route.params?.name || ''}</Text>*/}
            {/*<Button*/}
            {/*    title="Go To Chat List"*/}
            {/*    onPress={() => navigation.navigate('ChatListScreen', {name: 'CCC'})}*/}
            {/*/>*/}
            <ScrollView style={styles.postContainer}>
                <View style={styles.rowContainer}>
                    <View style={styles.row}>
                        <Image source={require('../assets/Posts/the_rock.png')} style={styles.avatar}/>
                        <Text style={styles.accountName}>therock</Text>
                    </View>
                    <Ionicons name="ios-more" size={24}/>
                </View>
                <Image source={require('../assets/Posts/the_rock_post.png')} style={styles.postImage}/>
                <View style={styles.rowContainer}>
                    <View style={{...styles.row, marginTop: 10}}>
                        <Ionicons name="md-heart-empty" size={24} style={{marginRight: 10}}/>
                        <EvilIcons name="comment" size={30} style={{marginRight: 10}}/>
                        <Image source={require('../assets/ChatIcon.png')} style={styles.chatIcon}/>
                    </View>
                    <Image source={require('../assets/TagIcon.png')} style={styles.tagIcon}/>
                </View>
                <Text style={styles.likesText}>985,684 likes</Text>
                <Text style={styles.postBody}>
                    <Text style={styles.accountName}>therock</Text> Long week. 1am. Quiet time <Text style={styles.blueText}>@teremana</Text>
                    🥃 with brioche french toast smuthaad with peanut butter, jelly and maple syrup.
                    Stay healthy and positive, my friends.
                </Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    postContainer: {
        flexDirection: 'column',
        marginTop: 10
    },
    rowContainer: {
        flexDirection: 'row',
        width: screenWidth,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        marginRight: 10,
    },
    accountName: {
        fontWeight: "bold"
    },
    postImage: {
        width: screenWidth,
        height: screenHeight * 0.7,
        marginTop: 10,
    },
    chatIcon: {
        width: 22,
    },
    tagIcon: {
        width: 22,
    },
    likesText: {
        paddingLeft: 15,
        fontWeight: "bold",
        marginTop: 8
    },
    postBody: {
        marginTop: 8,
        paddingHorizontal: 15
    },
    blueText: {
        color: '#002f5e'
    }
});


export default PostListTab;