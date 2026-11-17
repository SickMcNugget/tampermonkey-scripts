// ==UserScript==
// @name         Simplify JWZ.org
// @namespace    http://tampermonkey.net/
// @version      2024-11-24
// @description  Minimize distractions for Jamie Zawinski's blog
// @author       SickMcNugget
// @updateURL    https://raw.githubusercontent.com/SickMcNugget/tampermonkey-scripts/master/simplify-jwz-org.js
// @downloadURL  https://raw.githubusercontent.com/SickMcNugget/tampermonkey-scripts/master/simplify-jwz-org.js
// @match        *://jwz.org/blog/*
// @match        *://www.jwz.org/blog/*
// ==/UserScript==

(function() {
    'use strict';

    // Remove sidebar
    let sidebar = document.getElementById("sidebar");
    sidebar.style.display = "none";
    // sidebar.parentNode.removeChild(sidebar);

    let content = document.getElementById("content");
    content.style.display="inline";
})();
