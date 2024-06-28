import React from "react";

function Button({ children, onClick }) {
  return (
    <button className="icons" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
