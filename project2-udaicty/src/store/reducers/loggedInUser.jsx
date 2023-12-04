import { ADD_LOGGED_IN_USER } from "../actions/loggedInUser";

export default function loggedInUser(state = "", action) {
  switch (action.type) {
    case ADD_LOGGED_IN_USER:
      return (state = action.payload);
    // case REMOVE_TODO:
    //   return state.filter((todo) => todo.id !== action.id);
    // case TOGGLE_TODO:
    //   return state.map((todo) =>
    //     todo.id !== action.id
    //       ? todo
    //       : Object.assign({}, todo, { complete: !todo.complete })
    //   );
    // case RECEIVE_DATA:
    //   return action.user;
    default:
      return state;
  }
}
