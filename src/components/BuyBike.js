import React from "react";
import { styled, TextField } from "@material-ui/core";
import { Form } from "react-bootstrap";

const BuyBikeTextFieldStyle = styled(TextField)({
  backgroundColor: "white",
  borderRadius: "25px",
  marginTop: "3px",
  marginBottom: "3px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "25px",
    },
  },
});

const BuyBikeFormStyle = styled(Form)({
  display: "flex",
  flexDirection: "column",
  width: "280px",
});

const BuyBikeDivStyle = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  width: "100%",
  height: "180px",
});

const BuyDiv = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  paddingLeft: "30px",
  flexDirection: "column",
  justifyContent: "space-around",
  width: "650px",
  height: "135px",
  backgroundColor: "DarkRed",
  marginRight: "30px",
  color: "white",
});

const BuyBike = () => {
  return (
    <>
      <BuyBikeDivStyle>
        <BuyDiv>
          <h3>
            QUER COMPRAR UMA<br></br>
            BIKE PARA TRILHAS?
          </h3>
          <h6>Faça uma cotação via WhatsApp (24h)</h6>
          <BuyBikeFormStyle>
            <BuyBikeTextFieldStyle label="Nome" variant="outlined" />
            <BuyBikeTextFieldStyle
              label="Celular (WhatsApp)"
              variant="outlined"
            />
          </BuyBikeFormStyle>
        </BuyDiv>
      </BuyBikeDivStyle>
    </>
  );
};

export default BuyBike;
