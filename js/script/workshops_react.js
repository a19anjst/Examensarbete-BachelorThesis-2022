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
    const homeBtn = document.querySelector('#logo-menu-landscape');
    homeBtn.click();
    // Your code here...
})();
