import React from "react";
import ReactDOM from "react-dom";
import Top from "./layout/top";
import Side from "./layout/side";
import Main from "./layout/main";
import "normalize.css";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Top />
        <Side />
        <Main />
      </div>
    );
  }
}
var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
