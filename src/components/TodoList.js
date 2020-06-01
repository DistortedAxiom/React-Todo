import React from 'react';
import Todo from './Todo';

const TodoList = (props) => (
  <ul>
    {props.taskList.map((el, index) => {
      return (<Todo key={index} task={el}/>);
    })}
  </ul>
);

export default TodoList;
