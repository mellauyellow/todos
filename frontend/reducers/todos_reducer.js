import { merge } from 'lodash';
// import React from 'react';
import {RECEIVE_TODOS, REQUEST_TODOS, RECEIVE_TODO} from '../actions/todo_actions';

const defaultState = {};

const TodosReducer = (state = defaultState, action) => {
  // Object.freeze(state);
  switch (action.type) {
    // case REQUEST_TODOS:
    //
    case RECEIVE_TODOS:
      let newState = {};
      action.todos.forEach(todo => {newState[todo.id] = todo;});
      return newState;
    case RECEIVE_TODO:
      let otherNewState = merge({}, state);
      otherNewState[action.todo.id] = action.todo;
      return otherNewState;
    default:
      return state;

  }
};

export default TodosReducer;
