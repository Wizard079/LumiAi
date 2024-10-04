import { VoiceVisualizer } from "@/components";
import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import CameraFeed from "./cameraFeed";
import { useCaptureImage, useHandleSubmit, useVoiceRecognition } from "@/hooks";

export default function Index() {
  const { state, startRecognizing, stopRecognizing, destroyRecognizer } = useVoiceRecognition();
  const { fileUri, setfileUri } = useCaptureImage();
  const {handleSubmit } = useHandleSubmit(fileUri);
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>
        Hey it's Lumi How can i help you today !
      </Text>
      <Text style={styles.mainText}>{state.results[0]}</Text>

      <VoiceVisualizer toggelPerameter={state.isRecording} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Pressable
          style={styles.button}
          onPressIn={() => {
            startRecognizing();
          }}
          onPressOut={async () => {
            console.log("seeting the state as ", JSON.stringify(state))
            stopRecognizing();
            await handleSubmit(state);
          }}
        >
          <Image
            source={require("../assets/images/voice-recorder.png")}
            style={{ height: 40, width: 40 }}
          ></Image>
        </Pressable>
        <CameraFeed setfileUri={setfileUri} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1B1C1D",
    flex: 1,
    justifyContent: "space-around",
  },
  mainText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    padding: 10,
    margin: 10,
  },
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
