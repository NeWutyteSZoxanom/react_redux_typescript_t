import { TodoAction, TodoActionsTypes, TodoState } from '../../types/todo';

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
  page: 1,
  limit: 10,
};

export const todoReduser = (state = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TodoActionsTypes.FETCH_TODOS:
      return { ...state, loading: true };
    case TodoActionsTypes.FETCH_TODOS_SUCCESS:
      return { ...state, todos: action.payload, loading: false };
    case TodoActionsTypes.FETCH_TODOS_ERROR:
      return { ...state, error: action.payload, loading: false };
    case TodoActionsTypes.SET_TODO_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
