import React from "react";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import ButtonBase from "@mui/material/ButtonBase";

const carouselItems = [
  {
    name: "Kimetsu No Yaiba",
    desc: "Aliqua aliqua laborum ea in aliqua ex tempor ipsum. Reprehenderit ad dolore ea reprehenderit incididunt nulla veniam. Exercitation ex ut ex enim ipsum amet tempor est dolor consectetur est dolor in. Esse mollit velit sunt do nisi ut magna est nulla enim pariatur in fugiat incididunt.",
    rating: "9.5",
    img: "KnY.jpg",
    bgColor: "red",
    genre: ["action", "Supernatural"],
  },
  {
    name: "Jojo Bizarre Adventure Stone Ocean",
    desc: "Ullamco qui consequat sint excepteur. Laboris aute anim eu magna ad ipsum cupidatat irure do id. Mollit quis minim deserunt nulla qui labore incididunt officia. Ipsum ex proident duis dolor duis ad tempor cillum voluptate magna veniam irure non ullamco. Tempor mollit voluptate cillum irure veniam eiusmod est laborum.",
    rating: "5.5",
    img: "KnY.jpg",
    bgColor: "blue",
    genre: ["Slice of Life", "School"],
  },
];

const Genre = () => {
  return (
    <Stack
      direction="row"
      component="ul"
      spacing={1}
      sx={{ margin: 0, padding: 0, listStyleType: "none" }}
    >
      <li>
        <Button
          variant="outlined"
          sx={{
            borderRadius: "18px",
            backgroundColor: "white",
            py: "2px",
          }}
        >
          <Typography variant="body2" sx={{ fontSize: "12px" }}>
            Mystery
          </Typography>
        </Button>
      </li>
      <li>
        <Button
          variant="outlined"
          sx={{
            borderRadius: "18px",
            backgroundColor: "white",
            py: "2px",
          }}
        >
          <Typography variant="body2" sx={{ fontSize: "12px" }}>
            Psycological
          </Typography>
        </Button>
      </li>
    </Stack>
  );
};

export default function MyCarousel() {
  return (
    <Carousel>
      {carouselItems.map((item, i) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            height: "600px",
            backgroundColor: "red",
          }}
        >
          <Box sx={{}}></Box>
          <Stack
            sx={{
              justifyContent: "flex-end",
              paddingLeft: 8,
              paddingBottom: 8,
            }}
          >
            <Stack>
              <Box>Spotlight</Box>
              <Box>Title</Box>
              <Box>Genre</Box>
              <Box>Desc</Box>
            </Stack>
            <Stack direction="row">
              <Box>a</Box>
              <Box>b</Box>
            </Stack>
          </Stack>
        </Box>
      ))}
    </Carousel>
  );
}

/*         <Grid
          container
          key={i}
          sx={{
            display: "flex",
            height: "600px",
            backgroundImage: `url(${item.img}})`,
          }}
          >
            <Grid item xs={12} md={5} lg={5}>
              <Stack spacing={1} sx={{ margin: "252px 52px 52px 52px" }}>
                <Box>
                  <Typography
                    component="h1"
                    variant="h3"
                    sx={{ fontWeight: "bold" }}
                  >
                    {item.name}
                  </Typography>
                  <Genre />
                </Box>
                <Rating name="rating" value={4.2} precision={0.5} readOnly />
                <Typography
                  sx={{ display: { xs: "none", sm: "none", md: "initial" } }}
                >
                  {item.desc}
                </Typography>
              </Stack>
            </Grid>
          </Grid>  */
