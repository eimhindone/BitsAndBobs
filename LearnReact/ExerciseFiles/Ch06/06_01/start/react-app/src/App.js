import "./App.css";
import { useState, useEffect } from "react";



function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/evandone`
    )
      .then((response) => response.json())
      .then(setData);
    },[]);
    if(data) return <pre>{JSON.stringify(data, null, 2)}</pre>
};


export default App;
