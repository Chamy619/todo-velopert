import React, {Component} from 'react';
import TodoItem from './TodoItem.js';

class TodoItemList extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const {todos, onToggle, onRemove} = this.props;

        const todoList = todos.map(({id, text, checked}) => {
            return (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                />
            )
            
        });

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;