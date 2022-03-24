

class ReactApp extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      this.setState(prevState => ({
        show: !prevState.show
      }));
    }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
  return (
    <main>
       <Modal show={this.state.show} handleClose={this.hideModal}>
         <p>Modal</p>
       </Modal>
       <button id="buttonOpen" onClick={this.handleClick}>
        {this.state.show ? 'Textverktyg' : 'Textverktyg'}
      </button>
     </main>
  );
}
}
const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
      </section>
    </div>
  );
};
