import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getImage } from "./api";

export default function ImageDetail() {
  const { imageId } = useParams();
  const [image, setImage] = useState();

  useEffect(() => {
    getImage(imageId).then(setImage);
  }, [setImage, imageId]);

  return <pre>{JSON.stringify(image, null, 2)}</pre>;
}
