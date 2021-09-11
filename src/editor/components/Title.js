import React from "react";

export default function Title({ title, onChange }) {
  return (
    <input
      value={title}
      onChange={onChange}
      placeholder="Enter your title here..."
    />
  );
}
