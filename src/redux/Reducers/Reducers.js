const initalState = {
  todos: [
    {
      title: "Todo 1",
      id: 1,
      completed: false,
    },
  ],
};

// REDUCER

const todoReducer = (state = initalState, actions) => {
  switch (actions.type) {
    case "CREATE_TODO":
      // actions.payload will receive new created todo object
      return {
        ...state,
        todos: [...state.todos, actions.payload],
      };

    case "DELETE_TODO":
      // actions.payload will receive id of todo.
      const deletedTodo = state.todos.filter(
        (todo) => todo.id !== actions.payload
      );
      return {
        ...state,
        todos: deletedTodo,
      };

    case "UPDATE_TODO":
      // actions.payload will receive updated todo object.
      const updatedTodo = state.todos.filter(
        (todo) => todo.id !== actions.payload
      );
      return {
        ...state,
        todos: updatedTodo,
      };

    case "COMPLETED_TODO":
      // actions.payload will receive id of todo.
      const index = state.todos.findIndex(
        (todo) => todo.id !== actions.payload
      );
      const completedTodo = [...state.todos];
      completedTodo[index].completed = !completedTodo[index].completed;
      return {
        ...state,
        todos: completedTodo,
      };

    default:
      return state;
  }
};

export default todoReducer;
