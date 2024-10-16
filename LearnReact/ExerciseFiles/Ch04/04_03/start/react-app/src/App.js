import "./App.css";

const [first, second, third] = ["France", "Ireland", "USA"]

console.log(first)

function App() {
  return (
    <div className="App">
      <h1>Hello from {second}</h1>
    </div>
  );
}

export default App;
