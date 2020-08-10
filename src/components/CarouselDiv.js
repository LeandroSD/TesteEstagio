import React from "react";
import Carousel from "react-elastic-carousel";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
import image5 from "../assets/images/image5.jpg";
import { styled } from "@material-ui/core";
import { Button } from "react-bootstrap";

const CarouselStyle = styled(Carousel)({
  backgroundColor: "white",
  marginTop: "-8px",
  height: "700px",
});

const CarouselH1Style = styled("h1")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "DarkRed",
  height: "100px",
  backgroundColor: "white",
});

const CarouselButtonStyle = styled(Button)({
  borderRadius: "15px",
});

const CarouselDivStyle = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "250px",
  height: "300px",
  textAlign: "center",
  marginLeft: "3px",
  marginRight: "3px",
  borderRadius: "25px",
  borderStyle: "outset",
});

const ImageStyle = styled("img")({
  width: "250px",
  height: "130px",
  marginTop: "-29px",
  marginBottom: "3px",
  borderTopLeftRadius: "25px",
  borderTopRightRadius: "25px",
});

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Item = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const CarouselDiv = () => {
  return (
    <>
      <CarouselH1Style>Trilhas e Espaços Fechados</CarouselH1Style>
      <div className="App">
        <CarouselStyle breakPoints={breakPoints}>
          <Item>
            <CarouselDivStyle>
              <ImageStyle src={image2} alt="Cidade" />
              <h4>Cidade</h4>
              <p>Lorem ipsum senectus sodales cursus aliquet sociosqu.</p>
              <CarouselButtonStyle variant="danger">
                Conheça os planos
              </CarouselButtonStyle>
            </CarouselDivStyle>
          </Item>
          <Item>
            <CarouselDivStyle>
              <ImageStyle src={image3} alt="Indoor" />
              <h4>Indoor</h4>
              <p>Lorem ipsum senectus sodales cursus aliquet sociosqu.</p>
              <CarouselButtonStyle variant="danger">
                Conheça os planos
              </CarouselButtonStyle>
            </CarouselDivStyle>
          </Item>
          <Item>
            <CarouselDivStyle>
              <ImageStyle src={image4} alt="Montanha" />
              <h4>Montanha</h4>
              <p>Lorem ipsum senectus sodales cursus aliquet sociosqu.</p>
              <CarouselButtonStyle variant="danger">
                Conheça os planos
              </CarouselButtonStyle>
            </CarouselDivStyle>
          </Item>
          <Item>
            <CarouselDivStyle>
              <ImageStyle src={image5} alt="BMX" />
              <h4>BMX</h4>
              <p>Lorem ipsum senectus sodales cursus aliquet sociosqu.</p>
              <CarouselButtonStyle variant="danger">
                Conheça os planos
              </CarouselButtonStyle>
            </CarouselDivStyle>
          </Item>
        </CarouselStyle>
      </div>
    </>
  );
};

export default CarouselDiv;
