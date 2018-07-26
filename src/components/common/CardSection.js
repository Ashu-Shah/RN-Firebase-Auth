import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = ({children}) => (
    <View style={styles.container}>{children}</View>
);

export { CardSection };

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        padding: 5,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'
    }
});