// ==UserScript==
// @name         Remove Dynamic Upsell Dialog
// @namespace    http://tampermonkey.net/
// @version      2026-11-17
// @description  Automatically removes the upsell dialog
// @author       SickMcNugget
// @updateURL    https://raw.githubusercontent.com/SickMcNugget/tampermonkey-scripts/master/remove-dynamic-upsell-dialog.js
// @downloadURL  https://raw.githubusercontent.com/SickMcNugget/tampermonkey-scripts/master/remove-dynamic-upsell-dialog.js
// @match        https://www.reddit.com/*
// ==/UserScript==

(function () {
    'use strict';

    const SELECTOR = '#desktop-dynamic-upsell-dialog';

    function removeDialog() {
        document.querySelectorAll(SELECTOR).forEach(el => {
            console.log(`Removing upsell dialog`);
            el.remove();
        });
    }

    const observer = new MutationObserver(removeDialog);

    observer.observe(document, {
        childList: true,
        subtree: true
    });

    removeDialog();
})();


