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
      user: "Sofia Baeza",
      toggleModal: this.toggleModal,
      toggleDropDown: this.toggleDropDown,
      leads: [
        {
          id: 1,
          name: "Pilar Márquez",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/geneseleznev/128.jpg",
          email: "Isabel.Soto39@gmail.com",
          phone: "965.552.314",
          source: "Facebook",
          status: "Client",
          case: "Divorce"
        },
        {
          id: 2,
          name: "Sr. Lola Negrón",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/gseguin/128.jpg",
          email: "Gustavo_Tirado67@yahoo.com",
          phone: "913-468-474",
          source: "Facebook",
          status: "Prospect",
          case: "Divorce"
        },
        {
          id: 3,
          name: "Clemente Hurtado",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/thekevinjones/128.jpg",
          email: "Reina.Arevalo32@gmail.com",
          phone: "931.457.386",
          source: "Internet search",
          status: "Lead",
          case: "Fraud"
        },
        {
          id: 4,
          name: "Juana Abrego",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/terryxlife/128.jpg",
          email: "Alejandro.Borrego@gmail.com",
          phone: "962 453 225",
          source: "Referral",
          status: "Prospect",
          case: "Divorce"
        },
        {
          id: 5,
          name: "Martín Alaniz",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/sur4dye/128.jpg",
          email: "Mariano.Escamilla@yahoo.com",
          phone: "912392141",
          source: "Internet search",
          status: "Lead",
          case: "DUI"
        },
        {
          id: 6,
          name: "Horacio Zúñiga",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/andrewcohen/128.jpg",
          email: "Gabriela_Barrera67@gmail.com",
          phone: "939.848.279",
          source: "Facebook",
          status: "Client",
          case: "Divorce"
        },
        {
          id: 7,
          name: "Sra. Samuel Arroyo",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/devinhalladay/128.jpg",
          email: "Carlos_Gallardo@yahoo.com",
          phone: "928839469",
          source: "Referral",
          status: "Prospect",
          case: " Evasion"
        },
        {
          id: 8,
          name: "Patricio Robledo",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/martip07/128.jpg",
          email: "Virginia.Contreras9@hotmail.com",
          phone: "917704784",
          source: "Internet search",
          status: "Lead",
          case: " Evasion"
        },
        {
          id: 9,
          name: "Luis Naranjo",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/derekcramer/128.jpg",
          email: "MaradelCarmen85@hotmail.com",
          phone: "991-807-485",
          source: "Facebook",
          status: "Prospect",
          case: "DUI"
        },
        {
          id: 10,
          name: "Carlos Alcaraz",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/andrewcohen/128.jpg",
          email: "Conchita.Rojas43@yahoo.com",
          phone: "918402100",
          source: "Facebook",
          status: "Lead",
          case: "Fraud"
        }
      ]
    };
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  toggleDropDown = () =>
    this.setState({ showDropDown: !this.state.showDropDown });

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
