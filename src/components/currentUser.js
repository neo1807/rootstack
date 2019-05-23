import React from "react";
import { FiChevronDown, FiInbox } from "react-icons/fi";

export default class CurrentUser extends React.Component {
  render() {
    return (
      <div className="current-user">
        <div className="inbox">
          <a href="/">
            <FiInbox />
          </a>
          <div className="has-emails">1</div>
        </div>
        <div className="settings">
          <a href="/">Pedro Perez</a>
          <FiChevronDown />
          <ul className="has-options">
            <li>
              <a href="/">Link 1</a>
            </li>
            <li>
              <a href="/">Link 2</a>
            </li>
            <li>
              <a href="/">Link 3</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
