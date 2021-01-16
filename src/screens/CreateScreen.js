import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useDispatch } from 'react-redux';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import AppHeaderIcon from '../components/AppHeaderIcon';
import { THEME } from '../theme';
import { addPost } from '../store/actions/post';
import PhotoPicker from '../components/PhotoPicker';

export default CreateScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [text, setText] = useState('')
    const [image, setImage] = useState(null)

    const saveHandler = () => {
        const post = { 
            date: new Date().toJSON(),
            text,
            img: image,
            booked: false
        }
        dispatch(addPost(post));
        navigation.navigate('Main')
    }

    const photoPickHandler = (uri) => {
        setImage(uri)
    }

    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>Новый пост</Text>
                    <TextInput 
                        style={styles.textarea} 
                        placeholder="Введите текст поста" 
                        value={text} 
                        onChangeText={setText}
                        multiline
                    />
                    <PhotoPicker onPick={photoPickHandler}/>
                    <Button 
                        title="Создать пост" 
                        color={THEME.MAIN_COLOR} 
                        onPress={saveHandler}
                        disabled={!text && !image}
                    />
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}

CreateScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'Создать пост',
    headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item 
                title="Toggle drawer" 
                iconName='ios-menu' 
                onPress={() => navigation.toggleDrawer()}
            />
        </HeaderButtons>
    ),
})

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'open-bold',
        marginVertical: 10
    },
    textarea: {
        padding: 10, 
        marginBottom: 10
    }
})