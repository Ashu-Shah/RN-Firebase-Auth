import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header, Button, Spinner } from './src/components/common/index';
import LoginForm from './src/components/LoginForm';
import Settings from './settings.json';

const firebase = require('firebase');

export default class App extends Component<Props> {

  state = { loggedIn: null };

  componentWillMount() {
    const config = {
      apiKey: Settings.apiKey,
      authDomain: Settings.authDomain,
      databaseURL: Settings.databaseURL,
      projectId: Settings.projectId,
      storageBucket: Settings.storageBucket,
      messagingSenderId: Settings.messagingSenderId
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true })
      }
      else {
        this.setState({ loggedIn: false })
      }
    })
  }

  rederContent() {
    switch (this.state.loggedIn) {
      case true:
        return(
            <View style={styles.buttonContainer}>
              <Button onPress={() => firebase.auth().signOut()}>Sign out</Button>
            </View>
        );
      case false:
        return <LoginForm/>;
      default:
        return <Spinner/>;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Authentication"/>
        {this.rederContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  buttonContainer: {
    flexDirection: 'row'
  }
});
