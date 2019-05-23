import React from "react";
import Table from "./table";
import Controls from "./controls";
export default class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <Controls />
        <Table />
      </div>
    );
  }
}
