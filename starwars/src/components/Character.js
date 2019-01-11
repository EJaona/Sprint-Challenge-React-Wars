import React from "react";

const Character = props => {
  const { name, img, films } = props;
  return (
    <div className="character">
      <p>{name}</p>
    </div>
  );
};

export default Character;
