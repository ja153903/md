import React from "react";

export default function Content({ content, onChange }) {
  return (
    <textarea
      value={content}
      onChange={onChange}
      placeholder="Enter your content here..."
    ></textarea>
  );
}
