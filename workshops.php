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



    <div v-bind:style="font" id="text">
      <h1>Lorem Ipsum</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis sapien eget purus sollicitudin blandit. Nunc ut orci neque. Suspendisse sit amet ante quis ex faucibus dictum. Proin odio magna, suscipit sed sollicitudin ut, suscipit ac velit. Phasellus purus nulla, faucibus a volutpat quis, interdum ut orci. Nulla facilisi. Etiam consectetur sed nisl et mattis. Pellentesque nec libero nisl. Nulla rutrum sem sed elit congue rhoncus. In consectetur ipsum id lectus commodo tempus. Cras elementum quam vitae lacinia porttitor. Cras porttitor dolor eget justo dapibus finibus.</p>

<p>Maecenas arcu nulla, mollis in suscipit in, consequat vitae turpis. Ut mollis, velit id vulputate gravida, orci tortor malesuada ex, quis mattis tortor nulla a est. Fusce mi sem, tincidunt consectetur malesuada auctor, luctus nec mauris. Maecenas nec cursus eros, in viverra urna. Integer semper, nibh eu ultricies facilisis, lectus ante pretium felis, nec dictum nisi orci egestas turpis. Etiam ut augue ut sapien ultricies feugiat sed vitae velit. Nullam et tincidunt magna, vitae varius ex. Sed eros metus, porta vel viverra eget, cursus eu nulla. Etiam volutpat turpis in augue dictum, at commodo eros gravida. Pellentesque ut urna justo.</p>

<p>Suspendisse pretium euismod scelerisque. Mauris arcu ipsum, dictum ac lacus quis, egestas ornare ipsum. Nullam finibus nec lorem et finibus. Integer rutrum dapibus lacus et ultrices. Nullam rhoncus at est eu accumsan. Nunc ut mauris ullamcorper, tincidunt libero quis, ornare risus. Sed posuere tempus nunc, at consequat urna cursus eget. Proin id ipsum diam. Nullam tincidunt blandit laoreet. Nullam accumsan ex rutrum, molestie nisl sit amet, sollicitudin elit. Nulla nibh dolor, vehicula id quam ut, sollicitudin auctor nulla. Integer pretium ut orci vestibulum luctus. Donec aliquet justo justo, sit amet mollis urna ultricies eu. Suspendisse a tellus porta, pellentesque purus id, mollis nibh. Proin imperdiet eleifend sem.</p>

<p>Quisque tristique nisl a lacus feugiat lacinia. Vestibulum posuere fringilla tellus non vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque suscipit tincidunt tempus. Duis suscipit est mi, eget tincidunt turpis cursus ac. Cras a varius lacus. Donec dapibus diam nisi. Sed iaculis auctor quam ut tempor. Pellentesque varius pharetra augue quis bibendum. Sed lobortis nisi eget nulla efficitur lobortis.</p>

<p>Donec quis enim facilisis, rutrum velit vitae, congue eros. Suspendisse vel mauris commodo, interdum nibh sed, ultricies nibh. Praesent fermentum vitae nibh non ultricies. Praesent gravida venenatis tristique. Duis eget porta ante. Integer blandit, neque in luctus commodo, sapien nisi volutpat turpis, at euismod sapien turpis a est. Morbi non luctus quam. Donec pharetra, metus sit amet ultricies maximus, magna odio rhoncus mi, sed efficitur risus purus in orci. Phasellus ac urna libero. Sed aliquam blandit tortor. Duis odio nisl, vulputate vitae aliquet quis, semper non erat. Integer sed magna turpis.</p>
    </div>
</div>
          </div>

    </div>
    </div>

    <script src="js/vue_tool.js"></script>
  </body>
</html>
