const initialState = {
  Output: ""
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST_DATA_SUCCESS":
      return { ...state, Output: action.payload };
    default:
      return state;
  }
};
export default Reducer