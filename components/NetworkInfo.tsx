import NetInfo from "@react-native-community/netinfo";
import { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";

const NetworkInfo = () => {
  const [conn, setConn] = useState<any | null>(null);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((conn) => setConn(conn));
    // To unsubscribe to these update, just use:
    return () => unsubscribe();
  }, []);

  if (!conn) return;

  return (
    <>
      <Text>Connection debug</Text>
      <FlatList
        data={Object.entries(conn)}
        renderItem={({ item: [key, val] }) => (
          <Text>
            {key}: {JSON.stringify(val)}
          </Text>
        )}
      />
    </>
  );
};

export default NetworkInfo;
