import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Empty = () => {
    return (
        <View style={styles.block}>
            <Image
                style={styles.image}
                source={require('../public/images/young_and_happy.png')}
                resizeMode="cover"
            />
            <Text style={styles.description}>할 일이 없음</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    block: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 240,
        height: 179,
        borderRadius: 16,
    },
    description: {
        fontSize: 24,
        color: '#9e9e9e',
    },
});

export default Empty;
