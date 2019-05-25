import React from "react";
import ReactDOM from "react-dom";
import Top from "./layout/top";
import Side from "./layout/side";
import Main from "./layout/main";
import "normalize.css";
import "./index.scss";
import { Provider } from "./leadContext";
import ModalContainer from "./layout/modal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showDropDown: false,
      user: "Elena Lemus",
      toggleModal: this.toggleModal,
      toggleDropDown: this.toggleDropDown,
      addContact: this.addContact,
      removeContact: this.removeContact,
      filterRows: this.filterRows,
      originalLeads: [],
      leads: []
    };
  }
  componentDidMount() {
    fetch("https://randomapi.com/api/3bc22cf1c61ad33ace59930af3435437")
      .then(response => response.json())
      .then(response => {
        const { results } = response;
        this.setState({ user: results[0].user, leads: results[0].leads });
      });
  }
  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  toggleDropDown = () =>
    this.setState({ showDropDown: !this.state.showDropDown });

  addContact = contact =>
    this.setState(prevState => {
      return { leads: [contact, ...prevState.leads] };
    });

  removeContact = contact =>
    this.setState(prevState => {
      return { leads: prevState.leads.filter(lead => lead.id != contact) };
    });

  filterRows = (name, value) =>
    this.setState(prevState => {
      if (
        prevState.originalLeads.length > 0 &&
        (value === "" || value === "10")
      ) {
        return { leads: prevState.originalLeads, originalLeads: [] };
      } else {
        if (value !== "") {
          switch (name) {
            case "currentAmount":
              if (prevState.originalLeads.length > 0) {
                return {
                  leads: prevState.originalLeads.slice(0, parseInt(value))
                };
              } else {
                return {
                  originalLeads: prevState.leads,
                  leads: prevState.leads.slice(0, parseInt(value))
                };
              }

            case "currentCase":
              if (prevState.originalLeads.length > 0) {
                return {
                  leads: prevState.originalLeads.filter(
                    lead => lead.case == value
                  )
                };
              } else {
                return {
                  originalLeads: prevState.leads,
                  leads: prevState.leads.filter(lead => lead.case == value)
                };
              }

            case "currentSource":
              if (prevState.originalLeads.length > 0) {
                return {
                  leads: prevState.originalLeads.filter(
                    lead => lead.source == value
                  )
                };
              } else {
                return {
                  originalLeads: prevState.leads,
                  leads: prevState.leads.filter(lead => lead.source == value)
                };
              }

            default:
            // code block
          }
        } else {
          if (prevState.originalLeads.length > 0) {
            return { leads: prevState.originalLeads.pop() };
          }
        }
      }
    });

  render() {
    return (
      <Provider value={this.state}>
        <ModalContainer />
        <div className="wrapper">
          <Top />
          <Side />
          <Main />
        </div>
      </Provider>
    );
  }
}
var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
