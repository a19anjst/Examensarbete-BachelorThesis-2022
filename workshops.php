<!DOCTYPE html>
<html lang="sv">
  <head>
  <meta http-equiv="Content-Type" content="text/html" charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/reacttoolcss.css">
  <link rel="stylesheet" href="css/CSS_shared.css">
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=PT+Serif&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Chilanka&display=swap');
    </style>
    <script src="js/JS_shared.js" defer></script>
  </head>
  <body>
    <nav id="menu">
        <a href="index.php" class="menubutton" id="logo-menu-landscape"><img src="css/logo.svg" alt="" onmouseover="hoverlogo2(this);" onmouseout="unhoverlogo2(this);"></a>
        <a href="education.php" class="menubutton" id="active"><img src="css/TjänsterOchVerktyg_ikon_black.png" alt="" class="menuicon">lorem ipsum</a>
        <a href="aboutus.php" class="menubutton"><img src="css/OmOss_ikon.png" alt="" class="menuicon">lorem ipsum</a>
        <a href="info.php" class="menubutton"><img src="css/book-solid.png" alt="" class="menuicon">lorem ipsum</a>
    </nav>
    <div class="title" id="title_education">
      <span id="titletext">lorem ipsum</span>
    </div>
    <div id="textfield">
    <div id="reactpos">
      <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
      <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
      <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
      <script type="text/babel" src="JS/react_tool.js"></script>
      <div id="reactapp"></div>
    </div>
    </div>
    <script type="text/babel">
    this.setState({
  loading: true
});
require.ensure([], (require) => {
   require('react_tool.js');
   this.setState({
     loading: false
   });
})
    ReactDOM.render(<ReactApp/>, document.getElementById("reactapp"));
    </script>
  </body>
</html>
