import { ADD_TASK, REMOVE_TASK, UPDATE_TASK } from "./types";

export const addTodos = (todo) => {
  return {
    type: ADD_TASK,
    payload: todo,
  };
};
export const deleteTodos = (id) => {
  return {
    type: REMOVE_TASK,
    payload: id,
  };
};
export const updateTodo = (id, task) => {
  return {
    type: UPDATE_TASK,
    payload: { id, task },
  };
};
