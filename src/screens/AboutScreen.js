import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default AboutScreen = () => {
    return (
        <View style={styles.center}>
            <Text>AboutScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})