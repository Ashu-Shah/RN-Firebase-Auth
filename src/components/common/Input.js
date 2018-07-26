import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Input = (props) => {
    const { label, value, onChangeText } = props;
    return(
        <View style={styles.container}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                underlineColorAndroid="transparent"
                placeholderTextColor="#e1e1e1"
                style={styles.inputStyle}
                autoCorrect={false}
                {...props}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputStyle: {
        color: '#000',
        fontSize: 18,
        lineHeight: 23,
        paddingHorizontal: 5,
        flex: 2,
        marginBottom: -2
    },
    labelStyle: {
        color: '#000',
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    }
});

export { Input };