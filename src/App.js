import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import Register from "./Components/Authentication/Register";
import Stories from "./Components/Stories/Stories";
import Home from "./Components/Home";

const App = () => {
  return (
    <Grid container direction="row" justify="center">
      <Grid item xs={12} md={8}>
        <Home></Home>
      </Grid>
    </Grid>
  );
};

export default App;
