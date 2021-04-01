const initialState = {};
export function authReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN": {
      return { loggedIn: true, userName: action.name, isAdmin: action.isAdmin };
    }
    case "LOGOUT": {
      return { loggedIn: false };
    }
    default:
      return state;
  }
}
