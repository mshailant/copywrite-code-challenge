const initialState = {
  allText: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEND_TEXT":
      console.log(action.payload);
      return {
        ...state,
        allText: [...state.allText, action.payload],
      };
    case "REMOVE_RESULT":
      return {
        ...state,
        allText: state.allText.splice(action.payload, 1),
      };
    default:
      return state;
  }
};

export default rootReducer;
