import { useEffect, useState } from "react";
import PlanetCard from "./PlanetCard";
import { useParams } from "react-router-dom";

export default function PlanetFeed(props) {
  const [data, setData] = useState([]);
  const [planetsWithFilm, setPlanetsWithFilm] = useState([]);
  const [planetsWithCharacter, setPlanetsWithCharacter] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/planets/`);
        if (!response.ok) {
          throw new Error("Data could not be fetched!");
        }
        const json_response = await response.json();
        setData(json_response);
      } catch (error) {
        console.error("Error fetching planets:", error);
      }
      try {
        const response = await fetch(
          `http://localhost:3000/api/films/${props.filmId}/planets`
        );
        if (!response.ok) {
          throw new Error("Data could not be fetched!");
        }
        const json_response = await response.json();
        setPlanetsWithFilm(json_response);
      } catch (error) {
        console.error("Error fetching planets by film:", error);
      }
      try {
        const response = await fetch(
          `http://localhost:3000/api/characters/${props.characterId}/planets`
        );
        if (!response.ok) {
          throw new Error("Data could not be fetched!");
        }
        const json_response = await response.json();
        setPlanetsWithCharacter(json_response);
      } catch (error) {
        console.error("Error fetching planets by character:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {planetsWithFilm &&
        planetsWithFilm.map((planet) => (
          <PlanetCard key={planet.id} planet={planet} />
        ))}

      {planetsWithCharacter &&
        planets.map((planet) => (
          <PlanetCard key={planet.id} planet={planet} />
        ))}
    </>
  );
}
