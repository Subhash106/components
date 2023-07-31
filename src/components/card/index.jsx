import React from "react";

import "./style.css";

export default function Card({ title, type }) {
  const className = `card card-${type}`;
  return <div className={className}>{title}</div>;
}
