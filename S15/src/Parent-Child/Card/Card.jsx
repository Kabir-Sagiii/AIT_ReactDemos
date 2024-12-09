import React from "react";
import "./Card.css";
function Card({ url }) {
  return (
    <div className="card">
      <img src={url} width={"100%"} height={"100%"} />
    </div>
  );
}

export default Card;
