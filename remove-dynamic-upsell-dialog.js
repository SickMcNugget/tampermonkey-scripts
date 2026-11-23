// ==UserScript==
// @name         Remove Dynamic Upsell Dialog
// @namespace    http://tampermonkey.net/
// @version      2026-11-23
// @description  Automatically removes the upsell dialog
// @author       SickMcNugget
// @updateURL    https://raw.githubusercontent.com/SickMcNugget/tampermonkey-scripts/master/remove-dynamic-upsell-dialog.js
// @downloadURL  https://raw.githubusercontent.com/SickMcNugget/tampermonkey-scripts/master/remove-dynamic-upsell-dialog.js
// @match        https://www.reddit.com/*
// ==/UserScript==

(function () {
    'use strict';

    const SELECTOR = '#desktop-dynamic-upsell-dialog';
    const SCROLL_LOCK_CLASS = 'rpl-scroll-lock';

    function removeDialog() {
        document.querySelectorAll(SELECTOR).forEach(el => {
            console.log(`Removing upsell dialog`);
            el.remove();
        });

        document.querySelectorAll("body").forEach(el => {
            console.log(`Removing scroll lock class`);
            el.classList.remove(SCROLL_LOCK_CLASS);
        });
    }

    const observer = new MutationObserver(removeDialog);

    observer.observe(document, {
        childList: true,
        subtree: true
    });

    removeDialog();
})();


