import { ADD_LIST_OF_USERS } from "../actions/users";

export default function users(state = "", action) {
  switch (action.type) {
    case ADD_LIST_OF_USERS:
      return (state = action.users);
    default:
      return state;
  }
}
