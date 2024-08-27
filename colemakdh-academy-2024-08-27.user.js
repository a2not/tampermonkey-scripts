// ==UserScript==
// @name         colemakdh-academy
// @namespace    http://tampermonkey.net/
// @version      2024-08-27
// @description  Colemak Academy: `colemak-DH` by default
// @author       a2not
// @match        https://www.colemak.academy/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let all = document.querySelectorAll("option[value=colemakdh]");
    if (all.length !== 1) {
        console.error('length of all match of `option[value=colemakdh]` not equal to 1.');
        return;
    }

    let node = all[0];
    node.setAttribute('selected', true);
    return;
})();
