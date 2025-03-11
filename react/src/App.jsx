import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import CharacterPage from "./components/CharacterPage";
import PlanetCard from "./components/PlanetCard";
import PlanetFeed from "./components/PlanetFeed"
import Film from "./components/Film";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/character/:id" element={<CharacterPage />}></Route>
          {/*<Route path="/planet/:id" element={<PlanetCard />}></Route> */}
          <Route path="/planet/:id" element={<PlanetFeed />}></Route>
          <Route path="/film/:id" element={<Film />}></Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
