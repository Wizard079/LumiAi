import { useRef } from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { CameraView } from "expo-camera";

interface CameraFeedProps {
  setfileUri: (uri: string) => void;
}
function CameraFeed({ setfileUri }: CameraFeedProps) {
  const ref = useRef<CameraView | null>(null);

  const take_snapshot = async () => {
    try {
      if (ref.current) {
        const photo = await ref.current.takePictureAsync();
        const fileUri = photo?.uri;
        if (fileUri) {
          setfileUri(fileUri);
          console.log("Captured image URI:", fileUri);
        }
      }
    } catch (error) {
      console.error("Error capturing image:", error);
    }
  };
  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} ref={ref} />
      <TouchableOpacity onPress={take_snapshot}>
        <Image
          source={require("@/assets/images/camera.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  icon: {
    width: 80,
    height: 80,
  },
});

export default CameraFeed;
