import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    borderLeft: "1px solid black",
    marginLeft: "100px",
    marginRight: "100px",
  },
});

export default function VerticalBreak() {
  const styles = useStyles();

  return <div className={styles.root}></div>;
}
