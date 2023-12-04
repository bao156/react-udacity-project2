import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
import * as React from "react";
import { useNavigate } from "react-router-dom";
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

export default function AddPollComponent() {
  const navigate = useNavigate();
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
        />
        <TextField
          sx={{ backgroundColor: "white" }}
          required
          id="outlined-required"
          label="Second Option"
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#1976D2",
            fontWeight: 700,
          }}
          onClick={() => navigate("/main")}
        >
          Submit
        </Button>
      </LoginWrapper>
    </>
  );
}
