import React, { Component, useState, useEffect } from 'react';
import {View, Text, StyleSheet, Button, TextInput, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import styles from './styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      tasks: [],
      errMsg: '',
    }
  }

  render() {
    return (
      <View style={{ display: "flex", alignItems: "center" }}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>My ToDo List</Text>
          <View
            style={styles.horizontalRule}
          />
          <Text>Let's see what you got to do today.</Text>
        </View>
        <View style={styles.tasksContainer}>
          {
            this.state.tasks.length !== 0 ? (
              <SafeAreaView>
                <FlatList data={this.state.tasks}
                          renderItem={({ item }) => <Text style={{ fontSize: 20 }}>{item}</Text>}
                          keyExtractor={item => item.id} />
              </SafeAreaView>
            ) : (
              <View style={{ display: "flex", alignItems: "center", flexDirection: "column", }}>
                {/*<Text style={{ textAlignVertical: "center", textAlign: "center" }}>*/}
                  <Text style={styles.subHeader}>All Set!</Text>
                  <Text>
                    You have no tasks to do today. You can start by <Text style={{ fontStyle: "italic" }}>adding some</Text>.
                  </Text>
                {/*</Text>*/}
              </View>
            )
          }
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add a task..."
            onChangeText={(text) => this.setState({ text: text })}
            value={this.state.text}
          />
          <Text style={{ color: "red" }}>{this.state.errMsg}</Text>
          <View
            style={styles.horizontalRule}
          />
          <View style={styles.actions}>
            <TouchableOpacity style={styles.btnContainer} onPress={() => {
              if (this.state.text.length === 0) {
                this.setState({ errMsg: "Please enter a task." })
                return;
              }
              this.setState({
                tasks: [...this.state.tasks, this.state.text],
                text: '',
                errMsg: '',
              })
            }}>
              <Text style={styles.btnTxt}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnContainer} onPress={() => this.props.navigation.navigate("Intro")}>
              <Text style={styles.btnTxt}>Back to Intro</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

export default Home;