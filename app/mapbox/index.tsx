import Mapbox, { Camera, LocationPuck, MapView } from "@rnmapbox/maps";
import React, { useState } from "react";
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
    width: "100%",
  },
  map: {
    flex: 1,
  },
});

export default function index() {
  // const [userLocation, setUserLocation] = useState<any>(null);
  const [coordinates, setCoordinates] = useState(null);

  const handleMapPress = (e) => {
    setCoordinates(e.geometry.coordinates);
  };

  return (
    <>
      <Text>Mapbox Test Page</Text>
      <View style={styles.container}>
        <MapView style={styles.map} onPress={handleMapPress}>
          {/* <Camera zoomLevel={zoom} centerCoordinate={longLat} />
            <UserLocation
            androidRenderMode="compass"
            onUpdate={(location) => setUserLocation(location)}
            showsUserHeadingIndicator
            visible
            /> */}
          <Camera followUserLocation followZoomLevel={18} />
          <LocationPuck
            puckBearing="heading"
            puckBearingEnabled
            pulsing={{ isEnabled: true, color: "#000000" }}
          />
        </MapView>
      </View>
      {coordinates && <Text>Geo on click: {JSON.stringify(coordinates)}</Text>}
    </>
  );
}
