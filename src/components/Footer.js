import React from "react";
import { styled } from "@material-ui/core";
import face from "../assets/icons/facebook-icon.png";
import youtube from "../assets/icons/youtube-icon.png";
import insta from "../assets/icons/instagram-icon.png";
import twitter from "../assets/icons/twiter-icon.png";

const FooterImgStyle = styled("img")({
  width: "30px",
  height: "30px",
});

const FooterDivSocial = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  width: "300px",
  height: "50px",
});

const FooterMainDivStyle = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "center",
  color: "white",
  width: "100%",
  height: "150px",
  backgroundColor: "DarkRed",
});

const Footer = () => {
  return (
    <>
      <FooterMainDivStyle>
        <FooterDivSocial>
          <a href="facebook.com">
            <FooterImgStyle src={face} alt="Facebook" />
          </a>
          <a href="youtube.com">
            <FooterImgStyle src={youtube} alt="Youtube" />
          </a>
          <a href="instagram.com">
            <FooterImgStyle src={insta} alt="Instagram" />
          </a>
          <a href="twitter.com">
            <FooterImgStyle src={twitter} alt="Twitter" />
          </a>
        </FooterDivSocial>
        <p>
          Lorem ipsum inceptos sagittis sit rhoncus conubia eu conubia et
          senectus eros, scelerisque curabitur viverra leo sed auctor est mi
          eget. nam lobortis per non nostra quam maecenas mattis, risus vehicula
          conubia nunc hendrerit dictumst aliquam himenaeos, adipiscing
          condimentum erat posuere consequat taciti tincidunt, urna mauris
          aptent ipsum consectetur feugiat.{" "}
        </p>
      </FooterMainDivStyle>
    </>
  );
};

export default Footer;
