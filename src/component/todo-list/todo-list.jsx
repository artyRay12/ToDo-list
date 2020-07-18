import React from "react";
import ListItem from "./todo-list-item/todo-list-item";
import "./todo-list.css";

const TodoList = ({ todos, onDeleted, onToggleDone, onToggleImportant }) => {
    const elements = todos.map((item) => {
        const { id, ...propsItem } = item;

        return (
            <li key={id} className="list-group-item todo-list-item">
                <ListItem
                    {...propsItem}
                    onDeleted={() => onDeleted(id)}
                    onToggleDone={() => onToggleDone(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                />
            </li>
        );
    });

    return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
