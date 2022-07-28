import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

class Intro extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <View style={styles.app}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Welcome to ToDo</Text>
          <Text style={styles.subHeader}>The app to help you manage your tasks.</Text>
          <View style={styles.horizontalRule} />
        </View>
        <View>
          <TouchableOpacity style={styles.btnContainer} onPress={() => this.props.navigation.navigate("Home")}>
            <Text style={styles.btnTxt}>Start Completing Tasks</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
export default Intro;