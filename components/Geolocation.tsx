import React, { useEffect, useState } from "react";
import { Button, FlatList, Text } from "react-native";
import * as Location from "expo-location";

export default function Geolocation() {
  const [location, setLocation] =
    useState<Location.LocationObjectCoords | null>(null);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    Location.watchPositionAsync(
      { accuracy: 6, timeInterval: 5000 },
      ({ coords }) => {
        setLocation(coords);
      }
    );
  }, []);

  return (
    <>
      <Button
        onPress={() => setIsHidden(!isHidden)}
        title={`Geolocation [${isHidden ? "SHOW" : "HIDE"}]`}
      />
      {location ? (
        !isHidden && (
          <FlatList
            data={Object.entries(location)}
            renderItem={({ item: [key, val] }) => (
              <Text>
                {key}: {JSON.stringify(val)}
              </Text>
            )}
          />
        )
      ) : (
        <Text>Permission not granted</Text>
      )}
    </>
  );
}
