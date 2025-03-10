import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="film" />
        
      </Routes>
    </>
  );
}

export default App;
