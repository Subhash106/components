import React from "react";
import "./style.css";

export default function Button({ children, onClick, className, ...props }) {
  const classes = `btn ${className}`;
  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
