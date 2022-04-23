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
    let present = performance.now();
    localStorage.setItem("present", present);
    const homeBtn = document.querySelector('#logo-menu-landscape');
    homeBtn.click();
})();
