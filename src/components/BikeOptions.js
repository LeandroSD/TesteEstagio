import React from "react";
import { styled, Button } from "@material-ui/core";
import pedalando from "../assets/icons/pedalando.png";
import oldSchool from "../assets/icons/old-school.png";
import bikeCross from "../assets/icons/bike-cross.png";
import BMX from "../assets/icons/BMX.png";

const ButtonOptionStyle = styled(Button)({
  borderRadius: "25px",
  backgroundColor: "DarkOrange",
  height: "30px",
  marginTop: "-8px",
});

const ImageAjust = styled("img")({
  width: "90px",
  height: "80px",
});

const DivOptionStyle = styled("div")({
  width: "200px",
  height: "220px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
});

const BikeOptionsDivStyle = styled("div")({
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  width: "100%",
  height: "250px",
  marginTop: "0px",
});

const BikeOptions = () => {
  return (
    <>
      <BikeOptionsDivStyle>
        <DivOptionStyle>
          <ImageAjust src={pedalando} alt="Bikes de passeio" />
          <h5>
            <strong>Bikes de passeio</strong>
          </h5>
          <p>Lorem ipsum senectus sodales cursus aliquet sociosqu.</p>
          <ButtonOptionStyle variant="contained" color="primary">
            Saiba Mais
          </ButtonOptionStyle>
        </DivOptionStyle>
        <DivOptionStyle>
          <ImageAjust src={oldSchool} alt="Bikes Clássicas" />
          <h5>
            <strong>Bikes Clássicas</strong>
          </h5>
          <p>Lorem ipsum senectus sodales cursus aliquet sociosqu.</p>
          <ButtonOptionStyle variant="contained" color="primary">
            Saiba Mais
          </ButtonOptionStyle>
        </DivOptionStyle>
        <DivOptionStyle>
          <ImageAjust src={bikeCross} alt="Bike Cross" />
          <h5>
            <strong>Bike Cross</strong>
          </h5>
          <p>Lorem ipsum senectus sodales cursus aliquet sociosqu.</p>
          <ButtonOptionStyle variant="contained" color="primary">
            Saiba Mais
          </ButtonOptionStyle>
        </DivOptionStyle>
        <DivOptionStyle>
          <ImageAjust src={BMX} alt="BMX" />
          <h5>
            <strong>BMX</strong>
          </h5>
          <p>Lorem ipsum senectus sodales cursus aliquet sociosqu.</p>
          <ButtonOptionStyle variant="contained" color="primary">
            Saiba Mais
          </ButtonOptionStyle>
        </DivOptionStyle>
      </BikeOptionsDivStyle>
    </>
  );
};

export default BikeOptions;
