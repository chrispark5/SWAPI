import { Box, Container, Paper, Typography, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FilmCard from "./FilmCard.jsx";
import CharacterCard from "./CharacterCard.jsx";

export default function Planet() {
  const [planet, setPlanet] = useState({});
  const [films, setFilms] = useState([]);
  const [characters, setCharacter] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchPlanetData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/planets/${id}`);
        if (!response.ok) {
          throw new Error("Planet data could not be fetched!");
        }
        const json_response = await response.json();
        setPlanet(json_response);
      } catch (error) {
        console.error("Error fetching planet:", error);
      }
    };

    fetchPlanetData();
  }, [id]);

  useEffect(() => {
    const fetchFilmData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/planets/${id}/films`
        );
        if (!response.ok) {
          throw new Error("Film data could not be fetched!");
        }
        const json_response = await response.json();
        setFilms(json_response);
      } catch (error) {
        console.error("Error fetching films:", error);
      }
    };

    const fetchCharacterData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/planets/${id}/characters`
        );
        if (!response.ok) {
          throw new Error("Character data could not be fetched!");
        }
        const json_response = await response.json();
        setCharacter(json_response);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchFilmData();
    fetchCharacterData();
  }, [id]);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        {planet.name || "Loading..."}
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
            <Typography variant="h6">Climate</Typography>
            <Typography variant="body1">{planet.climate || "N/A"}</Typography>
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
            <Typography variant="h6">Population</Typography>
            <Typography variant="body1">
              {planet.population || "N/A"}
            </Typography>
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
            <Typography variant="h6">Terrain</Typography>
            <Typography variant="body1">{planet.terrain || "N/A"}</Typography>
          </Paper>
        </Grid>
      </Grid>
      {films.length > 0 && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6">Films</Typography>
          <Grid container spacing={2} justifyContent={"center"}>
            {films.map((film, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 2,
                    backgroundColor: "#e0e0e0",
                    borderRadius: "12px",
                    textAlign: "center",
                  }}
                >
                  <FilmCard film={{ title: film.title, id: film.id }} />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
      {characters.length > 0 && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6">Characters</Typography>
          <Grid container spacing={2} justifyContent={"center"}>
            {characters.map((character, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 2,
                    backgroundColor: "#e0e0e0",
                    borderRadius: "12px",
                    textAlign: "center",
                  }}
                >
                  <CharacterCard 
                  character={{ name: character.name, id: character.id }} />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Container>
  );
}
