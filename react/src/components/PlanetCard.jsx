import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";

export default function PlanetCard({ planet }) {
  return (
    <Card variant="outlined">
      <CardActionArea component="a" href={`/planet/${planet.id}`}>
        <CardContent>{planet.name}</CardContent>
      </CardActionArea>
    </Card>
  );
}
