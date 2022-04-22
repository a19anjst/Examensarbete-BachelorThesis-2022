const dark = {
  backgroundColor: "#000000",
  color: "#FFFFFF"
};
const light = {
  backgroundColor: "#FFFFFF",
  color: "#000000"
};
const colorful = {
  backgroundColor: "#FFFACD",
  color: "#4B0082"
};
const bright = {
  backgroundColor: "#FFFF00",
  color: "#EE82EE"
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
    this.onChangeValueColorful = this.onChangeValueColorful.bind(this);
    this.onChangeValueBright = this.onChangeValueBright.bind(this);
    this.onChangeValueClear = this.onChangeValueClear.bind(this);

   }
   onChangeValue16px(event) {
     const newFontSize = this.state.fontsize = sixteenpx;
     this.setState({ fontsize: newFontSize })
     localStorage.setItem('fontsize', JSON.stringify(sixteenpx));
   }
   onChangeValue18px(event) {
     const newFontSize = this.state.fontsize = eighteenpx;
     this.setState({ fontsize: newFontSize })
     localStorage.setItem('fontsize', JSON.stringify(eighteenpx));
   }
   onChangeValue20px(event) {
     const newFontSize = this.state.fontsize = twentypx;
     this.setState({ fontsize: newFontSize })
     localStorage.setItem('fontsize', JSON.stringify(twentypx));
   }
   onChangeValue22px(event) {
     const newFontSize = this.state.fontsize = twentytwopx;
     this.setState({ fontsize: newFontSize })
     localStorage.setItem('fontsize', JSON.stringify(twentytwopx));
   }
   onChangeValueWhite(event) {
     const newColor = this.state.color = light;
     this.setState({ color: newColor })
     localStorage.setItem('color', JSON.stringify(light));
   }
   onChangeValueBlack(event) {
     const newColor = this.state.color = dark;
     this.setState({ color: newColor })
     localStorage.setItem('color', JSON.stringify(dark));
   }
   onChangeValueColorful(event) {
     const newColor = this.state.color = colorful;
     this.setState({ color: newColor })
     localStorage.setItem('color', JSON.stringify(colorful));
   }
   onChangeValueBright(event) {
     const newColor = this.state.color = bright;
     this.setState({ color: newColor })
     localStorage.setItem('color', JSON.stringify(bright));
   }

   onChangeValueClear(event) {
     localStorage.removeItem('color');
     localStorage.removeItem('fontsize');
     const newColor = this.state.color = light;
     this.setState({ color: newColor })
     const newFontSize = this.state.fontsize = sixteenpx;
     this.setState({ fontsize: newFontSize })
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
    const getcolor = JSON.parse(localStorage.getItem('color'))
    const getfontsize = JSON.parse(localStorage.getItem('fontsize'))
  return (
    <main>
       <button id="buttonOpen" onClick={this.handleClick}>
        {this.state.show ? 'Ändra text utseende' : 'Ändra text utseende'}
      </button>
      <Modal show={this.state.show} handleClose={this.hideModal}>
         {this.props.children}
        <p className="reacttool_title">Textstorlek: </p>
        <input type="button" value="16px" name="fontsize" className="button" onClick={this.onChangeValue16px} style={sixteenpx}/>
        <input type="button" value="18px" name="fontsize" className="button" onClick={this.onChangeValue18px} style={eighteenpx}/>
        <input type="button" value="20px" name="fontsize" className="button" onClick={this.onChangeValue20px} style={twentypx}/>
        <input type="button" value="22px" name="fontsize" className="button" onClick={this.onChangeValue22px} style={twentytwopx}/>
      <p className="reacttool_title">Färgsättning: </p>
      <input type="button" value="Lightmode" name="fontsize" id="lightmode" className="button" onClick={this.onChangeValueWhite} style={light}/>
      <input type="button" value="Darkmode" name="fontsize" id="darkmode" className="button" onClick={this.onChangeValueBlack} style={dark}/>
      <input type="button" value="Färg" name="fontsize" id="colorful" className="button" onClick={this.onChangeValueColorful} style={colorful}/>
      <input type="button" value="Skarp" name="fontsize" id="bright" className="button" onClick={this.onChangeValueBright} style={bright}/>
      <div><input type="button" value="Clear" name="Reset" id="clear" className="button" onClick={this.onChangeValueClear} style={{margin: "10px"}}/></div>
      </Modal>
      <div className="textblock" id="textblock1">
          <div className="content_second" style={getcolor}>
            <div className="content_dir1" style={getfontsize}>
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
        //console.log(date)
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
//
