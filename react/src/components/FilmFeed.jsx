import { useEffect, useState } from "react";
import FilmCard from "./FilmCard";
import { useParams } from "react-router-dom";

export default function FilmFeed(props) {
  const [data, setData] = useState([]);
  const [filmsWithCharacter, setFilmsWithCharacter] = useState([]);
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
        console.error("Error fetching films:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {/* {data.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))} */}

      {filmsWithCharacter &&
        filmsWithCharacter.map((film) => (
          <FilmCard key={film.id} film={film} />
        ))}
    </>
  );
}
