import React from "react";
import { FiSearch, FiChevronDown, FiPlus } from "react-icons/fi";
export default class Controls extends React.Component {
  state = {
    currentAmount: "10",
    currentCase: "",
    currentSource: ""
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, this.props.filterRows(name, value));
  };
  render() {
    return (
      <div className="view-header">
        <div className="view-title">
          <h1>Leads</h1>Showing
          <select
            className="leads-filter"
            name="currentAmount"
            onChange={this.handleChange}
            onBlur={this.handleChange}
            value={this.state.currentAmount}
          >
            <option value="2">2</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
          <FiChevronDown /> out of 10 contacts
        </div>
        <div className="view-controls">
          <FiSearch />
          <div className="view-actions">
            <div>
              <select
                className="select-filter"
                name="currentCase"
                onChange={this.handleChange}
                onBlur={this.handleChange}
                value={this.state.currentCase}
              >
                <option value="">Type</option>
                <option value="Divorce">Divorce</option>
                <option value="Fraud">Fraud</option>
                <option value="DUI">DUI</option>
                <option value="Tax Evasion">Tax Evasion</option>
                <option value="Assault">Assault</option>
              </select>{" "}
              <FiChevronDown />
            </div>
            <div>
              <select
                className="select-filter"
                name="currentSource"
                onChange={this.handleChange}
                onBlur={this.handleChange}
                value={this.state.currentSource}
              >
                <option value="">Source</option>
                <option value="Internet search">Internet search</option>
                <option value="Facebook">Facebook</option>
                <option value="Referral">Referral</option>
              </select>{" "}
              <FiChevronDown />
            </div>
            <button onClick={this.props.toggleModal}>
              <FiPlus /> add contact
            </button>
          </div>
        </div>
      </div>
    );
  }
}
