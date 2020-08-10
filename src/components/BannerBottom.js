import React from "react";
import { styled } from "@material-ui/core";

const Label = styled("label")({
  backgroundColor: "black",
  width: "100%",
  height: "50px",
  fontSize: "large",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const BannerBottom = () => {
  return (
    <>
      <Label>SAIBA TUDO SOBRE O MUNDO DAS BIKES</Label>
    </>
  );
};

export default BannerBottom;
