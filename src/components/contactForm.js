import React, { Component } from "react";

class ContactForm extends Component {
  state = {
    id: 20,
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/andrewcohen/128.jpg",
    name: "",
    email: "",
    phone: "",
    source: "",
    status: "",
    case: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = () => {
    event.preventDefault();
    this.props.addNewContact(this.state);
    this.setState(
      { name: "", email: "", phone: "", source: "", status: "", case: "" },
      this.props.closeModal
    );
  };
  render() {
    return (
      <form className="contact-form" onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          Full Name
          <input
            id="name"
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="Full Name"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="text"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            placeholder="Email"
          />
        </label>
        <label htmlFor="phone">
          Phone
          <input
            id="phone"
            type="text"
            name="phone"
            onChange={this.handleChange}
            value={this.state.phone}
            placeholder="Phone"
          />
        </label>
        <label htmlFor="source">
          Source
          <select
            id="source"
            name="source"
            value={this.state.source}
            onChange={this.handleChange}
            onBlur={this.handleChange}
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
            name="case"
            value={this.state.case}
            onChange={this.handleChange}
            onBlur={this.handleChange}
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
            name="status"
            value={this.state.status}
            onChange={this.handleChange}
            onBlur={this.handleChange}
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
