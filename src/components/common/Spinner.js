import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Spinner = ({ size }) => {
    return(
        <View style={styles.container}>
            <ActivityIndicator size={ size || 'large'} color="red"/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export { Spinner };