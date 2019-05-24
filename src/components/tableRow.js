import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
const TableRow = props => {
  return (
    <tr>
      <td>
        <img
          className="lead-avatar"
          src={props.avatar}
          alt={props.name + " avatar"}
          width="50px"
        />
        <div className="lead">
          {props.name}
          <br />
          <small>Case: {props.case}</small>
        </div>
      </td>
      <td className="email">{props.email}</td>
      <td>{props.phone}</td>
      <td>
        <select value={props.source}>
          <option value="Internet search">Internet search</option>
          <option value="Facebook">Facebook</option>
          <option value="Referral">Referral</option>
        </select>
      </td>
      <td>
        <select value={props.status}>
          <option value="Lead">Lead</option>
          <option value="Client">Client</option>
          <option value="Prospect">Prospect</option>
        </select>
      </td>
      <td>
        <FiMoreHorizontal />
      </td>
    </tr>
  );
};
export default TableRow;
