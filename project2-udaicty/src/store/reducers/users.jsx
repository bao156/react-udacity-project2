import { ADD_LIST_OF_USERS } from "../actions/users";

export default function users(state = "", action) {
  switch (action.type) {
    case ADD_LIST_OF_USERS:
      return (state = action.users);
    // case REMOVE_TODO:
    //   return state.filter((todo) => todo.id !== action.id);
    // case TOGGLE_TODO:
    //   return state.map((todo) =>
    //     todo.id !== action.id
    //       ? todo
    //       : Object.assign({}, todo, { complete: !todo.complete })
    //   );
    default:
      return state;
  }
}
