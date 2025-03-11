import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import CharacterFeed from "./CharacterFeed";
import PlanetFeed from "./PlanetFeed";
import { useParams } from "react-router-dom";

export default function Film() {
  const [film, setFilm] = useState({});
  const [planets, setPlanets] = useState([]);
  const [characters, setCharacter] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/films/${id}`
        );
        if (!response.ok) {
          throw new Error("Data could not be fetched!");
        }
        const json_response = await response.json();
        setFilm(json_response);
      } catch (error) {
        console.error("Error fetching character:", error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchPlanetData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/films/${id}/planets`
        );
        if (!response.ok) {
          throw new Error("Film data could not be fetched!");
        }
        const json_response = await response.json();
        setPlanets(json_response);
      } catch (error) {
        console.error("Error fetching films by planet:", error);
      }
    };

    const fetchCharacterData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/films/${id}/characters`
        );
        if (!response.ok) {
          throw new Error("Character data could not be fetched!");
        }
        const json_response = await response.json();
        setCharacter(json_response);
      } catch (error) {
        console.error("Error fetching films by character:", error);
      }
    };

    fetchPlanetData();
    fetchCharacterData();
  }, [id]);


  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={{ mb: 2 }}>
        <Paper elevation={4} sx={{ p: 2, textAlign: 'center', backgroundColor: '#f5f5f5' }}>
          <h2>{film.title}</h2>
        </Paper>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Paper elevation={3} sx={{ p: 2, backgroundColor: '#e0f7fa' }}>
          <strong>Description:</strong> {film.opening_crawl}
        </Paper>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Paper elevation={2} sx={{ p: 2, backgroundColor: '#e8f5e9' }}>
          <strong>Director:</strong> {film.director}
        </Paper>
        <Paper elevation={2} sx={{ p: 2, backgroundColor: '#e8f5e9', mt: 1 }}>
          <strong>Release Date:</strong> {film.release_date}
        </Paper>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Paper elevation={1} sx={{ p: 2, backgroundColor: '#fff3e0' }}>
          <strong>Characters:</strong> <CharacterFeed filmId={id} />
        </Paper>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Paper elevation={1} sx={{ p: 2, backgroundColor: '#fff3e0' }}>
          <strong>Planets:</strong> <PlanetFeed filmId={id} />
        </Paper>
      </Box>
    </Container>
  );
};
