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
        <a href="/">Pedro Perez</a>
        <FiChevronDown />
      </div>
    );
  }
}
