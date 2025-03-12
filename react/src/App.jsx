import { useEffect, useState } from "react";

import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import CharacterPage from "./components/CharacterPage";

import Film from "./components/Film";
import Planet from "./components/Planet";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/character/:id" element={<CharacterPage />}></Route>
          {/*<Route path="/planet/:id" element={<PlanetCard />}></Route> */}
          <Route path="/planet/:id" element={<Planet />}></Route>
          <Route path="/film/:id" element={<Film />}></Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
