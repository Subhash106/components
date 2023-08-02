import React from "react";

import "./style.css";

export default function Card({ type, children }) {
  const className = `card card-${type}`;
  return <div className={className}>{children}</div>;
}
