import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import { useParams } from "react-router-dom";

export default function CharacterFeed(props) {
  const [data, setData] = useState([]);
  const [charactersWithFilm, setCharactersWithFilm] = useState([]);
  const [charactersWithPlanet, setCharactersWithPlanet] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/characters/`);
        if (!response.ok) {
          throw new Error("Data could not be fetched!");
        }
        const json_response = await response.json();
        setData(json_response);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
      try {
        const response = await fetch(
          `http://localhost:3000/api/films/${props.filmId}/characters`
        );
        if (!response.ok) {
          throw new Error("Data could not be fetched!");
        }
        const json_response = await response.json();
        setCharactersWithFilm(json_response);
      } catch (error) {
        console.error("Error fetching characters by film:", error);
      }
      try {
        const response = await fetch(
          `http://localhost:3000/api/planets/${props.planetId}/characters`
        );
        if (!response.ok) {
          throw new Error("Data could not be fetched!");
        }
        const json_response = await response.json();
        setCharactersWithPlanet(json_response);
      } catch (error) {
        console.error("Error fetching planets:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>

      {charactersWithFilm &&
        charactersWithFilm.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}

      {charactersWithPlanet &&
        charactersWithPlanet.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
    </>
  );
}
