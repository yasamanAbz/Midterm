import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">
          Home
        </Button>
        <Button color="inherit" component={RouterLink} to="/shop">
          Shop
        </Button>
        <Button color="inherit" component={RouterLink} to="/product">
          Product
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
