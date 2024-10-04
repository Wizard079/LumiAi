import React, { useEffect, useRef, useState } from "react";
import { View, Animated, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const colors = [
  "#010102",
  "#0e125b",
  "#502629",
  "#0b1296",
  "#2c36cd",
  "#b53521",
  "#a38e9a",
  "#d5e2e0",
];

type VisualPerameters = {
  toggelPerameter: boolean;
};
const VoiceVisualizer: React.FC<VisualPerameters> = ({ toggelPerameter }) => {
  const [animation] = useState(new Animated.Value(0));
  const loopRef = useRef<Animated.CompositeAnimation | null>(null); // Use ref to store loop reference

  useEffect(() => {
    if (toggelPerameter) {
      // Start animation loop
      loopRef.current = Animated.loop(
        Animated.sequence([
          Animated.timing(animation, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(animation, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
        ])
      );

      loopRef.current.start();
    } else {
      // Stop animation loop
      loopRef.current?.stop();
      Animated.timing(animation, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }).start();
    }

    // Cleanup function
    return () => {
      loopRef.current?.stop();
    };
  }, [toggelPerameter]);
  const centerIndex = 4;
  return (
    <View style={styles.container}>
      {colors.map((color, index) => (
        <Animated.View
          key={index}
          style={[
            styles.bar,
            {
              backgroundColor: color,
              transform: [
                {
                  scaleY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [
                      0.5, // Minimum scale
                      index <= centerIndex
                        ? 1 + (index * 0.5) // Increase until center
                        : 1 + ((colors.length - 1 - index) * 0.5), // Decrease after center
                    ],
                  }),
                },
              ],
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 200,
    padding: 10,
  },
  bar: {
    width: width / 12,
    height: 150,
    borderRadius: 5,
  },
});

export default VoiceVisualizer;