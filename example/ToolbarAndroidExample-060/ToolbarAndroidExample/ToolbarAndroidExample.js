/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import ToolbarAndroid from '@react-native-community/toolbar-android';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu!',
});
const initialMessage = Platform.select({
  ios: 'Toolbar-Android is no-op in iOS',
  android: 'Click on the toolbar icons above to test...',
});

type Props = {};
type State = {
  message: string,
};
export default class ToolbarAndroidExample extends Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {message: initialMessage};
  }

  render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid
          navIcon={require('./ic_menu_black_24dp.png')}
          title="ToolbarAndroid Example"
          style={styles.toolbar}
          actions={[
            {title: 'Button', icon: require('./relay.png'), show: 'always'},
          ]}
          onIconClicked={() => this.setState({message: 'Menu is clicked'})}
          onActionSelected={position =>
            this.setState({message: `action ${position} is clicked`})
          }
        />
        <View style={styles.centerContainer}>
          <Text style={styles.welcome}>
            Welcome to React Native ToolbarAndroid Example!
          </Text>
          <Text style={styles.message}>{this.state.message}</Text>
          <Text style={styles.instructions}>{instructions}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#E9EAED',
    height: 56,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  message: {
    color: 'red',
    fontSize: 15,
    margin: 8,
  },
});
