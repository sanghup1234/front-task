import produce from "immer";
import { createAction } from "redux-actions";

const CREATE_TODO = "todo/CREATE";
const UPDATE_TODO = "todo/UPDATE";
const TOGGLE_TODO = "todo/TOGGLE";
const DELETE_TODO = "todo/DELETE";

export const createTodo = createAction(CREATE_TODO);
export const updateTodo = createAction(UPDATE_TODO);
export const toggleTodo = createAction(TOGGLE_TODO);
export const deleteTodo = createAction(DELETE_TODO);

const initialState = {
  todos: [
    { title: "이거 해야지", checked: false },
    { title: "숙제하기", checked: true }
  ]
};

const reducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case CREATE_TODO:
        draft.todos.push({ 
          title: action.payload.title,
          checked: false,
        });
        
        return draft;

      case UPDATE_TODO:
        draft.todos[action.payload.idx].title = action.payload.title;

        return draft;

      case TOGGLE_TODO:
        draft.todos[action.payload.idx].checked = !draft.todos[action.payload.idx].checked;

        return draft;

      case DELETE_TODO:
        draft.todos.splice(action.payload.idx, 1);

        return draft;
    }
  });
};

export default reducer;
