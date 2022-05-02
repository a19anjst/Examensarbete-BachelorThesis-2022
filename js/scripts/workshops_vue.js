// ==UserScript==
// @name         Workshops - Vue
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://localhost/Examensarbete-BachelorThesis-2022/workshops.php
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
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
   if(counter <= 30){

        location.reload("#app");
    }

    else{
    let present = Date.now();
    localStorage.setItem("present", present);
        var old = localStorage.getItem("old");
        var delta=present-old;
        /*var result = Math.floor(delta);*/
        var str=localStorage.getItem("theData")+", "+delta;
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
