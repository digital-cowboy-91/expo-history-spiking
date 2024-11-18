import React, { useEffect, useState } from "react";
import { Button, FlatList, Text } from "react-native";
import * as Location from "expo-location";

export default function Geolocation() {
  const [location, setLocation] =
    useState<Location.LocationObjectCoords | null>(null);
  const [isHidden, setIsHidden] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    const getPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return Promise.reject("NO_PERMISSION");
      }
    };

    getPermission().then(() => {
      Location.watchPositionAsync(
        { accuracy: 6, timeInterval: 5000 },
        ({ coords }) => {
          setLocation(coords);
        }
      );
    });
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
        <Text>{errorMsg}</Text>
      )}
    </>
  );
}
