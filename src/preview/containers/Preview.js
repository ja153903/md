import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

import { TitlePreview, ContentPreview } from "../components";
import {
  useSelectTitle,
  useSelectContent,
} from "../../editor/stores/selectors";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "0px 20px",
  },
});

export default function Preview() {
  const title = useSelectTitle();
  const content = useSelectContent();
  const styles = useStyles();

  return (
    <Box border={1} className={styles.root} width={700}>
      <TitlePreview title={title} />
      <ContentPreview content={content} />
    </Box>
  );
}
