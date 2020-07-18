import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import TodoList from "./component/todo-list/todo-list";
import Header from "./component/app-header/app-haader";
import SearchPanel from "./component/search-panel/search-panel";
import Buttons from "./component/filter-buttons/fillter-buttons";
import AddItemBtn from "./component/add-item/add-item";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id == id);
            return {
                todoData: [
                    ...todoData.slice(0, idx),
                    ...todoData.slice(idx + 1),
                ],
            };
        });
    };

    maxId = 100;
    addItem = (message) => {
        debugger;
        this.setState(({ todoData }) => {
            return {
                todoData: [
                    ...todoData,
                    {
                        id: this.maxId++,
                        value: message,
                        important: false,
                        done: false,
                    },
                ],
            };
        });
    };

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id == id);

            const newarr = [...todoData];
            newarr[idx].important = !todoData[idx].important;

            return {
                todoData: [...newarr],
            };
        });
    };

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id == id);

            const newarr = [...todoData];
            newarr[idx].done = !todoData[idx].done;

            return {
                todoData: [...newarr],
            };
        });
    };

    search = (items, term) =>
        items.filter((item) => item.value.indexOf(term) != -1);

    termUpdate = (newTerm) => {
        this.setState({
            term: newTerm,
        });
    };

    updateFilter = (e) => {
        this.setState({
            filter: e.target.attributes.getNamedItem("data-key").value,
        });
    };

    filter(items, filter) {
        switch (filter) {
            case "All":
                return items;
            case "Active":
                return items.filter((item) => !item.done);
            case "Done":
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }

    state = {
        todoData: [
            { id: 1, value: "Drink Coffe", important: false, done: false },
            { id: 2, value: "Make Awesome App", important: true, done: false },
            { id: 3, value: "Have a lunch", important: false, done: false },
        ],
        term: "",
        filter: "Active",
    };

    render() {
        const doneCounter = this.state.todoData.reduce(
            (a, el) => (el.done ? ++a : a),
            0
        );

        const visibleItems = this.filter(
            this.search(this.state.todoData, this.state.term),
            this.state.filter
        );

        return (
            <div className="container app">
                <Header
                    doneCounter={doneCounter}
                    toDo={+this.state.todoData.length - +doneCounter}
                />
                <div className="control-panel">
                    <SearchPanel termUpdate={this.termUpdate} />
                    <Buttons
                        filter={this.state.filter}
                        updateFilter={this.updateFilter}
                    />
                </div>
                <TodoList
                    todos={visibleItems}
                    onDeleted={(id) => this.deleteItem(id)}
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant}
                />
                <AddItemBtn addItem={this.addItem} />
            </div>
        );
    }
}
