import React from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
const Register = () => {
  const [data, setData] = React.useState({ name: "", email: "", password: "" });
  const handleOnchange = event => {
    const { name, value } = event.target;
    let dataClone = data;
    dataClone[name] = value;
    setData(data);
  };
  return (
    <React.Fragment>
      <Grid container direction="column" spacing={2} justify="center" alignItems="stretch" style={{ textAlign: "center", height: "99vh" }}>
        <Grid item>
          <Typography variant="h3" color="textSecondary">
            Circle
          </Typography>
        </Grid>
        <Grid item>
          <TextField variant="outlined" onChange={e => handleOnchange(e)} name="name" type="text" fullWidth label="Name"></TextField>
        </Grid>
        <Grid item>
          <TextField variant="outlined" onChange={e => handleOnchange(e)} type="email" name="email" fullWidth label="Email"></TextField>
        </Grid>
        <Grid item>
          <TextField variant="outlined" onChange={e => handleOnchange(e)} type="password" name="password" fullWidth label="Password"></TextField>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            Sign up
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const mapsStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(
  mapsStateToProps,
  mapDispatchToProps
)(withRouter(Register));
