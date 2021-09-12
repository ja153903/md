import React from "react";
import { TextField } from "@material-ui/core";

export default function Content({ content, onChange }) {
  return (
    <TextField
      value={content}
      onChange={onChange}
      placeholder="Enter your content here..."
      multiline
      fullWidth
      rows={40}
    />
  );
}
