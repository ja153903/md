import React from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";

export default function GenericPreview({ markdown }) {
  return (
    <ReactMarkdown
      children={markdown}
      remarkPlugins={[remarkMath, remarkGfm]}
    />
  );
}
