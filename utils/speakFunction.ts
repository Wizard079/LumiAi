import { speak } from "expo-speech";

const speakFunction = (text: string) => {
    console.log("speakFunction " + text)
    const hindiVoice = 'hi-in-x-hia-local'
    
    speak(text, {
    voice: hindiVoice,
    pitch: 0.7,
    rate: 1.1,
  });
}

export default speakFunction