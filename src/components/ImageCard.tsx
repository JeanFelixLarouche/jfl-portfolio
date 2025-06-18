import { Card, CardContent, Typography, Box, AspectRatio } from "@mui/joy";

export default function ImageTextCard({
  title,
  imageUrl,
  color,
  link,
}: {
  title: string;
  imageUrl: string;
  color: string;
  link?: string;
}) {
  return (
    <Box sx={{ p: 4, display: "flex", justifyContent: "center" }}>
      <Card
        component={link ? "a" : "div"}
        href={link}
        target="_blank"
        variant="outlined"
        sx={{
          width: 420,
          height: 120,
          display: "flex",
          flexDirection: "row",
          overflow: "hidden",
          backgroundColor: color,
          borderColor: "#222222",
          borderWidth: 3,
          textDecoration: "none",
        }}
      >
        <AspectRatio
          ratio="1"
          sx={{
            width: 120,
            minWidth: 120,
          }}
        >
          <img
            src={imageUrl}
            alt="Transparent icon"
            style={{
              objectFit: "contain",
              backgroundColor: color,
            }}
          />
        </AspectRatio>

        <CardContent
          sx={{
            flex: 1,
            p: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography level="h2">{title}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
