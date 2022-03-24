
class ReactApp extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);

    this.handleClick = this.handleClick.bind(this);
  }
  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
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
         <p id="reacttool_title">Textstorlek: </p>
         <ReactStyling></ReactStyling>
       </Modal>
       <button id="buttonOpen" onClick={this.handleClick}>
        {this.state.show ? 'Textverktyg' : 'Textverktyg'}
      </button>
      <p>  </p>
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

}
