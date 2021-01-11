import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import AppHeaderIcon from '../components/AppHeaderIcon';
import Post from '../components/Post';
import { DATA } from '../data';

export default BookedScreen = ({ navigation }) => {
    const openPostHandler = (post) => {
        navigation.navigate('Post', { 
            postId: post.id, 
            date: post.date, 
            booked: post.booked 
        })
    }

    return (
        <View style={styles.wrapper}>
            <FlatList 
                data={DATA.filter(post => post.booked)} 
                keyExtractor={post => post.id.toString()}
                renderItem={ ({ item }) => <Post post={item} onOpen={openPostHandler}/>}
            />
        </View>
    )
}

BookedScreen.navigationOptions = {
    headerTitle: 'Избранные',
    headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item 
                title="Toggle drawer" 
                iconName='ios-menu' 
                onPress={() => console.log('press drawer')}
            />
        </HeaderButtons>
    ),
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})