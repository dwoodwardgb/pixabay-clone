import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ImageGallery from "./ImageGallery";
import ImageDetail from "./ImageDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <ImageGallery />
        </Route>
        <Route path="/:imageId">
          <ImageDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
