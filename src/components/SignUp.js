import React from "react";
import { TextField, Button, styled } from "@material-ui/core";

const StyleTextField = styled(TextField)({
  backgroundColor: "white",
  borderRadius: "25px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "25px",
    },
  },
});

const TitleSignUp = styled("label")({
  fontFamily: "Arial",
  color: "white",
  fontSize: "x-large",
  textAlign: "center",
});

const Form = styled("form")({
  backgroundColor: "rgba(255,69,0,0.5)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  width: "300px",
  height: "400px",
  padding: "30px",
  float: "right",
  marginTop: "-250px",
  marginRight: "30px",
});

const ButtonStyle = styled(Button)({
  backgroundColor: "DarkOrange",
  borderRadius: "25px",
});

const SignUp = () => {
  return (
    <Form>
      <TitleSignUp>Cadastre-se e receba novidades</TitleSignUp>
      <StyleTextField label="Nome" variant="outlined" color="primary" />
      <StyleTextField label="E-mail" variant="outlined" color="primary" />
      <StyleTextField
        label="Telefone ou Celular"
        variant="outlined"
        color="primary"
      />
      <ButtonStyle color="primary" variant="contained">
        Enviar
      </ButtonStyle>
    </Form>
  );
};

export default SignUp;
