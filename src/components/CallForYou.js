import React from "react";
import {
  styled,
  TextField,
  Radio,
  FormControl,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";

const CallForYouMainDiv = styled("div")({
  width: "100%",
  height: "550px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
});

const CallForYouH2Style = styled("h2")({
  color: "white",
});

const CallForYouPStyle = styled("p")({
  color: "white",
});

const CallForYouTextFieldStyle = styled(TextField)({
  backgroundColor: "white",
  borderRadius: "25px",
  width: "300px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "25px",
    },
  },
});

const CallForYouRadioStyle = styled(FormControlLabel)({
  color: "white",
});

const CallForYouInfoDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  textAlign: "center",
  width: "380px",
  height: "400px",
  backgroundColor: "DarkRed",
  marginRight: "70px",
});

const CallForYouLabelStartStyle = styled("label")({
  position: "absolute",
  width: "200px",
  height: "40px",
  marginTop: "-40px",
  marginLeft: "40%",
  paddingTop: "10px",
  textAlign: "center",
  color: "white",
  backgroundColor: "DarkRed",
  borderTopRightRadius: "25px",
  borderTopLeftRadius: "25px",
});

const CallForYouLabelEndStyle = styled("label")({
  width: "100%",
  height: "10px",
  backgroundColor: "DarkRed",
});

const CallForYou = () => {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <CallForYouMainDiv>
        <CallForYouInfoDiv>
          <CallForYouH2Style>Ligamos para você!</CallForYouH2Style>
          <CallForYouPStyle>
            Lorem ipsum senectus sodales cursus aliquet sociosqu.
          </CallForYouPStyle>
          <CallForYouTextFieldStyle label="Nome" variant="outlined" />
          <CallForYouTextFieldStyle label="E-mail" variant="outlined" />
          <CallForYouTextFieldStyle label="Telefone" variant="outlined" />
          <FormControl component="fieldset">
            <RadioGroup row value={value} onChange={handleChange}>
              <CallForYouRadioStyle
                value="female"
                control={<Radio color="default" />}
                label="Lorem"
              />
              <CallForYouRadioStyle
                value="male"
                control={<Radio color="default" />}
                label="Ipsum"
              />
            </RadioGroup>
          </FormControl>
        </CallForYouInfoDiv>
      </CallForYouMainDiv>
      <CallForYouLabelStartStyle>Mais Informações</CallForYouLabelStartStyle>
      <CallForYouLabelEndStyle></CallForYouLabelEndStyle>
    </>
  );
};

export default CallForYou;
