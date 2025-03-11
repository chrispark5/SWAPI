import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import CharacterCard from "./CharacterCard";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/characters`);
        if (!response.ok) {
          throw new Error("Data could not be fetched!");
        }
        const json_response = await response.json();
        setData(json_response);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Character List
      </Typography>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {data.map((character) => (
          <div
            key={character.id}
            style={{
              flex: "1 1 calc(33.333% - 16px)",
              boxSizing: "border-box",
            }}
          >
            <CharacterCard character={character} />
          </div>
        ))}
    </div>
    </Container>
  );
}
