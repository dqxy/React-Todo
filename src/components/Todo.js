import React from 'react';

const Todo = props => {
  return (
    <div
      onClick={() => props.toggleDone(props.item.id)}
      className={`item${props.item.done ? ' done' : ''}`}
    >
      <p>{props.item.name}</p>
    </div>
  );
};

export default Todo;
