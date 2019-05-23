import React from "react";
import { FiSearch, FiGrid } from "react-icons/fi";
import CurrentUser from "./currentUser";
export default class Topbar extends React.Component {
  render() {
    return (
      <nav>
        <a href="/">
          <FiSearch />
        </a>
        <a href="/">
          <FiGrid />
        </a>
        <CurrentUser />
      </nav>
    );
  }
}
