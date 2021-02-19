const initalState = [
  {
    todo: "Initial Todo",
    id: 1,
  },
];

// REDUCER

const todoReducer = (state = initalState, actions) => {
  switch (actions.type) {
    case "ADD":
      return {
        ...state,
        todo: actions.payload,
      };

    case "DEL":
      return {
        ...state,
        todo: "DELETED",
      };

    default:
      return state;
  }
};

export default todoReducer;
