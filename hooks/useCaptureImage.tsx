import { useState } from "react";

const useCaptureImage = () => {
  const [fileUri, setfileUri] = useState("/root");
  return { fileUri, setfileUri };
};

export default useCaptureImage;
