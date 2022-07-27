import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Create a NavBar class component that takes in props title and color
class NavBar extends Component {
  render() {
    return (
      <View style={[styles.navBar, { backgroundColor: this.props.color }]}>
        <Text style={styles.navBarTitle}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    position: 'fixed',
    bottom: 0,
  },
  navBarTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
});

export default NavBar;