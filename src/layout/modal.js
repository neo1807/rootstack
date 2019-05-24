import React from "react";
import Modal from "../modalPortal";
import { Consumer } from "../leadContext";
import ContactForm from "../components/contactForm";
class ModalContainer extends React.Component {
  render() {
    return (
      <Consumer>
        {context =>
          context.showModal ? (
            <Modal>
              <div>
                <a
                  href="#close"
                  title="Close"
                  className="modal-close"
                  onClick={context.toggleModal}
                >
                  Close
                </a>
                <h1>Add new contact</h1>
                <ContactForm />
              </div>
            </Modal>
          ) : null
        }
      </Consumer>
    );
  }
}

export default ModalContainer;
