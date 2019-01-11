import React from "react";
import "./StarWars.css";

const Character = props => {
  const { name, gender, height, eyeColor } = props;
  return (
    <div className="character">
      <h2>{name}</h2>
      <p>Gender: {gender}</p>
      <p>Height: {height}</p>
      <p>Eye Color: {eyeColor}</p>
    </div>
  );
};

export default Character;
