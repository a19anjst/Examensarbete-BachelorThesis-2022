const dark = {
  backgroundColor: "#000000",
  color: "#FFFFFF"
};
const light = {
  backgroundColor: "#FFFFFF",
  color: "#000000"
};
const sixteenpx ={
  fontSize: "16px"
};
const eighteenpx = {
  fontSize: "18px"
};
const twentypx = {
  fontSize: "20px"
};
const twentytwopx = {
  fontSize: "22px"
};
class ReactApp extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      color: light,
      fontsize: sixteenpx
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);

    this.handleClick = this.handleClick.bind(this);
    this.onChangeValue16px = this.onChangeValue16px.bind(this);
    this.onChangeValue18px = this.onChangeValue18px.bind(this);
    this.onChangeValue20px = this.onChangeValue20px.bind(this);
    this.onChangeValue22px = this.onChangeValue22px.bind(this);
    this.onChangeValueWhite = this.onChangeValueWhite.bind(this);
    this.onChangeValueBlack = this.onChangeValueBlack.bind(this);
   }

   onChangeValue16px(event) {
     const newFontSize = this.state.fontsize = sixteenpx;
     this.setState({ fontsize: newFontSize })
   }
   onChangeValue18px(event) {
     const newFontSize = this.state.fontsize = eighteenpx;
     this.setState({ fontsize: newFontSize })
   }
   onChangeValue20px(event) {
     const newFontSize = this.state.fontsize = twentypx;
     this.setState({ fontsize: newFontSize })
   }
   onChangeValue22px(event) {
     const newFontSize = this.state.fontsize = twentytwopx;
     this.setState({ fontsize: newFontSize })
   }
   onChangeValueWhite(event) {
     const newColor = this.state.color = light;
     this.setState({ color: newColor })
   }
   onChangeValueBlack(event) {
     const newColor = this.state.color = dark;
     this.setState({ color: newColor })
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
        <p className="reacttool_title">Textstorlek: </p>
        <input type="button" value="16px" name="fontsize" onClick={this.onChangeValue16px}/>
        <input type="button" value="18px" name="fontsize" onClick={this.onChangeValue18px}/>
        <input type="button" value="20px" name="fontsize" onClick={this.onChangeValue20px}/>
        <input type="button" value="22px" name="fontsize" onClick={this.onChangeValue22px}/>
      <p className="reacttool_title">Färgsättning: </p>
      <input type="button" value="Lightmode" name="fontsize" onClick={this.onChangeValueWhite}/>
      <input type="button" value="Darkmode" name="fontsize" onClick={this.onChangeValueBlack} />
      </Modal>
      <div className="textblock" id="textblock1">
          <div className="content_second"style={this.state.color}>
            <div className="content_dir1" style={this.state.fontsize}>
            <Data/>
            </div>
          </div>

      </div>
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
