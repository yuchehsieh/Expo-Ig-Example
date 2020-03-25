import React from "react";
import {Dimensions, FlatList, Image, StyleSheet, Text, View} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import EvilIcons from '@expo/vector-icons/EvilIcons';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const BodyText_Type = {
    NORMAL: 'normal',
    LINK: 'link',
};

const DATA = [
    {
        id: '01',
        name: 'therock',
        likesCount: '985,684',
        body: [
            {
                type: BodyText_Type.NORMAL,
                text: ' Long week. 1am. Quiet time '
            },
            {
                type: BodyText_Type.LINK,
                text: '@teremana'
            },
            {
                type: BodyText_Type.NORMAL,
                text: '🥃 with brioche french toast smuthaad with peanut butter, jelly and maple syrup.\n' +
                    'Stay healthy and positive, my friends.'
            },
        ]
    },
    {
        id: '02',
        name: 'avamax',
        likesCount: '57,467',
        body: [
            {
                type: BodyText_Type.NORMAL,
                text: ' Long week. 1am. Quiet timeThrowback to sunny days ☀️'
            }
        ]
    },
    {
        id: '03',
        name: 'prisionbreak',
        likesCount: '93,422',
        body: [
            {
                type: BodyText_Type.NORMAL,
                text: ' First, it was a prison. Now, it\'s a nation.\n' +
                    'The '
            },
            {
                type: BodyText_Type.LINK,
                text: '#PrisonBreak'
            },
            {
                type: BodyText_Type.NORMAL,
                text: ' Event Series is available on Blu-ray, DVD\n' +
                    'and Digital HD.'
            }
        ]
    }
];

const RenderItem = ({name, likesCount, body, id}) => {
    return (
        <View style={{marginBottom: 30}} key={id}>
            <View style={styles.rowContainer}>
                <View style={styles.row}>
                    <Image source={generatePath(name, 'avatar')} style={styles.avatar}/>
                    <Text style={styles.accountName}>{name}</Text>
                </View>
                <Ionicons name="ios-more" size={24}/>
            </View>
            <Image source={generatePath(name, 'post')} style={styles.postImage}/>
            <View style={styles.rowContainer}>
                <View style={{...styles.row, marginTop: 10}}>
                    <Ionicons name="md-heart-empty" size={24} style={{marginRight: 10}}/>
                    <EvilIcons name="comment" size={30} style={{marginRight: 10}}/>
                    <Image source={require('../assets/ChatIcon.png')} style={styles.chatIcon}/>
                </View>
                <Image source={require('../assets/TagIcon.png')} style={styles.tagIcon}/>
            </View>
            <Text style={styles.likesText}>{likesCount} likes</Text>
            <Text style={styles.postBody}>
                <Text style={styles.accountName}>{name}</Text>
                {body.map(item => {
                    if (item.type === BodyText_Type.NORMAL) {
                        return item.text
                    } else {
                        return <Text style={styles.blueText}>{item.text}</Text>
                    }
                })}
            </Text>
        </View>
    )
};

const generatePath = (name, type) => {
    switch (name) {
        case 'therock':
            if (type === 'post') return require('../assets/Posts/therock_post.png');
            if (type === 'avatar') return require('../assets/Posts/therock.png');
        case 'avamax':
            if (type === 'post') return require('../assets/Posts/avamax_post.png');
            if (type === 'avatar') return require('../assets/Posts/avamax.png');
        case 'prisionbreak':
            if (type === 'post') return require('../assets/Posts/prisionbreak_post.png');
            if (type === 'avatar') return require('../assets/Posts/prisionbreak.png');
    }
};

function PostListTab({route, navigation}) {
    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({item}) => (
                    <RenderItem body={item.body} name={item.name} likesCount={item.likesCount} id={item.id}/>)}
                keyExtractor={({id}) => id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 20,
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