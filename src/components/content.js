import React from "react";
import Table from "./table";
import Controls from "./controls";
import { Consumer } from "../leadContext";
export default class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <Consumer>
          {context => (
            <Controls
              toggleModal={context.toggleModal}
              filterRows={context.filterRows}
            />
          )}
        </Consumer>
        <Table />
      </div>
    );
  }
}
