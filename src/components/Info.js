import React from "react";
import { styled } from "@material-ui/core";
import { Button } from "react-bootstrap";

const Label = styled("label")({
  fontSize: "xx-large",
  width: "300px",
  height: "150px",
  marginLeft: "50px",
  marginTop: "180px",
});

const ButtonKnowMoreStyle = styled(Button)({
  borderRadius: "25px",
  width: "200px",
  marginLeft: "90px",
  marginTop: "20px",
});

const DivStyle = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "300px",
  height: "300px",
});

const Info = () => {
  return (
    <>
      <DivStyle>
        <Label>
          MAIS DE <strong>3 MILHÕES DE CICLISTAS</strong> EM SÃO PAULO
        </Label>
        <ButtonKnowMoreStyle variant="danger">Saiba Mais</ButtonKnowMoreStyle>
      </DivStyle>
    </>
  );
};

export default Info;
