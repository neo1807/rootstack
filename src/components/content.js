import React from "react";
import Table from "./table";
import Controls from "./controls";
import { Consumer } from "../leadContext";
export default class Content extends React.Component {
  render() {
    return (
      <Consumer>
        {context =>
          context.leads.length > 0 ? (
            <div className="content">
              <Controls
                toggleModal={context.toggleModal}
                filterRows={context.filterRows}
              />
              <Table />
            </div>
          ) : (
            "Loading..."
          )
        }
      </Consumer>
    );
  }
}
