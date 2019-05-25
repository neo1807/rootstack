import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
class TableRow extends React.Component {
  state = {
    showOptions: false
  };
  toggleOptions = () => {
    this.setState({ showOptions: !this.state.showOptions });
  };
  handleDelete = () => {
    this.props.deleteSelf(this.props.id);
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
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
        <td className="email">{this.props.email}</td>
        <td>{this.props.phone}</td>
        <td>
          <select value={this.props.source}>
            <option value="Internet search">Internet search</option>
            <option value="Facebook">Facebook</option>
            <option value="Referral">Referral</option>
          </select>
        </td>
        <td>
          <select value={this.props.status}>
            <option value="Lead">Lead</option>
            <option value="Client">Client</option>
            <option value="Prospect">Prospect</option>
          </select>
        </td>
        <td className="lead-options">
          <a href="#options" onClick={this.toggleOptions}>
            <FiMoreHorizontal />
          </a>

          <ul
            className={
              this.state.showOptions ? "has-options is-enabled" : "has-options"
            }
          >
            <li>
              <a href="/">Editar</a>
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
