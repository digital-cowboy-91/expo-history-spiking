import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Todos, { NewTodo } from "../components/Todos";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Expo Route Index</Text>
      <NewTodo />
      <Todos />
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
});
