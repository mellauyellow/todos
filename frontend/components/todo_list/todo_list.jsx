import React from 'react';
import TodoListItem from './todo_list_item';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    return (
      <ul>
        {Object.keys(this.props.todos).map(todoId => (
          <TodoListItem key={todoId} title={this.props.todos[todoId].title}/>
        ))}
      </ul>
    );
  }
}

export default TodoList;
