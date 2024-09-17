import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index"
        options={{
          title: 'Lumi Ai',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color:'white'
          },
           headerStyle: {
            backgroundColor: '#1B1C1D'
          },
       }}
/>
    </Stack>
  );
}
