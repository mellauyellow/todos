import {RECEIVE_TODOS, REQUEST_TODOS, CREATE_TODO} from '../actions/todo_actions';
import {fetchTodos, createTodo} from '../util/todo_api_util';
import {receiveTodos, receiveTodo} from '../actions/todo_actions';

const TodoMiddleware = store => next => action => {

  switch (action.type) {
    case REQUEST_TODOS:
      const success = data => store.dispatch(receiveTodos(data));
      const error = e => console.log(e);
      fetchTodos(success, error);
      break;
    case CREATE_TODO:
      const otherSuccess = data => store.dispatch(receiveTodo(data));
      const otherError = e => console.log(e);
      createTodo(action.todo, otherSuccess, otherError);
      break;
    default:
      next(action);
  }
};

export default TodoMiddleware;
