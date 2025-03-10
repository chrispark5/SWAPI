import { useEffect, useState } from "react";
import FilmCard from "./FilmCard";

export default function FilmFeed() {
  const [data, setData] = useState([]);
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
    };
    fetchData();
  }, []);

  return (
    <>
      {data.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </>
  );
}
