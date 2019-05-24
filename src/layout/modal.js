import Portal from "../modalPortal";

state = { loading: true, showModal: false };

toggleModal = () => this.setState({ showModal: !this.state.showModal });

const {
  media,
  animal,
  breed,
  location,
  description,
  name,
  showModal
} = this.state;

<button onClick={this.toggleModal}>Adopt {name}</button>;


{
  showModal ? (
    <Modal>
      <h1>Would you like to adopt {name}?</h1>
      <div className="buttons">
        <button onClick={this.toggleModal}>Yes</button>
        <button onClick={this.toggleModal}>No</button>
      </div>
    </Modal>
  ) : null;
}
