import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
import * as React from "react";
import { useSelector } from "react-redux";
import { _saveQuestion } from "../../_DATA";
const LoginWrapper = styled("div")({
  display: "inline-grid",
  gap: "25px",
  width: "300px",
});

const Title = styled("p")({
  color: "black",
  fontWeight: 700,
  fontSize: 25,
  marginBottom: 0,
});

const SubContent = styled("p")({
  color: "gray",
  fontSize: 18,
  textAlign: "center",
});

export default function AddPollComponent({ backToHome }) {
  const [optionOneContent, setOptionOneContent] = React.useState("");
  const [optionTwoContent, setOptionTwoContent] = React.useState("");
  const loggedUser = useSelector((state) => state.loggedInUser);
  const handleSavingQuestion = (optionOne, optionTwo, authorId) => {
    _saveQuestion({
      optionOneText: optionOne, // replace with the actual user ID
      optionTwoText: optionTwo, // replace with the actual question ID
      author: authorId, // replace with the actual answer
    })
      .then((result) => {
        console.log("123", result);
        backToHome();
      })
      .catch((error) => {
        console.error("Error saving question", error);
      });
  };
  return (
    <>
      <Title>Would You Rather</Title>
      <SubContent>Create Your Own Poll</SubContent>
      <LoginWrapper>
        <TextField
          sx={{ backgroundColor: "white" }}
          required
          id="outlined-required"
          label="First option"
          inputProps={{ "data-testid": "option1-input" }}
          value={optionOneContent}
          onChange={(e) => {
            setOptionOneContent(e.target.value);
          }}
        />
        <TextField
          sx={{ backgroundColor: "white" }}
          required
          id="outlined-required"
          label="Second Option"
          inputProps={{ "data-testid": "option2-input" }}
          value={optionTwoContent}
          onChange={(e) => {
            setOptionTwoContent(e.target.value);
          }}
        />
        <Button
          variant="contained"
          // inputProps={{ "data-testid": "option2-input" }}
          data-testid="submit-button"
          sx={{
            backgroundColor: "#1976D2",
            fontWeight: 700,
          }}
          onClick={() => {
            handleSavingQuestion(
              optionOneContent,
              optionTwoContent,
              loggedUser.id
            );
          }}
        >
          Submit
        </Button>
      </LoginWrapper>
    </>
  );
}
