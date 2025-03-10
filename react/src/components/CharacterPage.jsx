import { Box, Container, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FilmFeed from "./FilmFeed";
import PlanetFeed from "./PlanetFeed";
import PlanetCard from "./PlanetCard";

export default function CharacterPage(props) {
  const [character, setCharacter] = useState({});
  const [homeworld, setHomeworld] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/characters/${id}`
        );
        if (!response.ok) {
          throw new Error("Data could not be fetched!");
        }
        const json_response = await response.json();
        setCharacter(json_response);
      } catch (error) {
        console.error("Error fetching character:", error);
      }
    };
    fetchData();
  }, [id]);
  useEffect(() => {
    const fetchHomeworld = async () => {
      if (character && character.homeworld) {
        try {
          const response = await fetch(
            `http://localhost:3000/api/planets/${character.homeworld}`
          );
          if (!response.ok) {
            throw new Error("Homeworld data could not be fetched!");
          }
          const json_response = await response.json();
          setHomeworld(json_response);
        } catch (error) {
          console.error("Error fetching homeworld:", error);
        }
      }
    };

    fetchHomeworld();
  }, [character]);

  return (
    <div>
      <h1>{character.name}</h1>
      <Box
        component="section"
        sx={{
          p: 2,
          border: "1px dashed grey",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Paper
          elevation={3}
          style={{
            backgroundColor: "grey",
            borderRadius: "10px",
            margin: "10px",
            width: "33%",
          }}
        >
          {character.mass}
        </Paper>
        <Paper
          elevation={3}
          style={{
            backgroundColor: "grey",
            borderRadius: "10px",
            margin: "10px",
            width: "33%",
          }}
        >
          {character.height} inches
        </Paper>
        <Paper
          elevation={3}
          style={{
            backgroundColor: "grey",
            borderRadius: "10px",
            margin: "10px",
            width: "33%",
          }}
        >
          {character.gender}
        </Paper>
      </Box>

      <h2>Homeworld</h2>
      <PlanetCard planet={{ name: homeworld.name, id: character.homeworld }} />

      <h2>Films appeared in</h2>
      <FilmFeed characterId={id} />
    </div>
  );
}
