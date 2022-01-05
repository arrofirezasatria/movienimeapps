import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

export default function Header() {
  return (
    <>
      <AppBar sx={{ backgroundColor: "transparent" }}>
        <Toolbar sx={{ backgroundColor: "transparent" }}>
          <Container maxWidth="lg">
            <Typography component="h1" variant="h6">
              CodeNime
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}
