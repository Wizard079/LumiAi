import { Image, TouchableOpacity } from "react-native";
import React from "react";
import { useCameraPermissions } from "expo-camera";
import { Link } from "expo-router";

const CameraCap = () => {
  const [permission, requestPermission] = useCameraPermissions();

  const getCameraFeed = () => {
    if (permission && !permission.granted) {
      requestPermission();
    }
  };

  if (permission && permission.granted) {
    return (
      <Link href="/cameraFeed">
        <Image
          source={require("@/assets/images/camera.png")}
          style={{ height: 80, width: 80, borderRadius: 50 }}
        ></Image>
      </Link>
    );
  } else {
    return (
      <TouchableOpacity onPress={getCameraFeed}>
        <Image
          source={require("@/assets/images/camera.png")}
          style={{ height: 80, width: 80, borderRadius: 50 }}
        ></Image>
      </TouchableOpacity>
    );
  }
};

export default CameraCap;
