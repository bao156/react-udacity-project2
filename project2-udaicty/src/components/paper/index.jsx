import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import * as React from "react";

const PaperWrapper = styled("div")({
  marginTop: "50px",
  backgroundColor: "white",
  border: "1px solid gray",
  width: "300px",
  borderRadius: "5px",
});
const SubTitle = styled("p")({
  color: "black",
  marginBottom: 0,
  textAlign: "center",
  fontWeight: 700,
  fontSize: 20,
});
const SubContent = styled("p")({
  color: "gray",
  fontSize: 12,
  textAlign: "center",
});
export default function PollPaper() {
  return (
    <PaperWrapper>
      <SubTitle>Mirajane</SubTitle>
      <SubContent>10:21PM | 11/23/2021</SubContent>
      <Button
        sx={{
          color: "green",
          borderColor: "green",
          width: "85%",
          margin: "20px",
        }}
        variant="outlined"
      >
        Show
      </Button>
    </PaperWrapper>
  );
}
