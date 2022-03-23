<?php
session_start();
?>
<!DOCTYPE html>
<html lang="sv">
  <head>
  <meta http-equiv="Content-Type" content="text/html" charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/CSS_shared.css">
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=PT+Serif&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Chilanka&display=swap');
    </style>
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
    <div class="textblock" id="textblock1">
        <div class="content">
          <div class="content_dir1">
            <h1>lorem ipsum</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
          <div class="content_dir2">
            <a href="workshops.php"><div class="optionbutton" id="optionbutton_color1"><img src="css/Vector.png" alt="" id="optionbutton_img"></div></a>
          </div>
        </div>
        <div class="content">
          <div class="content_dir1">
            <h1>lorem ipsum</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
          <div class="content_dir2">
            <a href="advice.php"><div class="optionbutton" id="optionbutton_color1"><img src="css/Vector.png" alt="" id="optionbutton_img"></div></a>
          </div>
        </div>
        <div class="content">
          <div class="content_dir1">
            <h1>lorem ipsum</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
          <div class="content_dir2">
            <a href="equality.php"><div class="optionbutton" id="optionbutton_color1"><img src="css/Vector.png" alt="" id="optionbutton_img"></div></a>
          </div>
        </div>
        <div class="content">
          <div class="content_dir1">
            <h1>lorem ipsum</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
          <div class="content_dir2">
            <a href="cooperation.php"><div class="optionbutton" id="optionbutton_color1"><img src="css/Vector.png" alt="" id="optionbutton_img"></div></a>
          </div>
        </div>
    </div>
    </div>
  </body>
</html>
