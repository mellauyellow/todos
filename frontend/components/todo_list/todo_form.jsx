import React from 'react';

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = null;
  }

  render() {
    return (
      <form>
        <label for='title'>Title:</label>
        <input type="text" id='title'></input>
        <label>Body: <input type='text'></input></label>
        <input type='submit'>
      </form>
    )
  }
}

export default TodoForm;
