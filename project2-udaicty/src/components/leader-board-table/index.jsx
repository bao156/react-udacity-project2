import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
    fontWeight: 700,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function LeaderBoard() {
  const [users, setUsers] = React.useState([]);
  const listOfUsers = useSelector((state) => state.users);
  const listOfQuestions = useSelector((state) => state.questions);
  const countQuestionsBelongAuthor = (questions, authorId) => {
    const list = questions.filter((question) => {
      return question.author === authorId;
    });
    return list.length;
  };
  React.useEffect(() => {
    let isMounted = false;
    function getUsers() {
      if (!isMounted && listOfUsers && users.length < 1) {
        setUsers(Object.values(listOfUsers));
      }
    }
    getUsers();
    return () => {
      isMounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listOfUsers, users]);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            <TableCell>User</TableCell>
            <TableCell>Answered</TableCell>
            <TableCell>Created</TableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {users.length > 0 &&
            users.map((user) => {
              return (
                <TableRow
                  key={user.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ display: "flex", justifyContent: "left" }}
                    >
                      <Avatar
                        alt="avatar"
                        src={user.avatarURL}
                        sx={{ width: 50, height: 50 }}
                      />
                      <Typography>{user.name}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {Object.values(user.answers).length}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {countQuestionsBelongAuthor(listOfQuestions, user.id)}
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
