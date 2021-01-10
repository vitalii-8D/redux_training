import {INCREMENT,DECREMENT,ADD_TODO,REMOVE_TODO} from "../action-types";

export const inc = () => {
   return {
      type: INCREMENT,
      payload: 2
   }
}

export const dec = () => {
   return {
      type: DECREMENT,
      payload: 2
   }
}

// Todos
export const addTodo = (todo) => {
   return {
      type: ADD_TODO,
      payload: todo
   }
}

export const removeTodo = (todo) => {
   return {
      type: REMOVE_TODO,
      payload: todo
   }
}
