import React from "react";
import Character from "./Character";
import "./StarWars.css";

const CharacterList = props => {
  return (
    <div className="list">
      {props.characterList.map(character => {
        return (
          <Character
            gender={character.gender}
            name={character.name}
            height={character.height}
            eyeColor={character.eye_color}
          />
        );
      })}
    </div>
  );
};

export default CharacterList;
