import React from "react";

function Button(props) {
  return (
    <button
      className={`bg-cyan-500 text-white md:px-10 px-5 md:py-4 py-2 rounded-lg font-semibold ${props.className}`}
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Button;
