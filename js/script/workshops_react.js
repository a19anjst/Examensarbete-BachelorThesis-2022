// ==UserScript==
// @name         Workshops - React
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
var myInterval = setInterval(function(){

    const openBtn = document.querySelector('#buttonOpen');
    openBtn.click();

    const colorfulBtn = document.querySelector('#colorful');
    colorfulBtn.click();

    const clearBtn = document.querySelector('#clear');
    clearBtn.click();

    let start=new Date();
    localStorage.setItem("old",start);
window.location = "http://localhost/Examensarbete-BachelorThesis-2022/index.php";


    }, 250);


})();
