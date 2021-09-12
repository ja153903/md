import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

import { Content, Title } from "../components";
import { onTitleChange, onContentChange } from "../stores";
import { useSelectTitle, useSelectContent } from "../stores/selectors";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "0px 20px",
  },
});

export default function Editor() {
  const dispatch = useDispatch();
  const title = useSelectTitle();
  const content = useSelectContent();
  const styles = useStyles();

  return (
    <Box border={1} className={styles.root} width={700}>
      <Title
        title={title}
        onChange={(e) => dispatch(onTitleChange(e.target.value))}
      />
      <Content
        content={content}
        onChange={(e) => dispatch(onContentChange(e.target.value))}
      />
    </Box>
  );
}
