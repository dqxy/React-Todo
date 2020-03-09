import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import './components/Todo.css';

const things = [
  {
    name: 'Learn React',
    id: 1,
    done: false
  },
  {
    name: 'Style Classes',
    id: 2,
    done: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super(); 
    this.state = {
      things, // shorthand for things: things
      name: ''
    };
  }

  toggleDone = clickedItemId => {
    this.setState({
      things: this.state.things.map(item => {
        if (item.id === clickedItemId) {
          return {
            ...item,
            done: !item.done
          };
        } else {
          return item;
        }
      })
    });
  };

  clearDone = () => {
    this.setState({
      things: this.state.things.filter(task => {
        return (!task.done);
      })
    });
  }

  addItem = itemName => {
    // add a new item to the things state
    const newItem = {
      name: itemName,
      id: new Date(),
      done: false
    };
    this.setState({
      things: [...this.state.things, newItem]
    });
  };
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} clearDone={this.clearDone}/>
        <TodoList
          things={this.state.things}
          toggleDone={this.toggleDone}
        />
      </div>
    );
  }
}

export default App;
