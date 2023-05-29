import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import Title from "../components/Title";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title> Opponent's Guess</Title>
      <Text>Guess</Text>
      <View>
        <Text>Higher or lower??</Text>
        <Text>+ -</Text>
      </View>
      <View>
        <Text>LOG ROUNDS</Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 25,
    marginTop: 15,
  },
});
