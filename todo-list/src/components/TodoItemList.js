import React, {Component} from 'react';
import TodoItem from './TodoItem.js';

class TodoItemList extends React.Component {
    render() {
        const {todos, onToggle, onRemove} = this.props;

        return (
            <div>
                <TodoItem text="안녕" />
                <TodoItem text="리액트" />
                <TodoItem text="반가워" />
            </div>
        );
    }
}

export default TodoItemList;