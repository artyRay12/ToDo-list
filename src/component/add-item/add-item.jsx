import React, { Component } from "react";
import './add-item.css'

export default class AddItemBtn extends Component {
    state = {
        value: "",
    };

    onValueChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.value);
        this.setState({
            value: ''
        })
    };

    render() {
        return (
            <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
                <input
                    type="text"
                    className="add-item-input"
                    onChange={this.onValueChange}
                    placeholder="type new tusk"
                    value={this.state.value}
                />
                <button type="submit" class="btn btn-outline-secondary">
                    add
                </button>
            </form>
        );
    }
}
