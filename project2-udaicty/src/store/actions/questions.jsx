import { _getQuestions } from "../../_DATA";

export const ADD_LIST_OF_QUESTIONS = "ADD_LIST_OF_QUESTIONS";

function addListOfQuestions(questions) {
  return {
    type: ADD_LIST_OF_QUESTIONS,
    questions,
  };
}

export function fetchAllQuestions() {
  return (dispatch) => {
    _getQuestions().then((questions) => {
      dispatch(addListOfQuestions(Object.values(questions)));
    });
  };
}
