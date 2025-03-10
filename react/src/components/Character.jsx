import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";

export default function Character({ character }) {
  return (
    <Card variant="outlined">
      <CardActionArea component="a" href={`/character/${character.id}`}>
        <CardContent>{character.name}</CardContent>
      </CardActionArea>
    </Card>
  );
}
