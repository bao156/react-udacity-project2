import { _getUsers } from "../../_DATA";

export const ADD_LIST_OF_USERS = "ADD_LIST_OF_USERS";

function addListOfUsers(users) {
  return {
    type: ADD_LIST_OF_USERS,
    users,
  };
}

export function fetchAllUser() {
  return (dispatch) => {
    _getUsers().then((users) => {
      dispatch(addListOfUsers(users));
    });
  };
}
