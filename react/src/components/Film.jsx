import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import CharacterFeed from "./CharacterFeed";
import PlanetFeed from "./PlanetFeed";

const Film = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/films/1`);
        if (!response.ok) {
          throw new Error("Data could not be fetched!");
        }
        const json_response = await response.json();
        setData(json_response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={{ mb: 2 }}>
        <Paper
          elevation={4}
          sx={{ p: 2, textAlign: "center", backgroundColor: "#f5f5f5" }}
        >
          <h2>{data.title}</h2>
        </Paper>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Paper elevation={3} sx={{ p: 2, backgroundColor: "#e0f7fa" }}>
          <strong>Description:</strong> {data.opening_crawl}
        </Paper>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Paper elevation={2} sx={{ p: 2, backgroundColor: "#e8f5e9" }}>
          <strong>Director:</strong> {data.director}
        </Paper>
        <Paper elevation={2} sx={{ p: 2, backgroundColor: "#e8f5e9", mt: 1 }}>
          <strong>Release Date:</strong> {data.release_date}
        </Paper>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Paper elevation={1} sx={{ p: 2, backgroundColor: "#fff3e0" }}>
          <strong>Characters:</strong>{" "}
          <CharacterFeed characters={data.characters} />
        </Paper>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Paper elevation={1} sx={{ p: 2, backgroundColor: "#fff3e0" }}>
          <strong>Planets:</strong> <PlanetFeed planets={data.planets} />
        </Paper>
      </Box>
    </Container>
  );
};

export default Film;
