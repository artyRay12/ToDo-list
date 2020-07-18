import React, { Component } from "react";

export default class Header extends Component {
    render() {
        const {doneCounter, toDo} = this.props;

        return (
            <div className="d-flex">
                <h1 className="display-3"> ToDo List</h1>
                <div className="d-flex">
                <span>{toDo}</span>
                <span>{doneCounter}</span>
                </div>
            </div>
        );
    }
}
