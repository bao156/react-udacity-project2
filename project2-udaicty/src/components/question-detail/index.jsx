import { styled } from "@mui/system";
import * as React from "react";
import { useSelector } from "react-redux";
import { _saveQuestionAnswer } from "../../_DATA";
import QuestionOption from "../question-option";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useNavigate, useParams } from "react-router-dom";
import { HOME_VALUE } from "../../pages/main";
import AlertDialogSlide from "../dialog";

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
const OPTION_VALUE_1 = "optionOne";
const OPTION_VALUE_2 = "optionTwo";

export default function QuestionDetails() {
  const { question_id } = useParams();
  const loggedUser = useSelector((state) => state.loggedInUser);
  const listOfUsers = useSelector((state) => state.users);
  const listOfQuestion = useSelector((state) => state.questions);
  const navigate = useNavigate();
  const [isNotFound, setIsNotFound] = React.useState(false);
  const [question, setQuestion] = React.useState(false);

  const handleSaveQuestionAnswer = (answer) => {
    _saveQuestionAnswer({
      authedUser: loggedUser.id, // replace with the actual user ID
      qid: question.id, // replace with the actual question ID
      answer: answer, // replace with the actual answer
    })
      .then((result) => {
        console.log("Question answer saved successfully:", result);
        navigate(HOME_VALUE);
      })
      .catch((error) => {
        console.error("Error saving question answer:", error);
      });
  };

  React.useEffect(() => {
    if (listOfQuestion) {
      const value = listOfQuestion.find((question) => {
        return question.id === question_id;
      });
      setQuestion(value);
      if (!value) {
        setIsNotFound(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return !isNotFound && question ? (
    <>
      <Title> Poll by {question.author}</Title>
      <Stack
        direction="row"
        spacing={2}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Avatar
          alt="avatar"
          src={listOfUsers[question.author].avatarURL}
          sx={{ width: 106, height: 106 }}
        />
      </Stack>
      <Title>Would You Rather</Title>
      <LoginWrapper>
        <QuestionOption
          content={question.optionOne.text}
          handleSaveQuestionAnswer={() =>
            handleSaveQuestionAnswer(OPTION_VALUE_1)
          }
        />
        <QuestionOption
          content={question.optionTwo.text}
          handleSaveQuestionAnswer={() =>
            handleSaveQuestionAnswer(OPTION_VALUE_2)
          }
        />
      </LoginWrapper>
    </>
  ) : (
    <AlertDialogSlide
      open={isNotFound !== true}
      handleClose={() => {
        navigate("/login");
      }}
      content={"You should have to login first and try again "}
    />
  );
}
