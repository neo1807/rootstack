import React from "react";
import {
  FiHome,
  FiMenu,
  FiUsers,
  FiCheckSquare,
  FiUserPlus,
  FiList,
  FiCalendar,
  FiSettings,
  FiFileText
} from "react-icons/fi";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <a href="/" className="toggle-menu">
          <FiMenu />
        </a>
        <ul>
          <li>
            <a href="/">
              <FiHome />
              Home
            </a>
          </li>
          <li className="is-active">
            <a href="/">
              <FiUsers />
              Leads
            </a>
          </li>
          <li>
            <a href="/">
              <FiCheckSquare />
              Tasks
            </a>
          </li>
          <li>
            <a href="/">
              <FiFileText />
              Forms
            </a>
          </li>
          <li>
            <a href="/">
              <FiUserPlus />
              Referrals
            </a>
          </li>
          <li>
            <a href="/">
              <FiList />
              Checklists
            </a>
          </li>
          <li>
            <a href="/">
              <FiCalendar />
              Calendar
            </a>
          </li>
          <li>
            <a href="/">
              <FiSettings />
              Settings
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
