import React from "react";

const Stories = () => {
  return (
    <React.Fragment>
      {Array(10)
        .fill()
        .map((data, index) => {
          return <h6>asds</h6>;
        })}
    </React.Fragment>
  );
};

export default Stories;
