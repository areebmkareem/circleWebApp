import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Authentication from "./Components/Authentication/Authentication";
import Stories from "./Components/Stories/Stories";
import Home from "./Components/Home";
import { connect } from "react-redux";
import { isUserAuthenticated } from "./Store/actions/Authentication";

const AuthenticatedRoutes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route render={() => <Redirect path="/"></Redirect>} />
  </Switch>
);
const PublicRoutes = () => (
  <Switch>
    <Route path="/" exact component={Authentication} />
    <Route render={() => <Redirect to="/"></Redirect>} />
  </Switch>
);

const App = props => {
  React.useEffect(() => {
    props.OnAuthentication();
  }, []);

  const { isUserLoggedIn } = props;
  return (
    <Grid container direction="row" justify="center">
      <Grid item xs={12} md={8}>
        {isUserLoggedIn ? <AuthenticatedRoutes /> : <PublicRoutes />}
      </Grid>
    </Grid>
  );
};

const mapsStateToProps = state => {
  return {
    isUserLoggedIn: state.authentication.isUserLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    OnAuthentication: () => dispatch(isUserAuthenticated())
  };
};
export default connect(
  mapsStateToProps,
  mapDispatchToProps
)(withRouter(App));
