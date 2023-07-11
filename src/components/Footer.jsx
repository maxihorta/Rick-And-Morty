import React from "react";
import { FooterContainer, FooterText } from "../styles/FooterStyles";

const Footer = () => {
  const noDecoration = { textDecoration: "none", color: "inherit" };
  return (
    <FooterContainer>
      <a
        href="https://portafolios-five.vercel.app/"
        rel="noopener noreferrer"
        target="_blank"
        style={noDecoration}
      >
        <FooterText>© Creado por: Horta Maximiliano</FooterText>
      </a>
    </FooterContainer>
  );
};

export default Footer;
