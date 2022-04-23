// ==UserScript==
// @name         Vue Counter
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
    var clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
     });
    let old=performance.now();
    document.getElementById("testlink").dispatchEvent (clickEvent);
    localStorage.setItem("old", old);
    var counter = localStorage.getItem("Counter");
    var present = localStorage.getItem("present");
    if(counter == null){
        counter = 1;
        localStorage.setItem("theData","");
        localStorage.setItem("theOld","");
        localStorage.setItem("thePresent","");
    }
    else{
        counter++;
    }
     localStorage.setItem("Counter",counter);
    if(counter <= 11){
          if(isNaN(counter)) counter=0;
        var oldstr = localStorage.getItem("theOld")+", "+old;
        var presentstr = localStorage.getItem("thePresent")+", "+present;
          var delta=present-old;
          var result = Math.floor(delta);
          var str=localStorage.getItem("theData")+", "+result;
          str+="\n";
                  if(counter==0){
                      str="data:text/csv;charset=utf-8";
                  }
          counter++;
          localStorage.setItem("theOld",oldstr);
        localStorage.setItem("thePresent",presentstr);
          localStorage.setItem("theData",str);
    }
    else{
        alert("search complete");
    }
})();
