import { Box, Container, Paper, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FilmFeed from "./FilmFeed";
import PlanetFeed from "./PlanetFeed";
import PlanetCard from "./PlanetCard";
import { Link } from "react-router-dom";

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
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        {character.name}
      </Typography>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={4}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              backgroundColor: "lightgrey",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <Typography variant="h6">Mass</Typography>
            <Typography variant="body1">{character.mass}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              backgroundColor: "lightgrey",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <Typography variant="h6">Height</Typography>
            <Typography variant="body1">{character.height} inches</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              backgroundColor: "lightgrey",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <Typography variant="h6">Gender</Typography>
            <Typography variant="body1">{character.gender}</Typography>
          </Paper>
        </Grid>
      </Grid>

      <Typography variant="h5" component="h2" gutterBottom>
        Homeworld
      </Typography>
      {/* <Link to={`/planet/${character.homeworld}`}> */}
        <PlanetCard
          planet={{ name: homeworld.name, id: character.homeworld }}
        />
      {/* </Link> */}

      <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
        Films appeared in
      </Typography>
      <FilmFeed characterId={id} />
    </Container>
  );
}
