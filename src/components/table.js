import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
export default class Table extends React.Component {
  render() {
    return (
      <table cellSpacing="0">
        <TableHeader />
        <TableBody />
      </table>
    );
  }
}
