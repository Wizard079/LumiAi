import imageDescription from "@/api/imageDescription";
import getModel from "@/api/setupApi";
import sendToBackend from "@/api/sendToBackend";
import { speakFunction } from "@/utils";

interface IState {
  recognized: string;
  pitch: string;
  error: string;
  end: string;
  started: string;
  results: string[];
  partialResults: string[];
  isRecording: boolean;
}

const useHandleSubmit = (fileUri: string) => {
  const handleSubmit = async (state: IState) => {
    console.log(state.results[0]);
    if (!state.results[0]) return;
    const model = getModel();

    const prompt = `your name is Lumi \nyou are ai for assisting blind peoples \nyou are very helpful to anyone \nyou will first categorize the query given to you\nthe query is given in form of ' query : text ' \nthere are seven categories 'OBJECT_RECOGNITION', 'SCENE_UNDERSTANDING', 'TEXT_RECOGNITION', 'CURRENCY_RECOGNITION', 'FACE_RECOGNITION', 'NAVIGATION_ASSISTANCE', 'VOICE_INTERACTION'\nyou should only give answer in one of the above and nothing else in response\nif user asks any question then it's VOICE_INTERACTION\nquery : ${state.results[0]}`;

    const result = await model.generateContent(prompt);
    const resText = result.response.text();

    console.log("HandleSubmit: The type is " + resText);

    if (
      resText.includes("OBJECT_RECOGNITION") ||
      resText.includes("SCENE_UNDERSTANDING")
    ) {
      imageDescription(fileUri, resText);
    } else if (
      resText.includes("FACE_RECOGNITION") ||
      resText.includes("CURRENCY_RECOGNITION")
    ) {
      sendToBackend(fileUri, resText);
    } else if (
      resText === "TEXT_RECOGNITION" ||
      resText === "NAVIGATION_ASSISTANCE"
    ) {
      console.log("Feature not implemented yet.");
    } else if (resText.includes("VOICE_INTERACTION")) {
      const voicePrompt = `your name is Lumi Ai \nyou like to help others \nyour purpose is to help blind people in navigation and see the world around them \nyou are doing a voice insertion\nwrite it as readable text without caps or bold letters\nUser message: ${state.results[0]}`;
      const voiceResult = await model.generateContent(voicePrompt);
      const voiceContent = voiceResult.response.text();
      speakFunction(voiceContent);
    } else {
      speakFunction(
        "It looks like something went wrong, please try again later."
      );
    }
  };

  return { handleSubmit };
};

export default useHandleSubmit;
