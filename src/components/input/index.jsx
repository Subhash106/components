import React from "react";

import "./style.css";

export default function TextInput({ className, onChange, value }) {
  return (
    <input
      className={className}
      type="text"
      value={value}
      onChange={onChange}
    />
  );
}
