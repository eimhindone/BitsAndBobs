import "./App.css";
import {useState} from "react";



function App() {
  const [emotion, setEmotion] = useState("Happy");
  console.log(what);
  return (
    <div className="App">
      <h1>Current {emotion}</h1>
      <button onClick={() => setEmotion("Sad")}>Sad</button>
    </div>
  );
}

export default App;
