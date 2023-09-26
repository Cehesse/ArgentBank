import React from "react";

function Button(props) {
  return (
    <div >
        <button className="button_green">{props.text}</button>
    </div>
    )
}

export default Button;