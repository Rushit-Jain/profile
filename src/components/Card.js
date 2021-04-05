import React from "react";
import { Paper } from "@material-ui/core";

const card = (props) => {
  return (
    <Paper
      elevation={5}
      style={{
        color: "white",
        backgroundColor: "rgba(255,255,255,0.2)",
        padding: "30px",
        marginBottom: "40px",
      }}
    >
      {props.children}
    </Paper>
  );
};

export default card;
