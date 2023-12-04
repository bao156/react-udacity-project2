import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
import * as React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../logo.svg";
import { handleAddingLoggedInUser } from "../store/actions/loggedInUser";
import { fetchAllUser } from "../store/actions/users";

const LoginWrapper = styled("div")({
  display: "inline-grid",
  gap: "25px",
  width: "300px",
});

const Title = styled("p")({
  color: "black",
  fontWeight: 700,
  fontSize: 25,
});

const SubTitle = styled("p")({
  color: "black",
  marginBottom: 20,
  fontWeight: 700,
  fontSize: 20,
});
const LoginComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const listOfUsers = useSelector((state) => state.users);

  React.useEffect(() => {
    let isMounted = false;
    function getListOfUser() {
      if (!isMounted) {
        dispatch(fetchAllUser());
      }
    }
    getListOfUser();
    return () => {
      isMounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Title>Employee Polls</Title>
      <img src={logo} className="App-logo" alt="logo" />
      <SubTitle>Login</SubTitle>
      <LoginWrapper>
        <TextField
          sx={{ backgroundColor: "white" }}
          required
          id="outlined-required"
          label="Username"
          value={username}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <TextField
          sx={{ backgroundColor: "white" }}
          required
          id="outlined-required"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#1976D2",
            fontWeight: 700,
          }}
          onClick={() => {
            if (listOfUsers[username]?.password === password) {
              dispatch(handleAddingLoggedInUser(listOfUsers[username]));
              navigate("/main");
            }
          }}
        >
          Submit
        </Button>
      </LoginWrapper>
    </>
  );
};
export default connect((state) => ({
  user: state.user,
}))(LoginComponent);
