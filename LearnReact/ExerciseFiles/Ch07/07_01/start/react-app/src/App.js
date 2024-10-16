import "./App.css";
import {Link} from "react-router-dom"

function Home() {
  return(
    <div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>My website</h1>
    </div>
  )
}

export function About() {
  return(
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>About me</h1>
    </div>
  )
}

export function Contact() {
  return(
    <div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
      </nav>
      <h1>Contact</h1>
    </div>
  )
}

function App() {
  return <Home />
}

export default App;
