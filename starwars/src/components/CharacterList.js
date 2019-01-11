import React from "react";
import Character from "./Character";

const CharacterList = props => {
  return (
    <div className="list">
      {props.characterList.map(character => {
        return <Character films={character.films} name={character.name} />;
      })}
    </div>
  );
};

export default CharacterList;
