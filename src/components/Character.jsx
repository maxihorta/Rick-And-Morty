import React from "react";
import Placeholder from "../assets/placeholder-img.png";
import Loader from "./Loader";
import { Button } from "../styles/Button";
import ErrorAlert from "./ErrorAlert";
import {
  CharacterContainer,
  DefaultSetting,
  DefaulText,
  LoaderContainer,
  CharacterCard,
  CharacterImage,
  CharacterHeader,
  CharacterData,
  CharacterLeft,
  CharacterName,
  CharacterTag,
  CharacterResults,
  DataContainer,
} from "../styles/CharacterStyles.js";

const Character = ({ infoCharacter, runInfo, loader, error }) => {
  if (error) return <ErrorAlert />;
  return (
    <CharacterContainer>
      {!infoCharacter ? (
        <DefaultSetting>
          <DefaulText>¡Haz clic en el botón para comenzar!</DefaulText>
          <Button onClick={() => runInfo()}>Ver un personaje</Button>
        </DefaultSetting>
      ) : loader ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
        <CharacterCard>
          <CharacterLeft>
            <CharacterImage
              src={infoCharacter.image ? infoCharacter.image : Placeholder}
              alt="character"
              aria-label="image of a character"
            />
            <div>
              <Button onClick={() => runInfo()}>Agregar y buscar nuevo personaje</Button>
            </div>
          </CharacterLeft>
          <CharacterData>
            <CharacterHeader>
              <CharacterName>
                {infoCharacter.name ? infoCharacter.name : "Not known"}
              </CharacterName>
              <CharacterTag>
                id: #{infoCharacter.id ? infoCharacter.id : "Not known"}
              </CharacterTag>
            </CharacterHeader>
            <CharacterResults>
              <DataContainer>
                <span>Estado: </span>
                {infoCharacter.status ? infoCharacter.status : "Not known"}
              </DataContainer>
              <hr />
              <DataContainer>
                <span>Especie: </span>
                {infoCharacter.species ? infoCharacter.species : "Not known"}
              </DataContainer>
              <hr />
              <DataContainer>
                <span>Tipo: </span>
                {infoCharacter.type ? infoCharacter.type : "Not known"}
              </DataContainer>
              <hr />
              <DataContainer>
                <span>Genero: </span>
                {infoCharacter.gender ? infoCharacter.gender : "Not known"}
              </DataContainer>
              <hr />
              <DataContainer>
                <span>Origen: </span>
                {infoCharacter.origin.name
                  ? infoCharacter.origin.name
                  : "Not known"}
              </DataContainer>
              <hr />
              <DataContainer>
                <span>Ubicacion: </span>
                {infoCharacter.location.name
                  ? infoCharacter.location.name
                  : "Not known"}
              </DataContainer>
              <hr />
              <DataContainer>
                <span>Creado en: </span>
                {new Date(
                  infoCharacter.created ? infoCharacter.created : "Not known"
                )
                  .toString()
                  .split(" ")
                  .slice(0, 4)
                  .join(" ")}
              </DataContainer>
              <hr />
            </CharacterResults>
          </CharacterData>
        </CharacterCard>
      )}
    </CharacterContainer>
  );
};

export default Character;
