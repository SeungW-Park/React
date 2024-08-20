let initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  console.log("action:", action);
  if (action.type === "INCREMENT") {
    return { ...state, count: state.count + action.payload.num };
  } else if (action.type === "DECREMENT") {
    return { ...state, count: state.count - action.payload.num };
  } else if (action.type === "MAKE0") {
    return { ...state, count: 0 };
  }
  return { ...state };
}

export default reducer;
