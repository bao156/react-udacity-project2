import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import * as React from "react";
import PropTypes from "prop-types";
const PaperWrapper = styled("div")({
  marginTop: "50px",
  backgroundColor: "white",
  border: "1px solid gray",
  width: "300px",
  borderRadius: "5px",
});
const AuthorTitle = styled("p")({
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
export default function QuestionPaper({
  author,
  time,
  id,
  handleShowingDetail,
}) {
  return (
    <PaperWrapper>
      <AuthorTitle>{author}</AuthorTitle>
      <SubContent>{time}</SubContent>
      <Button
        sx={{
          color: "green",
          borderColor: "green",
          width: "85%",
          margin: "20px",
        }}
        variant="outlined"
        onClick={() => handleShowingDetail(id)}
      >
        Show
      </Button>
    </PaperWrapper>
  );
}

QuestionPaper.propTypes = {
  author: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
