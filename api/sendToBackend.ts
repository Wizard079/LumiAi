import { getBase64Image } from "@/utils";
const sendToBackend = async (fileUri: string, desc: string) => {
  let endPoint = null;
  if (desc.includes("CURRENCY_RECOGNITION")) {
    endPoint = process.env.CR_EP;
  } else if (desc.includes("FACE_RECOGNITION")) {
    endPoint = process.env.FR_EP;
  } else {
    console.log("There is something else in desc " + desc);
    return;
  }
  try {
    let base64Image = getBase64Image(fileUri);
    if (endPoint) {
      const response = await fetch(endPoint, {
        method: "POST",
        body: JSON.stringify({ base64Image }),
      });
      console.log(
        "sendToBackend : get the response now what to speak??? response is " +
          response
      );
    } else {
      console.error("check out .env file for endpoints");
    }
  } catch (error) {
    console.log(error);
  }
};

export default sendToBackend;
