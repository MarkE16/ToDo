import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
// import { FcTodoList } from 'react-icons/fc';

class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      text: '',
    }
  }

  render() {
    return (
      <View style={styles.app}>
        <View>
          <Text style={styles.title}>My ToDo List</Text>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add a task"
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
          />
          <Button
            title="Add"
            style={styles.btn}
            onPress={() => this.setState({ text: '' })}
          />
        </View>
        <View style={styles.list}>
          <Text>{this.state.text}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'gray',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 30,
  },
  btn: {
    display: 'flex',
    color: 'red',
    backgroundColor: 'blue',
  },
})

export default Home;