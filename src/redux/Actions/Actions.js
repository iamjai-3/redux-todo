// ? SELECTORS
const CREATE = "CREATE_TODO";
const UPDATE = "UPDATE_TODO";
const DELETE = "DELETE_TODO";
const COMPLETED = "COMPLETED_TODO";

// ? ACTIONS
export const createTodo = (addData) => ({ type: CREATE, payload: addData });
export const updateTodo = (updData) => ({ type: UPDATE, payload: updData });
export const deleteTodo = (delData) => ({ type: DELETE, payload: delData });
export const completeTodo = (completeData) => ({
  type: COMPLETED,
  payload: completeData,
});
