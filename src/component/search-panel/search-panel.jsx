import React, { Component } from "react";
import "./search-panel.css";

class SearchPanel extends Component {
    state = {
        term: "",
    };

    changeTerm = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.termUpdate(term);
        
    };

    render() {
        return (
            <input
                className="search"
                type="text"
                placeholder="search"
                onChange={this.changeTerm}
                value={this.state.term}
            />
        );
    }
}

export default SearchPanel;
