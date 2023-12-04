export const ADD_LOGGED_IN_USER = "ADD_LOGGED_IN_USER";
export const AUTHENTICATE_USER = "AUTHENTICATE_USER";

function addLoggedInUser(loggedInUser) {
  return {
    type: ADD_LOGGED_IN_USER,
    payload: loggedInUser,
  };
}

export function handleAddingLoggedInUser(user) {
  return (dispatch) => {
    dispatch(addLoggedInUser(user));
  };
}
