import NetInfo from "@react-native-community/netinfo";
import { useEffect, useState } from "react";
import { Button, FlatList, Text } from "react-native";

const NetworkInfo = () => {
  const [conn, setConn] = useState<any | null>(null);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((conn) => setConn(conn));
    // To unsubscribe to these update, just use:
    return () => unsubscribe();
  }, []);

  if (!conn) return;

  return (
    <>
      <Button
        onPress={() => setIsHidden(!isHidden)}
        title={`Connection debug [${isHidden ? "SHOW" : "HIDE"}]`}
      />
      {!isHidden && (
        <FlatList
          data={Object.entries(conn)}
          renderItem={({ item: [key, val] }) => (
            <Text>
              {key}: {JSON.stringify(val)}
            </Text>
          )}
        />
      )}
    </>
  );
};

export default NetworkInfo;
