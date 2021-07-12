import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.todoContainer}>
        <FontAwesome name="circle-thin" size={24} color="black" />
        <Text style={styles.todoText}>Learn Kotlin!</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  todoContainer: {
    backgroundColor: "#021",
    width: "100%",
    flexDirection: "row",
    padding: 10,
  },
  todoText: {
    alignItems: "center",
    fontSize: 14,
    color: "#000",
    paddingStart: 20,
  },
});
