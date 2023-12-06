import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import * as React from "react";

const OptionWrapper = styled("div")({
  marginTop: "25px",
  fontSize: 18,
  marginBottom: 0,
  border: "1px solid gray",
  display: "flex",
  padding: 10,
});
const StyledContent = styled("p")({
  color: "black",
  fontSize: 15,
  marginBottom: 0,
  textAlign: "left",
});

export default function QuestionOption({ content, handleSaveQuestionAnswer }) {
  return (
    <OptionWrapper>
      <StyledContent>{content}</StyledContent>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#1976D2",
          fontWeight: 700,
        }}
        onClick={handleSaveQuestionAnswer}
      >
        Click
      </Button>
    </OptionWrapper>
  );
}
