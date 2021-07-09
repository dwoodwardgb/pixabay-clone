import { useState } from "react";
import { Link } from "react-router-dom";
import { search } from "./api";

export default function ImageGallery() {
  const [searchText, setSearchText] = useState("");
  const [images, setImages] = useState([]);

  return (
    <div className="space-y-4 my-4">
      <h1 className="text-center font-bold text-3xl">Pixabay</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          search(searchText).then((result) => {
            setImages(result?.hits || []);
          });
        }}
        className="space-x-2 flex flex-row justify-center"
      >
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          id="search"
          name="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border-black border p-1 rounded"
          style={{ width: "280px" }}
        />
        <input
          type="submit"
          value="Search"
          className="p-1 rounded border border-black bg-red-500"
        />
      </form>
      <ul className="flex flex-row flex-wrap items-center space-x-2 space-y-2">
        {images.map((image) => (
          <li key={image?.id}>
            <Link to={`/${image?.id}`}>
              <img alt={image?.tags} src={image?.previewURL} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
