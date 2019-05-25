import React from "react";
import TableRow from "./tableRow";
import { Consumer } from "../leadContext";
export default class TableBody extends React.Component {
  getInitials = name => {
    return name
      .split(" ")
      .map(n => n[0])
      .join("");
  };
  render() {
    return (
      <Consumer>
        {context => (
          <tbody>
            {context.leads.length > 0
              ? context.leads.map(lead => (
                  <TableRow
                    key={lead.id}
                    id={lead.id}
                    avatar={lead.avatar}
                    name={lead.name}
                    source={lead.source}
                    case={lead.case}
                    status={lead.status}
                    email={lead.email}
                    phone={lead.phone}
                    deleteSelf={context.removeContact}
                  />
                ))
              : null}
          </tbody>
        )}
      </Consumer>
    );
  }
}
