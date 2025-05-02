import React from "react";
import { Stack } from "expo-router";

const OrderLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[id]" />
    </Stack>
  );
};

export default OrderLayout;
