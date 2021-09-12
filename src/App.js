import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

import { Editor } from "./editor";
import { Preview } from "./preview";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: "30px 50px",
  },
});

function App() {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <Editor />
      <Preview />
    </Box>
  );
}

export default App;
