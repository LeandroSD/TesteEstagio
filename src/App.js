import React from "react";
import TopBanner from "./components/TopBanner";
import SignUp from "./components/SignUp";
import { styled } from "@material-ui/core";
import image1 from "./assets/images/image1.jpg";
import image6 from "./assets/images/image6.jpg";
import image7 from "./assets/images/image7.jpg";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Info from "./components/Info";
import BannerBottom from "./components/BannerBottom";
import BikeOptions from "./components/BikeOptions";
import BuyBike from "./components/BuyBike";
import CarouselDiv from "./components/CarouselDiv";
import CallForYou from "./components/CallForYou";
import MoreInfo from "./components/MoreInfo";
import Footer from "./components/Footer";

const FirstScreen = styled("div")({
  backgroundImage: `url(${image6})`,
  backgroundSize: "100% 550px",
  width: "100%",
  height: "550px",
});

const SecondScreen = styled("div")({
  backgroundImage: `url(${image1})`,
  backgroundSize: "100% 550px",
  width: "100%",
  height: "900px",
  marginTop: "-10px",
});

const FinalScreen = styled("div")({
  backgroundImage: `url(${image7})`,
  backgroundSize: "100% 550px",
  width: "100%",
  height: "550px",
});
function App() {
  //const [name, setName] = useState("");

  //const handleChange = (event) => {
  //setName(event.target.value);
  //};

  return (
    <>
      <TopBanner />

      <FirstScreen>
        <NavBar></NavBar>
        <Info />
        <SignUp />
      </FirstScreen>

      <BannerBottom />

      <SecondScreen>
        <BikeOptions></BikeOptions>
        <BuyBike></BuyBike>
        <CarouselDiv />
      </SecondScreen>

      <FinalScreen>
        <CallForYou />
      </FinalScreen>

      <MoreInfo />

      <Footer />
    </>
  );
}

export default App;
