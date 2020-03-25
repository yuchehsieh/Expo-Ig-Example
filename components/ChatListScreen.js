import React from 'react';
import {Dimensions, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import Feather from '@expo/vector-icons/Feather';

const screenWidth = Math.round(Dimensions.get('window').width);

const DATA = [
    {
        id: '01',
        name: 'prisionbreak',
        activeMessage: 'Active 5h ago'
    },
    {
        id: '02',
        name: 'avamax',
        activeMessage: 'Liked a message．4d'
    },
    {
        id: '03',
        name: 'therock',
        activeMessage: 'Mentioned you in their story．2w'
    },
    {
        id: '04',
        name: 'alexandradaddario',
        activeMessage: 'Active today'
    },
    {
        id: '05',
        name: 'annemarie',
        activeMessage: 'You replied annemarie\'s story...．12w'
    },
    {
        id: '06',
        name: 'arts_helps',
        activeMessage: '😂．12d'
    },
    {
        id: '07',
        name: 'robertdowneyjr',
        activeMessage: 'Liked a message．12h'
    },
    {
        id: '08',
        name: 'deborahannwoll',
        activeMessage: 'You: Good．2w'
    },
];

const RenderItem = ({name, id, activeMessage}) => {
    return (
        <View style={styles.singleChatContainer} key={id}>
            <View style={styles.leftElementContainer}>
                <Image source={generatePath(name)} style={{height: 45, width: 45}}/>
                <View style={styles.nameContainer}>
                    <Text style={styles.account}>{name}</Text>
                    <Text style={styles.activity}>{activeMessage}</Text>
                </View>
            </View>
            <Feather name="camera" size={28} color={'grey'}/>
        </View>
    )
};

const generatePath = (name) => {
    switch (name) {
        case 'therock':
            return require('../assets/Posts/therock.png');
        case 'avamax':
            return require('../assets/Posts/avamax.png');
        case 'prisionbreak':
            return require('../assets/Posts/prisionbreak.png');
        case 'alexandradaddario':
            return require('../assets/Chats/alexandradaddario.png');
        case 'annemarie':
            return require('../assets/Chats/annemarie.png');
        case 'arts_helps':
            return require('../assets/Chats/arts_helps.png');
        case 'robertdowneyjr':
            return require('../assets/Chats/robertdowneyjr.png');
        case 'deborahannwoll':
            return require('../assets/Chats/deborahannwoll.png');
    }
};

function ChatListScreen({route, navigation}) {
    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({item}) => (
                    <RenderItem name={item.name} activeMessage={item.activeMessage} id={item.id}/>)}
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
        paddingTop: 15
    },
    singleChatContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: screenWidth,
        paddingHorizontal: 15,
        marginBottom: 20
    },
    leftElementContainer: {
        flexDirection: 'row',
    },
    nameContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 10
    },
    account: {
        // fontWeight: "200"
    },
    activity: {
        color: 'grey',
        marginTop: 5
    }
});

export default ChatListScreen;