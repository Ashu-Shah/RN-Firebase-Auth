import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './common/index';

const firebase = require('firebase');
const EMPTY_FIELD = 'Please enter an email & password';

export default class LoginForm extends Component{
    state = { email: 'admin@admin.com', password: '123456', error: '', loading: false };

    login = () => {
        this.setState({error: '', loading: true});
        const { email, password } = this.state;
        if(email && password) {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(success => this.setState({ email: '', password: '', error: '', loading: false }))
                .catch(() => {
                    firebase.auth().createUserWithEmailAndPassword(email, password)
                        .then(success => this.setState({ email: '', password: '', error: '', loading: false }))
                        .catch(error => this.setState({ error: error.message, loading: false}))
                });
        }
        else {
            this.setState({ error: EMPTY_FIELD, loading: false})
        }
    };

    renderButton = () => {
        if(this.state.loading) {
            return(
                <Spinner size="small"/>
            )
        }
        return(
            <Button onPress={this.login}>Login</Button>
        )
    };

    render() {
        const { email, password, error } = this.state;
        return(
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        onChangeText={email => this.setState({ email })}
                        value={email}
                        placeholder="user@gmail.com"
                        keyboardType="email-address"
                        returnKeyType="next"
                        autoCapitalize="none"
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Password"
                        onChangeText={password => this.setState({ password })}
                        value={password}
                        placeholder="password"
                        secureTextEntry

                    />
                </CardSection>

                {error.length ?
                    <View style={styles.errorContaier}>
                        <Text style={styles.errorTextStyle}>{error}</Text>
                    </View>
                    : null
                }

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    errorContaier: {
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexWrap: 'wrap'
    },
    errorTextStyle: {
        fontSize: 14,
        color: 'red',
        textAlign: 'center'
    }
});