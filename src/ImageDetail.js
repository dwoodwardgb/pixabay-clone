import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getImage } from "./api";

export default function ImageDetail() {
  const { imageId } = useParams();
  const [image, setImage] = useState();

  useEffect(() => {
    getImage(imageId).then((result) => {
      setImage(result?.hits?.[0]);
      console.log(result?.hits?.[0]);
    });
  }, [setImage, imageId]);

  return (
    <>
      {image ? (
        <section className="flex flex-col items-center my-6">
          <img
            alt={image?.tags}
            src={image?.largeImageURL}
            className="h-auto w-full"
            style={{ maxWidth: "850px" }}
          />
          <div className="flex flex-row space-x-4">
            <ul className="space-x-4 flex flex-row items-center flex-wrap">
              {image?.tags.split(",").map((tag) => (
                <li key={tag} className="rounded-lg border border-black p-0.5">
                  {tag}
                </li>
              ))}
            </ul>
            <div>
              <img
                alt={image?.user}
                src={image?.userImageURL}
                style={{ width: "100px", height: "100px" }}
              />
              {image?.user}
            </div>
          </div>
        </section>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
}
