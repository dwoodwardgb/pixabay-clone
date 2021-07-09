import { useState } from "react";
import { Link } from "react-router-dom";
import { search } from "./api";

export default function ImageGallery() {
  const [searchText, setSearchText] = useState("");
  const [images, setImages] = useState([]);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          search(searchText).then((result) => {
            setImages(result?.hits || []);
          });
        }}
      >
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          id="search"
          name="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border-black border-2 mx-2"
        />
        <input type="submit" value="Search" />
      </form>
      <ul>
        {images.map((image) => (
          <li key={image?.id}>
            <Link to={`/${image?.id}`}>{image?.user}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
