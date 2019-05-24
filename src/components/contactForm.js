import React, { Component } from "react";

class ContactForm extends Component {
  state = {
    fullName: "",
    email: "",
    phone: "",
    source: "",
    status: "",
    case: ""
  };
  handleNameChange = event => {
    this.setState({
      fullName: event.target.value
    });
  };
  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    });
  };
  handlePhoneChange = event => {
    this.setState({
      phone: event.target.value
    });
  };
  handleSourceChange = event => {
    this.setState({
      source: event.target.value
    });
  };
  handleStatusChange = event => {
    this.setState({
      status: event.target.value
    });
  };
  handleCaseChange = event => {
    this.setState({
      case: event.target.value
    });
  };
  render() {
    return (
      <form className="contact-form">
        <label htmlFor="fullName">
          Full Name
          <input
            id="fullName"
            onChange={this.handleNameChange}
            value={this.state.fullName}
            placeholder="Full Name"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            id="email"
            onChange={this.handleEmailChange}
            value={this.state.email}
            placeholder="Email"
          />
        </label>
        <label htmlFor="phone">
          Phone
          <input
            id="phone"
            onChange={this.handlePhoneChange}
            value={this.state.phone}
            placeholder="Phone"
          />
        </label>
        <label htmlFor="source">
          Source
          <select
            id="source"
            value={this.state.source}
            onChange={this.handleSourceChange}
            onBlur={this.handleSourceChange}
          >
            <option />
            <option>Internet search</option>
            <option>Facebook</option>
            <option>Referral</option>
          </select>
        </label>
        <label htmlFor="case">
          Case
          <select
            id="case"
            value={this.state.case}
            onChange={this.handleCaseChange}
            onBlur={this.handleCaseeChange}
          >
            <option />
            <option>Divorce</option>
            <option>Fraud</option>
            <option>DUI</option>
            <option>Tax Evasion</option>
            <option>Assault</option>
          </select>
        </label>
        <label htmlFor="status">
          Status
          <select
            id="status"
            value={this.state.status}
            onChange={this.handleStatusChange}
            onBlur={this.handleStatusChange}
          >
            <option />
            <option>Lead</option>
            <option>Client</option>
            <option>Prospect</option>
          </select>
        </label>
        <button>Submit</button>
      </form>
    );
  }
}

export default ContactForm;
