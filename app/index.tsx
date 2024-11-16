import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Todos, { NewTodo } from "../components/Todos";
import NetworkInfo from "../components/NetworkInfo";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Expo Route Index</Text>
      <NewTodo />
      <Todos />
      <NetworkInfo />
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
