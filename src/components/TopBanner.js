import React from "react";
import { styled } from "@material-ui/core";

const StyledBanner = styled("div")({
  width: "100%",
  height: "50px",
  backgroundColor: "grey",
  display: "flex",
  alignItems: "center",
});

const Label = styled("label")({
  fontFamily: "Arial",
  fontSize: "small",
  color: "white",
  marginLeft: "300px",
});

const TopBanner = () => {
  return (
    <StyledBanner>
      <Label>Bicycle Shop</Label>
      <Label>
        Contatar pelo Telefone (xx) XXXX-XXXX ou pelo WhatsApp (xx) XXXX-XXXX
      </Label>
    </StyledBanner>
  );
};

export default TopBanner;
