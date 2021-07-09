import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import ImageGallery from "./ImageGallery";
import ImageDetail from "./ImageDetail";

function App() {
  const [searchText, setSearchText] = useState("");
  const [images, setImages] = useState([]);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <ImageGallery
            searchText={searchText}
            setSearchText={setSearchText}
            images={images}
            setImages={setImages}
          />
        </Route>
        <Route path="/:imageId">
          <ImageDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
