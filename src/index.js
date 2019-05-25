import React from "react";
import ReactDOM from "react-dom";
import Top from "./layout/top";
import Side from "./layout/side";
import Main from "./layout/main";
import "normalize.css";
import "./styles.css";
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

      leads: [
        {
          id: 1,
          name: "Ernesto Munguía",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/weavermedia/128.jpg",
          email: "Benjamn.Razo62@hotmail.com",
          phone: "915.950.221",
          source: "Referral",
          status: "Lead",
          case: "Tax Evasion"
        },
        {
          id: 2,
          name: "Mercedes de Jesús",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/sharvin/128.jpg",
          email: "Lorenzo.Salcedo@gmail.com",
          phone: "976-598-843",
          source: "Referral",
          status: "Lead",
          case: "Divorce"
        },
        {
          id: 3,
          name: "Gloria Partida",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/soyjavi/128.jpg",
          email: "Guadalupe.Polanco@hotmail.com",
          phone: "918511396",
          source: "Referral",
          status: "Lead",
          case: "Assault"
        },
        {
          id: 4,
          name: "Gonzalo Pichardo",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/homka/128.jpg",
          email: "Sancho.Pedraza95@hotmail.com",
          phone: "929.155.891",
          source: "Internet search",
          status: "Prospect",
          case: "Assault"
        },
        {
          id: 5,
          name: "Adela Olvera",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/jarjan/128.jpg",
          email: "Isabela_Collado43@hotmail.com",
          phone: "968.035.859",
          source: "Referral",
          status: "Lead",
          case: "Divorce"
        },
        {
          id: 6,
          name: "Victoria Regalado DDS",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/mastermindesign/128.jpg",
          email: "LuisMiguel_Lomeli@yahoo.com",
          phone: "904550889",
          source: "Facebook",
          status: "Prospect",
          case: "Fraud"
        },
        {
          id: 7,
          name: "Anita Blanco",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/n1ght_coder/128.jpg",
          email: "Ricardo.Razo@hotmail.com",
          phone: "979-353-416",
          source: "Internet search",
          status: "Lead",
          case: "Assault"
        },
        {
          id: 8,
          name: "Julio Aponte",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/scottiedude/128.jpg",
          email: "Carla.Heredia@gmail.com",
          phone: "965 440 047",
          source: "Internet search",
          status: "Lead",
          case: "Fraud"
        },
        {
          id: 9,
          name: "Homero Rivera",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/petebernardo/128.jpg",
          email: "Gabriel.Salgado@gmail.com",
          phone: "968029737",
          source: "Internet search",
          status: "Prospect",
          case: "DUI"
        },
        {
          id: 10,
          name: "Cecilia Arellano",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/Silveredge9/128.jpg",
          email: "Virginia.Pineda88@hotmail.com",
          phone: "902-275-707",
          source: "Referral",
          status: "Lead",
          case: "DUI"
        }
      ]
    };
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
