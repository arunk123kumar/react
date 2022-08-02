import React from "react";
function Button(props) {
  return (
    <button onClick={() => props.onClickFunction(props.increment)}>
      {props.increment}
    </button>
  );
}
export default Button;
