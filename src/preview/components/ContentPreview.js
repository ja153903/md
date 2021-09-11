import React from "react";

import GenericPreview from "./GenericPreview";

export default function ContentPreview({ content }) {
  return <GenericPreview markdown={content} />;
}
