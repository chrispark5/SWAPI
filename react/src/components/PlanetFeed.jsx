import { useEffect, useState } from "react";
import PlanetCard from "./PlanetCard";

export default function PlanetFeed() {
  const [data, setData] = useState([]);
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
    };
    fetchData();
  }, []);

  return (
    <>
      {data.map((planet) => (
        <PlanetCard key={planet.id} planet={planet} />
      ))}
    </>
  );
}
