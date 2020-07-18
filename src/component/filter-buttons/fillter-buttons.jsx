import React, { Component } from "react";
import "./filter-buttons.css";

export default class FilterButtons extends Component {

    buttonsInfo = [{ filter: "All" }, { filter: "Active" }, { filter: "Done" }];

    render() {
        const buttons = this.buttonsInfo.map((item) => {
            return (
                <button
                    type="btn"
                    key={item.filter}
                    data-key={item.filter}
                    onClick={this.props.updateFilter}
                    className={`btn filter-btn ${
                        item.filter == this.props.filter
                            ? "btn-info"
                            : "btn-outline-info"
                    }`}
                >
                    {item.filter}
                </button>
            );
        });

        return <div className="btn-group buttons-wrapper">{buttons}</div>;
    }
}
