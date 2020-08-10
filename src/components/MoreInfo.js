import React from "react";
import { styled } from "@material-ui/core";

const MoreInfoMainDivStyle = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  marginTop: "30px",
  width: "100%",
  height: "250px",
  backgroundColor: "white",
});

const MoreInfoListStyle = styled("ul")({
  listStyleType: "none",
  color: "DarkRed",
});

const MoreInfo = () => {
  return (
    <>
      <MoreInfoMainDivStyle>
        <MoreInfoListStyle>
          <li>
            <strong>Lorem Ipsum</strong>
          </li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
        </MoreInfoListStyle>
        <MoreInfoListStyle>
          <li>
            <strong>Lorem Ipsum</strong>
          </li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
        </MoreInfoListStyle>
        <MoreInfoListStyle>
          <li>
            <strong>Lorem Ipsum</strong>
          </li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
        </MoreInfoListStyle>
        <MoreInfoListStyle>
          <li>
            <strong>Lorem Ipsum</strong>
          </li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
        </MoreInfoListStyle>
        <MoreInfoListStyle>
          <li>
            <strong>Lorem Ipsum</strong>
          </li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
        </MoreInfoListStyle>
        <MoreInfoListStyle>
          <li>
            <strong>Lorem Ipsum</strong>
          </li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
        </MoreInfoListStyle>
      </MoreInfoMainDivStyle>
    </>
  );
};

export default MoreInfo;
