import {combineReducers} from "redux";

const defaulData = {
   count: 0,
   a: "halo!",
   property1: {b: 1, c: 'c'}
}

function counter(store = defaulData, action) {
   const {count} = store;
   switch (action.type) {
      case 'INCREMENT':
         return {
            ...store,
            count: count + action.payload
         };
      case 'DECREMENT':
         return {
            ...store,
            count: count - action.payload
         };
      default:
         return store;
   }
}

const todosDefaultStore = {
   todos: []
};

function todosReducer(store = todosDefaultStore, action) {
   switch (action.type) {
      case 'ADD_TODO': {
         const newTodo = action.payload;
         const {todos} = store;

         return {
            todos: [...todos, newTodo]
         };
      }
      case 'REMOVE_TODO': {
         const {id} = action.payload;
         const {todos} = store;

         const index = todos.findIndex(todo => todo.id === id);
         const todosCopy = [...todos];
         todosCopy.splice(index, 1);

         if (index > -1) {
            return {
               todos: todosCopy
            }
         }

         return store;
      }
      default:
         return store;
   }
}

export const createRootReducer = () => {
   return combineReducers({
      counter,
      todosReducer
   })
}
