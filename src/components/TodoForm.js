import React from 'react';

class TodoForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      item: ''
    };
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({
      item: e.target.value
    });
  };

  // class property to submit form
  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.item);
    this.setState({
      item: ''
    });
  };

  render() {
    return (
        <div>
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="item"
          value={this.state.item}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
       <button onClick={()=>this.props.clearDone()}>Clear Completed</button></div>
    );
  }
}

export default TodoForm;
