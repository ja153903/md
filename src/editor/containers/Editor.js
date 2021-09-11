import React from "react";
import { useDispatch } from "react-redux";

import { Content, Title } from "../components";
import { onTitleChange, onContentChange } from "../stores";
import { useSelectTitle, useSelectContent } from "../stores/selectors";

export default function Editor() {
  const title = useSelectTitle();
  const content = useSelectContent();
  const dispatch = useDispatch();

  return (
    <div>
      <Title
        title={title}
        onChange={(e) => dispatch(onTitleChange(e.target.value))}
      />
      <Content
        content={content}
        onChange={(e) => dispatch(onContentChange(e.target.value))}
      />
    </div>
  );
}
