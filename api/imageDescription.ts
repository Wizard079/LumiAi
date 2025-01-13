import { speakFunction } from "@/utils";
import getModel from "./setupApi";
import * as FileSystem from "expo-file-system";

async function imageDescription(imgUri: string, descriptionType: string) {
  if (
    (descriptionType.includes("OBJECT_RECOGNITION") ||
      descriptionType.includes("SCENE_UNDERSTANDING")) &&
    imgUri != "/root"
  ) {
    console.log("converting to base64");
    const base64Image = await FileSystem.readAsStringAsync(imgUri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    console.log("base64 converted");
    const image = {
      inlineData: {
        data: base64Image,
        mimeType: "image/png",
      },
    };
    if (descriptionType.includes("OBJECT_RECOGNITION")) {
      const model = getModel();
      const prompt = "give explanation about this object";
      const result = await model.generateContent([prompt, image]);
      const content = result.response.text();
      speakFunction(content);
    } else if (descriptionType.includes("SCENE_UNDERSTANDING")) {
      const model = getModel();
      const prompt = "explain this scene to me";
      const result = await model.generateContent([prompt, image]);
      const content = result.response.text();
      speakFunction(content);
    }
  } else {
    console.log(
      `either the type ${descriptionType} is not valid or ${imgUri} is /root try again with new img`
    );
  }
}

export default imageDescription;
