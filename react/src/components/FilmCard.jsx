import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";

export default function FilmCard({ film }) {
  return (
    <Card variant="outlined">
      <CardActionArea component="a" href={`/film/${film.id}`}>
        <CardContent>{film.title}</CardContent>
      </CardActionArea>
    </Card>
  );
}
