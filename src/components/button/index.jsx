import React from "react";

export default function Button({ children, onClickHandler, className }) {
  return (
    <button className={className} onClick={onClickHandler}>
      {children}
    </button>
  );
}
