import React from "react";
import { Text } from "react-native";

export default function PageTitle({ children }) {
  return <Text className="text-2xl font-bold mb-5">{children}</Text>;
}
