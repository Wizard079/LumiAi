import Micebtn from "@/components/Micebtn";
import VoiceVisualizer from "@/components/VoiceVisual";
import { Text, View ,StyleSheet} from "react-native";
import { useState } from "react";


export default function Index() {

  const [isAnimation, setisAnimation] = useState(false);
  const animationTrigger = () => {
    setisAnimation(prev => !prev)
  }
  return (
    <View
      style={
      styles.container
      }
    >
      <Text
        style={styles.mainText}>
        Hey it's Limo How can i help you today !
      </Text>
      <VoiceVisualizer toggelPerameter={isAnimation} />
      <View style={{alignItems:'center'}}>
        <Micebtn giveOnPress={animationTrigger} />
      </View>
    </View>
  );
}

const styles= StyleSheet.create({
  container: {
      backgroundColor: '#1B1C1D',
      flex: 1,
      justifyContent: 'space-around'
  },
  mainText: {
    color: 'white',
    fontSize: 30,
    fontWeight: "bold",
    padding: 10,
    margin: 10
  }
})
