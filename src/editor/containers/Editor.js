import React, { useState } from "react";

import { Content, Title } from "./components";

export default function Editor() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div>
      <Title title={title} onChange={(e) => setTitle(e.target.value)} />
      <Content content={content} onChange={(e) => setContent(e.target.value)} />
    </div>
  );
}
