import React from "react";
import { FiChevronDown, FiInbox } from "react-icons/fi";
import { Consumer } from "../leadContext";

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
        <Consumer>
          {context => (
            <div className="settings">
              <a href="#settings" onClick={context.toggleDropDown}>
                Hello, {context.user} <FiChevronDown />
              </a>

              <ul
                className={
                  context.showDropDown
                    ? "has-settings is-enabled"
                    : "has-settings"
                }
              >
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
          )}
        </Consumer>
      </div>
    );
  }
}
