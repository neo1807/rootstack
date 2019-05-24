import React from "react";
import { FiSearch, FiChevronDown, FiPlus } from "react-icons/fi";
export default class Controls extends React.Component {
  render() {
    return (
      <div className="view-header">
        <div className="view-title">
          <h1>Leads</h1>Showing <span>20</span> out of 521 contacts
        </div>
        <div className="view-controls">
          <FiSearch />
          <div className="view-actions">
            <div>
              Type <FiChevronDown />
            </div>
            <div>
              Source <FiChevronDown />
            </div>
            <button onClick={""}>
              <FiPlus /> add contact
            </button>
          </div>
        </div>
      </div>
    );
  }
}
