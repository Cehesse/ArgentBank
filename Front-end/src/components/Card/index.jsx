import React from "react";

function Card(props) {
    return(
            <div className="card-item">
            <img src={props.icon} alt="logo" className="card-item_icon" />
                <h3 className="card-item_title">{props.title}</h3>
                <p className="card-item_text">{props.text}</p>
        </div>
  );
}

export default Card;