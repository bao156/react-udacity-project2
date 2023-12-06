import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import PropTypes from "prop-types";
import * as React from "react";
import QuestionPaper from "../question-paper";

export default function QuestionsBoard({
  titleOfBoard,
  listOfQuestions,
  handleShowingDetail,
}) {
  return (
    <Paper sx={{ width: "100%", margin: "30px" }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                colSpan={5}
                style={{ fontSize: "22px", fontWeight: 700 }}
              >
                {titleOfBoard}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow colSpan={5} sx={{ display: "flex" }}>
              {listOfQuestions?.map((question) => {
                return (
                  <TableCell key={question.id}>
                    <QuestionPaper
                      author={question.author}
                      time={new Date(question.timestamp).toLocaleString()}
                      id={question.id}
                      handleShowingDetail={handleShowingDetail}
                    />
                  </TableCell>
                );
              })}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

QuestionsBoard.propTypes = {
  listOfQuestions: PropTypes.array,
  titleOfBoard: PropTypes.string,
};
