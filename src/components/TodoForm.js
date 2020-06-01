import React from 'react';

const TodoForm = props => {
    return (
        <form onSubmit={props.addTodo}>
            <input
                type="text"
                name="todo"
                value={props.value}
                onChange={props.handleChange}
            />
            <button type="submit">Add Todo</button>
            <button>Clear Completed</button>
        </form>
    )
};

export default TodoForm;
