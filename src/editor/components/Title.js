import React from "react";
import { TextField } from "@material-ui/core";

export default function Title({ title, onChange }) {
  return (
    <TextField
      value={title}
      onChange={onChange}
      placeholder="Enter your title here..."
      fullWidth
    />
  );
}
