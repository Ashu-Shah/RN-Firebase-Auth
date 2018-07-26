import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = ({headerText}) => (
    <View style={styles.headerView}>
        <Text style={styles.textStyle}>{headerText}</Text>
    </View>
);

export { Header };
const styles = StyleSheet.create({
    headerView: {
        height: 60,
        backgroundColor: '#F8f8f8',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 20
    }
});