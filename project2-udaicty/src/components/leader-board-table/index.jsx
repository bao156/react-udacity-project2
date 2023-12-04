import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import ImageAvatars from "../avater";

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
          {/* {rows.map((row) => ( */}
          <TableRow
            key={1}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              <ImageAvatars />
            </TableCell>
            <TableCell component="th" scope="row">
              4
            </TableCell>
            <TableCell component="th" scope="row">
              5
            </TableCell>
          </TableRow>
          {/* ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
