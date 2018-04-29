import React, { Component } from "react";
import { Platform, TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-primitives";

class Button extends Component {
  render() {
    return (
      <View style={styles.box}>
        <Text style={styles.text}>Hello, world !</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: { padding: 10 },
  text: { fontWeight: "bold", color: "green" }
});

export default Button;
