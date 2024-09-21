import { GenerativeModel, GoogleGenerativeAI } from "@google/generative-ai";

let genAI: GoogleGenerativeAI;
let model: GenerativeModel;
function getModel() {
  if (!model) {
    console.log("connecting to api");
    genAI = new GoogleGenerativeAI(process.env.API_KEY_GEMINI!);
    model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    console.log("connection made sucseec");
  }
  console.log("returning model");
  return model;
}

export default getModel;
