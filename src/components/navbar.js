import React from "react";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <a>link</a>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Leads</a>
          </li>
          <li>
            <a href="/">Tasks</a>
          </li>
          <li>
            <a href="/">Forms</a>
          </li>
          <li>
            <a href="/">Referrals</a>
          </li>
          <li>
            <a href="/">Checklists</a>
          </li>
          <li>
            <a href="/">Calendar</a>
          </li>
          <li>
            <a href="/">Settings</a>
          </li>
        </ul>
      </nav>
    );
  }
}
