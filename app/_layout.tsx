import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* 1. This handles the login/welcome screens */}
      <Stack.Screen name="(auth)" /> 
      
      {/* 2. This handles the main app content */}
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}