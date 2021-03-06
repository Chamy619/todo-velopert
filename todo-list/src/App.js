import React, {Component} from 'react';
import TodoListTemplate from './components/TodoListTemplate.js';
import Form from './components/Form.js';
import TodoItemList from './components/TodoItemList.js';

class App extends React.Component {
  id = 3;

  state = {
    input: '',
    todos: [
      {id: 0, text: ' 리액트 소개', checked: false},
      {id: 1, text: ' 리액트 소개', checked: true},
      {id: 2, text: ' 리액트 소개', checked: false},
    ]
  }

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  }

  handleCreate = () => {
    const {input, todos} = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = id => {
    const {todos} = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    }

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = id => {
    const {todos} = this.state;

    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    const {input, todos} = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

    return (
      <TodoListTemplate form={
        <Form 
          value={input} 
          onChange={handleChange}
          onCreate={handleCreate}
          onKeyPress={handleKeyPress}
        />}>
        <TodoItemList 
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </TodoListTemplate>
    );
  }
}

export default App;
