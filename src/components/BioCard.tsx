import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import Chip from "@mui/joy/Chip";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import CardActions from "@mui/joy/CardActions";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import SvgIcon from "@mui/joy/SvgIcon";

export default function BioCard() {
  return (
    <Card sx={{ width: 420, maxWidth: "100%", boxShadow: "lg" }}>
      <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
        <Avatar src="./Raison.jpg" sx={{ "--Avatar-size": "5rem" }} />
        <Typography level="title-lg">JF Larouche</Typography>
        <Typography level="body-sm" sx={{ maxWidth: "38ch" }}>
          Salut! Je suis un étudiant en génie informatique à l'Université de
          Sherbrooke qui aime bien créer des trucs cool quand il a le temps.
          Merci de visiter ma page!
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mt: 2,
            "& > button": { borderRadius: "2rem" },
          }}
        >
          <IconButton
            component="a"
            href="https://github.com/JeanFelixLarouche"
            target="_blank"
            size="sm"
            variant="plain"
            color="neutral"
          >
            <img src="./github.svg" alt="GitHub" width="26" height="26" />
          </IconButton>
          <IconButton
            component="a"
            href="https://leetcode.com/u/Jeef22"
            target="_blank"
            size="sm"
            variant="plain"
            color="neutral"
          >
            <img src="./leetcode.svg" alt="LeetCode" width="26" height="26" />
          </IconButton>
          <IconButton
            component="a"
            href="https://linkedin.com/in/jean-félix-larouche-b11b66257"
            target="_blank"
            size="sm"
            variant="plain"
            color="neutral"
          >
            <img src="./linkedin.svg" alt="LinkedIn" width="26" height="26" />
          </IconButton>
        </Box>
      </CardContent>
      <CardOverflow sx={{ bgcolor: "background.level1" }}>
        <CardActions buttonFlex="1">
          <ButtonGroup
            variant="outlined"
            sx={{ bgcolor: "background.surface" }}
          >
            <Button component="a" href="mailto:larouche.jeanfelx@gmail.com">
              Me contacter
            </Button>
          </ButtonGroup>
        </CardActions>
      </CardOverflow>
    </Card>
  );
}
