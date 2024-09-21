import { firebase } from "../api/firebaseConf";

const uploadMediaFile = async (fileUri: string) => {
  try {
    console.log("Start uploading");

    // Convert the file URI to a Blob
    const blob: Blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = () => {
        resolve(xhr.response);
      };
      xhr.onerror = () => {
        reject(new TypeError("Network Request Failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", fileUri, true); // Use the provided fileUri
      xhr.send(null);
    });

    const filename = "newImage";
    const ref = firebase.storage().ref().child(filename);
    await ref.put(blob);
    console.log("Upload done");
    const downloadURL = await ref.getDownloadURL();
    console.log("File available at:", downloadURL);

    return downloadURL;
  } catch (error) {
    console.log("Error uploading file:", error);
  }
};

export default uploadMediaFile;
