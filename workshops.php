<!DOCTYPE html>
<html lang="sv">
  <head>
  <meta http-equiv="Content-Type" content="text/html" charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/CSS_shared.css">
  <link rel="stylesheet" href="css/vuecss.css">
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=PT+Serif&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Chilanka&display=swap');
    </style>
    <script src="https://unpkg.com/vue@3"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="js/JS_shared.js"></script>
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
      <div id="app">
        <button @click="active = !active" :aria-pressed="active ? 'true' : 'false'" id="tooglebutton">Ändra text utseende</button>
    <span :class="{ big: !active }">
      <div class="modal-main">
        <div class="title_vue">Textstorlek: </div>
          <button v-on:click="storeFontSize16" id="sixteenpx" class="stylebutton">16px</button>
          <button v-on:click="storeFontSize18" id="eighteenpx" class="stylebutton">18px</button>
          <button v-on:click="storeFontSize20" id="twentypx" class="stylebutton">20px</button>
          <button v-on:click="storeFontSize22" id="twentytwopx" class="stylebutton">22px</button>
        <div class="title_vue">Färgsättning: </div>
          <button v-on:click="changeColorWhite" class="stylebutton" id="lightmode">Lightmode</button>
          <button v-on:click="changeColorBlack" class="stylebutton" id="darkmode">Darkmode</button>
          <button v-on:click="changeColorFul" class="stylebutton" id="colorful">Färg</button>
          <button v-on:click="changeColorBright" class="stylebutton" id="bright">Skarp</button>
        <div>
          <button v-on:click="clearColor" class="stylebutton" id="clear">Clear</button>
        </div>
      </div>
    </span>
    <div class="textblock" id="textblock1">

        <div class="content_second" id='box' v-bind:style="styles">



  <div v-for="info in infos" :key="info.id">
    <p v-bind:style="font" id="text">
      <span v-html="info.Text"></span>
      </p>
</div>
</div>
          </div>

    </div>
    </div>

    <script src="js/vue_tool.js"></script>
  </body>
</html>
