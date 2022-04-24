// ==UserScript==
// @name         Workshops - React
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://localhost/Examensarbete-BachelorThesis-2022/workshops.php
// @icon         https://www.google.com/s2/favicons?sz=64&domain=learn.co
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var counter = localStorage.getItem("Counter");
if(counter == null){
        counter = 1;
    }
    else{
        counter++;
    }
     localStorage.setItem("Counter",counter);
   if(counter <= 10){

        location.reload("#reactapp");
    }

    else{
     let present = performance.now();
    localStorage.setItem("present", present);
        var old = localStorage.getItem("old");
        var delta=present-old;
          var result = Math.floor(delta);
          var str=localStorage.getItem("theData")+", "+result;
        str+="\n";
                  if(counter==0){
                      str="data:text/csv;charset=utf-8";
                  }
         localStorage.setItem("theData",str);
        counter=0;
        localStorage.setItem("Counter", counter);
         const homeBtn = document.querySelector('#logo-menu-landscape');
    homeBtn.click();
    }

})();
