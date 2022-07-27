import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
// import { FcTodoList } from "react-icons/fc";

class Intro extends Component {
  render() {
    return (
      <View style={styles.app}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Welcome to ToDo</Text>
          <Text style={styles.subHeader}>The app to help you manage your tasks.</Text>
        </View>
        <View style={styles.btn}>
          <Button title="Get Started >" onPress={() => this.props.navigation.navigate("Home")} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'gray',
  },
  headerContainer: {
    margin: 20
  },

  header: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  subHeader: {
    fontSize: 20,
    fontStyle: 'italic',
  },

  btn: {
    backgroundColor: 'blue',
    padding: 5,
  }
});

export default Intro;