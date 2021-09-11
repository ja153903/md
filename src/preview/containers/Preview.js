import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { TitlePreview, ContentPreview } from "../components";
import {
  useSelectTitle,
  useSelectContent,
} from "../../editor/stores/selectors";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
});

export default function Preview() {
  const title = useSelectTitle();
  const content = useSelectContent();
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <TitlePreview title={title} />
      <ContentPreview content={content} />
    </div>
  );
}
