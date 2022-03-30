
class ReactApp extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);

    this.handleClick = this.handleClick.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
   }

   onChangeValue(event) {
     alert('Fontsize: ' + event.target.value);
     event.preventDefault();
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
       <button id="buttonOpen" onClick={this.handleClick}>
        {this.state.show ? 'Ändra text utseende' : 'Ändra text utseende'}
      </button>
      <Modal show={this.state.show} handleClose={this.hideModal}>
         {this.props.children}
        <p id="reacttool_title">Textstorlek: </p>
        <div onChange={this.onChangeValue}>
        <input type="radio" value="16px" name="fontsize" /> 16px
        <input type="radio" value="18px" name="fontsize" /> 18px
        <input type="radio" value="20px" name="fontsize" /> 20px
      </div>
        <ReactStyling></ReactStyling>
      </Modal>
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


class ReactStyling extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {

  return (
    <p>Hello</p>
  );
}

}
