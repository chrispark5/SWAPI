import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";

export default function CharacterCard({ character }) {
  return (
    <Card variant="outlined" className="lightsaber">
      {/* <CardActionArea component="a" href={`/character/${character.id}`}> */}
      <a className="lightsaber" href={`/character/${character.id}`}>
        <CardContent>{character.name.toLowerCase()}</CardContent>
      </a>
      {/* </CardActionArea> */}
    </Card>
  );
}
