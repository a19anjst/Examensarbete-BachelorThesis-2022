// ==UserScript==
// @name         React Counter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://localhost/Examensarbete-BachelorThesis-2022/index.php
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
        var hcounter = localStorage.getItem("hCounter");
if(hcounter == null){
        hcounter = 1;
    }
    else{
        hcounter++;
    }
     localStorage.setItem("hCounter",hcounter);
   if(hcounter <= 10){
    var clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
     });
    document.getElementById("testlink").dispatchEvent (clickEvent);
let old = performance.now();
    localStorage.setItem("old", old);
   }
    else{
        alert("Measuring done!");
    }
})();
