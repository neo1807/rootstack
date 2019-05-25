import React from "react";
import { FiMoreHorizontal, FiChevronDown } from "react-icons/fi";
class TableRow extends React.Component {
  state = {
    showOptions: false,
    disabled: true,
    email: "",
    phone: "",
    source: "",
    status: ""
  };
  toggleOptions = () => {
    this.setState({ showOptions: !this.state.showOptions });
  };
  toggleEdit = () => {
    this.setState({ disabled: !this.state.disabled }, this.toggleOptions());
  };
  handleDelete = () => {
    this.props.deleteSelf(this.props.id);
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  componentDidMount() {
    this.setState({
      email: this.props.email,
      phone: this.props.phone,
      source: this.props.source,
      status: this.props.status
    });
  }
  render() {
    return (
      <tr>
        <td>
          <img
            className="lead-avatar"
            src={this.props.avatar}
            alt={this.props.name + " avatar"}
            width="50px"
          />
          <div className="lead">
            {this.props.name}
            <br />
            <small>Case: {this.props.case}</small>
          </div>
        </td>
        <td className="email">
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            disabled={this.state.disabled}
          />
        </td>
        <td className="phone">
          <input
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
            disabled={this.state.disabled}
          />
        </td>
        <td className="source">
          <select
            className="select"
            value={this.state.source}
            name="source"
            onChange={this.handleChange}
            onBlur={this.handleChange}
            disabled={this.state.disabled}
          >
            <option value="Internet search">Internet search</option>
            <option value="Facebook">Facebook</option>
            <option value="Referral">Referral</option>
          </select>
          <FiChevronDown />
        </td>
        <td className="status">
          <select
            className="select"
            value={this.state.status}
            name="status"
            onChange={this.handleChange}
            onBlur={this.handleChange}
            disabled={this.state.disabled}
          >
            <option value="Lead">Lead</option>
            <option value="Client">Client</option>
            <option value="Prospect">Prospect</option>
          </select>
          <FiChevronDown />
        </td>
        <td className="lead-options">
          <a href="#options" onClick={this.toggleOptions}>
            <FiMoreHorizontal />
          </a>

          <ul
            className={this.state.showOptions ? "dropdown enabled" : "dropdown"}
          >
            <li>
              <a href="#edit" onClick={this.toggleEdit}>
                Editar
              </a>
            </li>
            <li>
              <a href="#delete" onClick={this.handleDelete}>
                Borrar
              </a>
            </li>
          </ul>
        </td>
      </tr>
    );
  }
}
export default TableRow;
