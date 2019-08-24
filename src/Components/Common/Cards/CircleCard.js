import React from "react";
import { Card, CardHeader, Avatar, IconButton, CardActionArea } from "@material-ui/core";
import { MoreVertOutlined } from "@material-ui/icons";

const CircleCard = () => {
  return (
    <React.Fragment>
      <Card>
        <CardHeader
          avatar={<Avatar aria-label="recipe">R</Avatar>}
          action={
            <React.Fragment>
              <IconButton aria-label="settings">
                <MoreVertOutlined />
              </IconButton>
            </React.Fragment>
          }
          title="Office Circle"
          subheader="September 14, 2016"
        />
      </Card>
    </React.Fragment>
  );
};

export default CircleCard;
