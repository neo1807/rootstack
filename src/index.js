import React from "react";
import ReactDOM from "react-dom";
import Top from "./layout/top";
import Side from "./layout/side";
import Main from "./layout/main";
import "normalize.css";
import "./styles/index.scss";
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
          name: "Raquel Urías I",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/thehacker/128.jpg",
          email: "Dbora32@hotmail.com",
          phone: "900 433 281",
          source: "Internet search",
          status: "Lead",
          case: "Fraud"
        },
        {
          id: 2,
          name: "Sra. Marta Armenta",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/manekenthe/128.jpg",
          email: "Luis_Meraz@gmail.com",
          phone: "974 504 555",
          source: "Facebook",
          status: "Client",
          case: "Divorce"
        },
        {
          id: 3,
          name: "Eduardo Duarte",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/teylorfeliz/128.jpg",
          email: "Carlos21@gmail.com",
          phone: "994 314 152",
          source: "Facebook",
          status: "Prospect",
          case: "Assault"
        },
        {
          id: 4,
          name: "Ramona Olivares",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/Shriiiiimp/128.jpg",
          email: "Julia23@gmail.com",
          phone: "916 099 799",
          source: "Internet search",
          status: "Lead",
          case: "Assault"
        },
        {
          id: 5,
          name: "Ernesto Garrido",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/karthipanraj/128.jpg",
          email: "ngela_Murillo85@yahoo.com",
          phone: "918764002",
          source: "Facebook",
          status: "Lead",
          case: "Assault"
        },
        {
          id: 6,
          name: "Mercedes Araña",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/airskylar/128.jpg",
          email: "Benito.Olivares@yahoo.com",
          phone: "944674384",
          source: "Internet search",
          status: "Prospect",
          case: "Tax Evasion"
        },
        {
          id: 7,
          name: "Octavio Mateo",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/geobikas/128.jpg",
          email: "Francisco_Torres82@yahoo.com",
          phone: "987259511",
          source: "Internet search",
          status: "Client",
          case: "DUI"
        },
        {
          id: 8,
          name: "Salvador Orta",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/geobikas/128.jpg",
          email: "Isabela.Navarrete24@gmail.com",
          phone: "932-846-317",
          source: "Facebook",
          status: "Lead",
          case: "DUI"
        },
        {
          id: 9,
          name: "Bernardo Garica",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/scottgallant/128.jpg",
          email: "Ramn75@gmail.com",
          phone: "900 039 152",
          source: "Internet search",
          status: "Client",
          case: "Tax Evasion"
        },
        {
          id: 10,
          name: "Benjamín Rentería",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/joshaustin/128.jpg",
          email: "Olivia77@yahoo.com",
          phone: "903-713-859",
          source: "Referral",
          status: "Prospect",
          case: "Divorce"
        }
      ]
    };
  }
  // componentDidMount() {
  //   fetch("https://randomapi.com/api/3bc22cf1c61ad33ace59930af3435437")
  //     .then(response => response.json())
  //     .then(response => {
  //       const { results } = response;
  //       this.setState({ user: results[0].user, leads: results[0].leads });
  //     });
  // }
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
