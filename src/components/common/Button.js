import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({onPress, children}) => (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
        <Text style={styles.textStyle}>{children}</Text>
    </TouchableOpacity>
);

export { Button };

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#007aff',
        borderRadius: 5,
        marginHorizontal: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingVertical: 10
    }
});