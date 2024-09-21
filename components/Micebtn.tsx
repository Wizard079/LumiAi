import React from "react";
import { Pressable, StyleSheet, Image } from "react-native";
type mypress = {
  onPressIn: () => void;
  onPressOut: () => void;
};
const Micebtn: React.FC<mypress> = ({ onPressIn, onPressOut }) => {
  return (
    <Pressable
      style={styles.button}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <Image
        source={require("../assets/images/voice-recorder.png")}
        style={{ height: 40, width: 40 }}
      ></Image>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
    padding: 10,
    shadowColor: "black",
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 30,
  },
});
export default Micebtn;
