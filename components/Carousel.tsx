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

import { createTheme, responsiveFontSizes } from "@mui/material/styles";

import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import StarRateIcon from "@mui/icons-material/StarRate";
import { ThemeProvider } from "@emotion/react";

let theme = createTheme();
theme = responsiveFontSizes(theme);

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

const MyCarousel = () => {
  return (
    <Carousel>
      {carouselItems.map((item, i) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignContent: "flex-end",
            alignItems: "flex-end",
            height: "600px",
            backgroundColor: "red",
          }}
        >
          <Box sx={{}}></Box>
          <Stack
            sx={{
              justifyContent: "flex-end",
              px: { xs: 4, md: 8 },
              paddingBottom: 8,

              width: "720px",
              maxHeight: " 520px",
            }}
          >
            <Stack>
              <Box>
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: "bold" }}
                >
                  #1 Spotlight
                </Typography>
              </Box>
              <Box>
                <Typography
                  component="h2"
                  variant="h3"
                  sx={{ fontWeight: "bold" }}
                >
                  Kimetsu No Yaiba
                </Typography>
              </Box>
              <Box>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  alignContent="center"
                >
                  <Typography component="span" variant="subtitle2">
                    #Msytery
                  </Typography>
                  <Typography component="span" variant="subtitle2">
                    #Psycological
                  </Typography>
                  <Typography component="span" variant="subtitle2">
                    #Thriller
                  </Typography>

                  <Typography
                    component="span"
                    variant="caption"
                    sx={{
                      backgroundColor: "yellow",
                      borderRadius: "6px",
                      px: "4px",
                      pt: "2px",
                    }}
                  >
                    ONA
                  </Typography>
                  <Typography
                    component="span"
                    variant="caption"
                    sx={{
                      backgroundColor: "yellow",
                      borderRadius: "6px",
                      px: "4px",
                      pt: "2px",
                    }}
                  >
                    HD
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={0.25}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      alignContent: "center",
                    }}
                  >
                    <StarRateIcon
                      sx={{
                        fontSize: "20px",
                        color: "yellow",
                        paddingTop: "2px",
                      }}
                    />
                    <Typography
                      component="span"
                      variant="subtitle2"
                      sx={{
                        marginBottom: "-5px !important",

                        fontWeight: "bold",
                      }}
                    >
                      4.5
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
              <Box sx={{ pt: 2, display: { xs: "none", sm: "initial" } }}>
                Dolor cupidatat ea officia officia est eiusmod cupidatat id ut.
                Laboris dolor est fugiat sint nostrud commodo laboris ullamco
                voluptate Lorem sint sunt. Nulla pariatur ut aute commodo
                deserunt in exercitation minim aliqua dolor reprehenderit.
              </Box>
            </Stack>
            <Stack direction="row" sx={{ paddingTop: 4 }} spacing={2}>
              <Button
                disableRipple
                sx={{
                  backgroundColor: "yellow",
                  borderRadius: 8,
                  px: 2,
                }}
                startIcon={<PlayCircleIcon />}
              >
                <Typography
                  sx={{ textTransform: "none", fontWeight: "bold" }}
                  variant="subtitle1"
                >
                  Watch Now
                </Typography>
              </Button>
              <Button
                variant="outlined"
                sx={{ borderRadius: 8, backgroundColor: "grey" }}
                endIcon={<ArrowForwardIosIcon sx={{ fontSize: "small" }} />}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ textTransform: "none", fontWeight: "bold" }}
                >
                  Detail
                </Typography>
              </Button>
            </Stack>
          </Stack>
        </Box>
      ))}
    </Carousel>
  );
};

export default function MyCarouselReturn() {
  return (
    <ThemeProvider theme={theme}>
      <MyCarousel />
    </ThemeProvider>
  );
}
