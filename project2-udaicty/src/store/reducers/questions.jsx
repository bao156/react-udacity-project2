import { ADD_LIST_OF_QUESTIONS } from "../actions/questions";

export default function questions(state = "", action) {
  switch (action.type) {
    case ADD_LIST_OF_QUESTIONS:
      return (state = action.questions);
    default:
      return state;
  }
}
