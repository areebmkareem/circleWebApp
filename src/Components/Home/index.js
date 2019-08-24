import React from "react";
import Stories from "../Stories/Stories";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Home as HomeIcon, AccountCircle, RadioButtonUncheckedTwoTone } from "@material-ui/icons";
import Circles from "../Circles";

const Home = () => {
  const [value, setValue] = React.useState(1);
  return (
    <React.Fragment>
      {value === 0 && <Circles></Circles>}
      {value === 1 && <Stories></Stories>}

      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        style={{ position: "fixed", bottom: 0, width: "100%" }}
      >
        <BottomNavigationAction label="Circles" icon={<RadioButtonUncheckedTwoTone />} />
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Profile" icon={<AccountCircle />} />
      </BottomNavigation>
    </React.Fragment>
  );
};

export default Home;
