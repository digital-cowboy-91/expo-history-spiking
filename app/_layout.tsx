import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import NetworkInfo from "../components/NetworkInfo";
import { SafeAreaView } from "react-native-safe-area-context";
import Geolocation from "../components/Geolocation";
import "../global.css";

export default function _layout() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.body}>
        <Slot />
      </View>
      <View style={styles.footer}>
        <NetworkInfo />
        <Geolocation />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    minHeight: "100%",
    justifyContent: "space-between",
    padding: 20,
    gap: 20,
  },
  body: {},
  footer: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
});
