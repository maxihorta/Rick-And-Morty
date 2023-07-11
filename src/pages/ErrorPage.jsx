import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../styles/Button";
import { Alert, ErrorContainer } from "../styles/ErrorPageStyles";
const Error404 = () => {
  const noDecoration = { textDecoration: "none", color: "inherit" };
  return (
    <ErrorContainer>
      <Alert>Ocurrió un error al cargar la página.</Alert>
      <Button>
        <Link to="/home" style={noDecoration}>
          Regresar al Home
        </Link>
      </Button>
    </ErrorContainer>
  );
};

export default Error404;
