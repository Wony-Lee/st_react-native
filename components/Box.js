import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    box: {
        width: 64,
        height: 64,
        backgroundColor: 'black',
    },
    rounded: {
        borderRadius: 16,
    },
    small: {
        width: 32,
        heigh: 32,
    },
    medium: {
        width: 64,
        height: 64,
    },
    large: {
        width: 128,
        height: 128,
    },
});

const sizes = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large,
};

const Box = props => {
    return (
        <View
            style={[styles.box, props.rounded && styles.rounded, sizes[props.size]]}
        />
    );
};

Box.defulatProps = {
    size: 'medium',
};

export default Box;
