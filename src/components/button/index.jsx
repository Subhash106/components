import React from "react";

export default function Button({ title, onClickHandler, className }) {
  return (
    <button className={className} onClick={onClickHandler}>
      {title}
    </button>
  );
}
