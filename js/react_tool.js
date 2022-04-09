
const TwentyPx = {
  fontsize: "20px"
}

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
        <div onClick={this.onChangeValue}>
        <input type="button" value="16px" name="fontsize"/>
        <input type="button" value="18px" name="fontsize" />
        <input type="button" value="20px" name="fontsize" />
      </div>
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

const Data = () =>{
  const [data, setItem] = React.useState([]);


  React.useEffect(() => {
    fetch("../Examensarbete-BachelorThesis-2022/dbtext.php")
      .then(res => res.json())
      .then(
        (result)=>{
        setItem(result);
        }
      )
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return(
    <div>
      {data.map((item) => (

        <div key={item.ID}><UnsafeComponent html={item.Text}/></div>
      ))}
    </div>
  )
}
function UnsafeComponent({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
