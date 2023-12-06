import { ADD_LOGGED_IN_USER } from "../actions/loggedInUser";

export default function loggedInUser(state = "", action) {
  switch (action.type) {
    case ADD_LOGGED_IN_USER:
      return (state = action.payload);
    default:
      return state;
  }
}
