import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";

export default function FilmCard({ film }) {
  return (
    <Card variant="outlined" className="lightsaber">
      <CardActionArea
        component="a"
        href={`/film/${film.id}`}
        className="lightsaber"
      >
        <CardContent>{film.title}</CardContent>
      </CardActionArea>
    </Card>
  );
}
