import { useEffect, useState } from "react";
import FilmCard from "./FilmCard";
import { useParams } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function FilmFeed(props) {
export default function FilmFeed(props) {
  const [data, setData] = useState([]);
  const [filmsWithCharacter, setFilmsWithCharacter] = useState([]);
  const [filmsWithPlanet, setFilmsWithPlanet] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/films/`);
        if (!response.ok) {
          throw new Error("Data could not be fetched!");
        }
        const json_response = await response.json();
        setData(json_response);
      } catch (error) {
        console.error("Error fetching films:", error);
      }
      try {
        const response = await fetch(
          `http://localhost:3000/api/characters/${props.characterId}/films`
        );
        if (!response.ok) {
          throw new Error("Data could not be fetched!");
        }
        const json_response = await response.json();
        setFilmsWithCharacter(json_response);
      } catch (error) {
        console.error("Error fetching films by character:", error);
      }
      try {
        const response = await fetch(
          `http://localhost:3000/api/planets/${props.planetId}/films`
        );
        if (!response.ok) {
          throw new Error("Data could not be fetched!");
        }
        const json_response = await response.json();
        setFilmsWithPlanet(json_response);
      } catch (error) {
        console.error("Error fetching films by planet:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>

      {filmsWithCharacter &&
        filmsWithCharacter.map((film) => (
          <FilmCard key={film.id} film={film} />
        ))}

      {filmsWithPlanet &&
        filmsWithPlanet.map((film) => (
          <FilmCard key={film.id} film={film} />
        ))}
    </>
  );
}
