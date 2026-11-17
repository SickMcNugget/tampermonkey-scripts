// ==UserScript==
// @name         Center Plaintext page
// @namespace    http://tampermonkey.net/
// @version      2025-10-29
// @description  Centers all the content for plain HTML-based pages for reading (started with Mutt's documentation)
// @author       SickMcNugget
// @updateURL    https://raw.githubusercontent.com/SickMcNugget/tampermonkey-scripts/master/center-plaintext-page.js
// @downloadURL  https://raw.githubusercontent.com/SickMcNugget/tampermonkey-scripts/master/center-plaintext-page.js
// @match        http://mutt.org/*
// @match        https://tldp.org/HOWTO/NET3-4-HOWTO-4.html
// @match        https://lore.kernel.org/*
// @match        https://blob.perl.org/books/impatient-perl/iperl.htm
// @match        https://www.greglondon.com/iperl/html/iperl.htm
// @match        https://linux.enea.com/4.0/documentation/html/book-enea-linux-realtime-guide/
// ==/UserScript==

(function() {
    'use strict';

    function modify_table(table) {
        table.style.margin = "0 auto";
    }

    function modify_table_div(div) {
        // The various cases for a table header/caption should be handled here
        const title = div.querySelector("p.title");
        title.style.textAlign = "center";

        // The various cases for tables should be handled here
        const table = div.getElementsByTagName("table")[0];
        modify_table(table);
    }

    function modify_tables(tables) {
        // tables needs to be a list

        for (const table of tables) {
            if (table.nodeName == "DIV") {
                modify_table_div(table);
            } else if (table.nodeName == "TABLE") {
                modify_table(table);
            }
        }
    }

    function center_content() {
        const body = document.querySelector("body");
        body.style.width = "720px"
        body.style.margin = "0 auto";

        // assuming that our tables are stored inside a div
        const table_divs = body.querySelectorAll("div.table");
        modify_tables(table_divs);
    }

    addEventListener("load", (event) => center_content());
})();
