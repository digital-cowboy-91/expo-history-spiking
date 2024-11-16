import Mapbox, { MapView } from "@rnmapbox/maps";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_PK);
// Mapbox.setTelemetryEnabled(false);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  container: {
    height: 300,
    width: 300,
    backgroundColor: "tomato",
  },
  map: {
    flex: 1,
  },
});

export default function index() {
  return (
    <>
      <Text>Mapbox Test Page</Text>
      <View style={styles.container}>
        <MapView style={styles.map} />
      </View>
    </>
  );
}
