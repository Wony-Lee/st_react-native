import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleIncrease = useCallback(() => {
        setCount(prev => (prev += 1));
    }, []);
    const handleDecrease = useCallback(() => {
        setCount(prev => (prev -= 1));
    }, []);

    return (
        <View style={styles.wrapper}>
            <View style={styles.numberArea}>
                <Text style={styles.number}>{count}</Text>
            </View>
            <Button title="Increase" onPress={handleIncrease} />
            <Button title="Decrease" onPress={handleDecrease} />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    numberArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        fontSize: 72,
        fontWeight: 'bold',
    },
});

export default Counter;
