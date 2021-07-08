import { useEffect, useState } from "react";

const API_KEY = "4272121-59134f1078e603a1211a874d6";
const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
  "red roses"
)}`;

function App() {
  const [x, setX] = useState(false);

  useEffect(() => {
    if (x) {
      fetch(URL).then((r) => r.json());
    }
  }, [x]);

  return (
    <div className="App">
      <button onClick={() => setX(true)}>fetch</button>
    </div>
  );
}

export default App;
