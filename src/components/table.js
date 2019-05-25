import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
export default class Table extends React.Component {
  render() {
    return (
      <table cellSpacing="0">
        <colgroup>
          <col width="20%" />
          <col width="20%" />
          <col width="10%" />
          <col width="10%" />
          <col width="10%" />
          <col width="5%" />
        </colgroup>
        <TableHeader />
        <TableBody />
      </table>
    );
  }
}
