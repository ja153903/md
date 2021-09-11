import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Editor } from "./editor";
import { Preview } from "./preview";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});

function App() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Editor />
      <Preview />
    </div>
  );
}

export default App;
