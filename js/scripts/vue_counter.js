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
document.getElementById("testlink").dispatchEvent (clickEvent);
    let measurement = new Date();
//var old = localStorage.getItem("old");
var old=new Date(localStorage.getItem("old"));
var counter = localStorage.getItem("Counter");



console.log("old start date", old );
console.log("stop ",measurement );



//var counter = localStorage.getItem("Counter");
if(counter == null){
   counter = 1;
   localStorage.setItem("theData","");
}else{
    counter++;
}

 localStorage.setItem("Counter",counter);
//alert(counter);

if(counter <= 1001){
   window.location = "http://localhost/Examensarbete-BachelorThesis-2022/workshops.php";
    if(isNaN(counter)) counter=0;
          var delta=measurement-old;
          var str=localStorage.getItem("theData")+", "+delta;
          str+="\n";
                  if(counter==0){
              str="data:text/csv;charset=utf-8";
          }
                  // Increase counter and save data to local storage
          counter++;

          //localStorage.setItem("Counter",counter);
          //search-results node_search-results
          //let nodeList = node_search-results.childNodes;
          localStorage.setItem("theData",str);
                  // Reload page! generate a random word

}
else{
alert("search complete");
     getData();
}
  function getData()
  {
      var str=localStorage.getItem("theData");
      alert(str);
      // Make anchor and click it!
      var anchor = document.createElement("a");
      anchor.setAttribute("href", encodeURI(str));
      anchor.setAttribute("download", "my_data.csv");
      anchor.innerHTML= "Click Here to download";
      console.log(str);
      //console.log(anchor);
      //document.getElementsByTagName('body')[0].appendChild(anchor);
      //anchor.click();

  }
})();
