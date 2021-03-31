const initialState = {};
export function spaceXReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ROCKETS": {
      return { ...state, rockets: action.rockets };
    }
    case "ADD_CAPSULES": {
      return { ...state, capsules: action.capsules };
    }
    default:
      return state;
    // other cases
  }
}
