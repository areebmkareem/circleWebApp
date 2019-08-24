import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
const Login = () => (
  <React.Fragment>
    <Grid container direction="column" justify="center" alignItems="center" spacing={2} style={{ height: "100vh" }}>
      <Grid item>
        <Typography variant="h4">Circle</Typography>
      </Grid>
      <Grid item>
        <TextField variant="outlined" label="Email" />
      </Grid>
      <Grid item>
        <TextField variant="outlined" label="Password" />
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary">
          Login
        </Button>
      </Grid>
    </Grid>
  </React.Fragment>
);

export default Login;
