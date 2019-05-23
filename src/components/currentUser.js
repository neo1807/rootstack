import React from "react";
import { FiChevronDown, FiInbox } from "react-icons/fi";

export default class CurrentUser extends React.Component {
  render() {
    return (
      <div className="current-user">
        <div className="inbox">
          <FiInbox />
          <div className="has-emails">1</div>
        </div>
        <div className="settings">
          <a href="/">Pedro Perez</a>
          <FiChevronDown />
          <ul className="has-options">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
      </div>
    );
  }
}
