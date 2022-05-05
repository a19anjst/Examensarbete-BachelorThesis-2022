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
      fontsize: sixteenpx,
      date: new Date()
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

  componentDidMount() {
 }
 componentWillUnmount(){

 }

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
            <h1>Lorem Ipsum</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis sapien eget purus sollicitudin blandit. Nunc ut orci neque. Suspendisse sit amet ante quis ex faucibus dictum. Proin odio magna, suscipit sed sollicitudin ut, suscipit ac velit. Phasellus purus nulla, faucibus a volutpat quis, interdum ut orci. Nulla facilisi. Etiam consectetur sed nisl et mattis. Pellentesque nec libero nisl. Nulla rutrum sem sed elit congue rhoncus. In consectetur ipsum id lectus commodo tempus. Cras elementum quam vitae lacinia porttitor. Cras porttitor dolor eget justo dapibus finibus.</p>

            <p>Maecenas arcu nulla, mollis in suscipit in, consequat vitae turpis. Ut mollis, velit id vulputate gravida, orci tortor malesuada ex, quis mattis tortor nulla a est. Fusce mi sem, tincidunt consectetur malesuada auctor, luctus nec mauris. Maecenas nec cursus eros, in viverra urna. Integer semper, nibh eu ultricies facilisis, lectus ante pretium felis, nec dictum nisi orci egestas turpis. Etiam ut augue ut sapien ultricies feugiat sed vitae velit. Nullam et tincidunt magna, vitae varius ex. Sed eros metus, porta vel viverra eget, cursus eu nulla. Etiam volutpat turpis in augue dictum, at commodo eros gravida. Pellentesque ut urna justo.</p>

            <p>Suspendisse pretium euismod scelerisque. Mauris arcu ipsum, dictum ac lacus quis, egestas ornare ipsum. Nullam finibus nec lorem et finibus. Integer rutrum dapibus lacus et ultrices. Nullam rhoncus at est eu accumsan. Nunc ut mauris ullamcorper, tincidunt libero quis, ornare risus. Sed posuere tempus nunc, at consequat urna cursus eget. Proin id ipsum diam. Nullam tincidunt blandit laoreet. Nullam accumsan ex rutrum, molestie nisl sit amet, sollicitudin elit. Nulla nibh dolor, vehicula id quam ut, sollicitudin auctor nulla. Integer pretium ut orci vestibulum luctus. Donec aliquet justo justo, sit amet mollis urna ultricies eu. Suspendisse a tellus porta, pellentesque purus id, mollis nibh. Proin imperdiet eleifend sem.</p>

            <p>Quisque tristique nisl a lacus feugiat lacinia. Vestibulum posuere fringilla tellus non vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque suscipit tincidunt tempus. Duis suscipit est mi, eget tincidunt turpis cursus ac. Cras a varius lacus. Donec dapibus diam nisi. Sed iaculis auctor quam ut tempor. Pellentesque varius pharetra augue quis bibendum. Sed lobortis nisi eget nulla efficitur lobortis.</p>

            <p>Donec quis enim facilisis, rutrum velit vitae, congue eros. Suspendisse vel mauris commodo, interdum nibh sed, ultricies nibh. Praesent fermentum vitae nibh non ultricies. Praesent gravida venenatis tristique. Duis eget porta ante. Integer blandit, neque in luctus commodo, sapien nisi volutpat turpis, at euismod sapien turpis a est. Morbi non luctus quam. Donec pharetra, metus sit amet ultricies maximus, magna odio rhoncus mi, sed efficitur risus purus in orci. Phasellus ac urna libero. Sed aliquam blandit tortor. Duis odio nisl, vulputate vitae aliquet quis, semper non erat. Integer sed magna turpis.</p>
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
