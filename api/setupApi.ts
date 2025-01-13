import { GenerativeModel, GoogleGenerativeAI } from "@google/generative-ai";

let genAI: GoogleGenerativeAI;
let model: GenerativeModel;
function getModel() {
  if (!model) {
    console.log("connecting to api");
    genAI = new GoogleGenerativeAI("AIzaSyD_cAQJJwIE3H-dY5S0MELknyxB1o2Hez8");
    model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    console.log("connection made success");
  }
  console.log("returning model");
  return model;
}

export default getModel;
