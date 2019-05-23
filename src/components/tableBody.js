import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
export default class TableBody extends React.Component {
  render() {
    return (
      <tbody>
        <tr>
          <td>
            <div className="lead-avatar">AJ</div>
            <div className="lead">
              Ángela Jimínez
              <br />
              <small>Case: Evasion</small>
            </div>
          </td>
          <td className="email">MarcoAntonio_Montaez21@gmail.com</td>
          <td>951.702.467</td>
          <td>
            <select>
              <option value="1">Internet search</option>
              <option value="2">Facebook</option>
              <option value="3">Referral</option>
            </select>
          </td>
          <td>
            <select>
              <option value="1">Lead</option>
              <option value="2">Client</option>
              <option value="3">Prospect</option>
            </select>
          </td>
          <td>
            <FiMoreHorizontal />
          </td>
        </tr>
      </tbody>
    );
  }
}
