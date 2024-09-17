import * as FileSystem from "expo-file-system";

const getBase64Image = async (fileUri: string) => {
  const base64Image = await FileSystem.readAsStringAsync(fileUri, {
    encoding: FileSystem.EncodingType.Base64,
  });
};

export default getBase64Image;
