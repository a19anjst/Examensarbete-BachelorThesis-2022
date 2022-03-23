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
        <a href="education.php" class="menubutton"><img src="css/TjänsterOchVerktyg_ikon.png" alt="" class="menuicon">Tjänster</a>
        <a href="aboutus.php" class="menubutton"><img src="css/OmOss_ikon.png" alt="" class="menuicon">Om oss</a>
        <a href="info.php" class="menubutton" id="active"><img src="css/book-solid_black.png" alt="" class="menuicon">Fakta</a>
    </nav>
    <div class="title" id="title_info">
      <span id="titletext">Fakta</span>
    </div>
    <div id="textfield">
    <div class="textblock" id="textblock4">
        <div class="content">
          <div class="content_dir1">
            <h1>FAQ</h1>
            <p>Det finns en del återkommande frågor som dyker upp när vi träffar människor under våra utbildningar, föreläsningar och liknande. Ibland är svaren komplexa och behöver längre tid att svara på, men ibland finns det enkla korta svar. Här kan du se dem.</p>
          </div>
          <div class="content_dir2">
            <a href="faq.php"><div class="optionbutton" id="optionbutton_color4"><img src="css/Vector.png" alt="" id="optionbutton_img"></div></a>
          </div>
        </div>
        <div class="content">
          <div class="content_dir1">
            <h1>Populärkultur</h1>
            <p>Det finns mycket bra populärkultur som berör de ämnen vi ofta talar om under EDCS utbildningar.  Diskriminering, vithetsnormer, sexism etc. Här har vi valt att samla tips från populärkulturen, där du kan lära dig mer på ett annat sätt än genom vetenskapliga artiklar.</p>
          </div>
          <div class="content_dir2">
            <a href="popculture.php"><div class="optionbutton" id="optionbutton_color4"><img src="css/Vector.png" alt="" id="optionbutton_img"></div></a>
          </div>
        </div>
        <div class="content">
          <div class="content_dir1">
            <h1>Övningar</h1>
            <p>Här finns tips på övningar du kan använda dig av i ledningsgruppen,  tillsammans med medarbetare eller på kommande träff med föreningen.</p>
          </div>
          <div class="content_dir2">
            <a href="practices.php"><div class="optionbutton" id="optionbutton_color4"><img src="css/Vector.png" alt="" id="optionbutton_img"></div></a>
          </div>
        </div>
        <div class="content">
          <div class="content_dir1">
            <h1>Forskning</h1>
            <p>Det finns mycket forskning inom vårt område. Här finns länkar till intressanta rapporter, artiklar och avhandlingar som du kan ha nytta av i ditt arbete eller för att fördjupa dina kunskaper.</p>
          </div>
          <div class="content_dir2">
            <a href="research.php"><div class="optionbutton" id="optionbutton_color4"><img src="css/Vector.png" alt="" id="optionbutton_img"></div></a>
          </div>
        </div>
    </div>
    </div>
  </body>
</html>
