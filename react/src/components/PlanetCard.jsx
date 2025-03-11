import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";

export default function PlanetCard({ planet }) {
  return (
    <Card variant="outlined" className="lightsaber">
      <CardActionArea
        component="a"
        href={`/planet/${planet.id}`}
        className="lightsaber"
      >
        <CardContent>{planet.name}</CardContent>
      </CardActionArea>
    </Card>
  );
}
