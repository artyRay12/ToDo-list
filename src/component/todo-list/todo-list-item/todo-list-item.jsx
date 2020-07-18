import React, { Component } from "react";
import "./todo-list-item.css";
import { TrashIcon, WarningIcon } from "./Icons";

export default class TodoListItem extends Component {
    render() {
        const {
            value,
            onDeleted,
            done,
            important,
            onToggleImportant,
            onToggleDone,
        } = this.props;
        let oddClasses = "";

        done && (oddClasses += " done");
        important && (oddClasses += " important");

        return (
            <div className="list-item-content">
                <span
                    className={`${
                        important && "strong"
                    } list-item-value ${oddClasses}`}
                    onClick={onToggleDone}
                >
                    {value}
                </span>

                <div className="list-item-btns">
                    <button
                        type="btn"
                        class="btn btn-sm btn-outline-info del-btb"
                        onClick={onDeleted}
                    >
                        <TrashIcon />
                    </button>
                    <button
                        type="button"
                        class="btn btn-sm btn-outline-info"
                        onClick={onToggleImportant}
                    >
                        <WarningIcon />
                    </button>
                </div>
            </div>
        );
    }
}
