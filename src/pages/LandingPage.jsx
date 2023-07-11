import React from "react";
import { Link } from "react-router-dom";
import rickandmorty from "../assets/rick-and-morty-characters-png.png";
import {
  LandingContainer,
  ContainerLeft,
  ContainerRight,
  ImageContainer,
  TextContainer,
  ButtonContainer,
  TextHeader,
  TextDescription,
} from "../styles/LandingStyles";
import { Button } from "../styles/Button";

const Landing = () => {
  const noDecoration = { textDecoration: "none", color: "inherit" };
  return (
    <LandingContainer>
      <ContainerLeft>
        <ImageContainer
          src={rickandmorty}
          alt="characters"
          aria-label="characters image"
        />
      </ContainerLeft>
      <ContainerRight>
        <TextContainer>
          <TextHeader>Mira lo que está pasando aquí</TextHeader>
          <br />
          <TextDescription>
          Toda la información sobre tus personajes favoritos de Rick and Morty, fuera de control (bueno... ¡esto no sería noticia)!
          </TextDescription>
        </TextContainer>
        <ButtonContainer>
          <Button>
            <Link to="/home" style={noDecoration}>
              Ver Ahora
            </Link>
          </Button>
        </ButtonContainer>
      </ContainerRight>
    </LandingContainer>
  );
};

export default Landing;
