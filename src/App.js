import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import Register from "./Components/Authentication/Register";

const App = () => {
  return (
    <Grid container direction="row" justify="center">
      <Grid item xs={12} md={8} style={{ padding: 10 }}>
        <Register></Register>
      </Grid>
    </Grid>
  );
};

export default App;
