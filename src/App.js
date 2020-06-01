import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      list: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
      ],
      todo: ''
    };
  }

  addTodo = event => {
    event.preventDefault();

    const newTask = {
      task: this.state.todo,
      id: Date.now(),
      completed: false,
    };

    this.setState({
      list: [...this.state.list, newTask],
      todo: ''
    })

  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  clearTodo = event => {
    event.preventDefault();
    this.setState({
      list: [],
    })
  }

  render() {

    console.log(this.state.list);

    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          taskList={this.state.list}
        />
        <TodoForm
        value={this.state.todo}
        handleChange={this.changeHandler}
        addTodo={this.addTodo}
        clearTodo={this.clearTodo}/>
      </div>
    );
  }
}

export default App;
