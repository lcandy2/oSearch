"use strict";

const DEBUG = false;

let getHost = () => {
    let url = new URL(window.location.href);
    let host = url.host.replace("www.", "");
    return host;
};

let setlnSearch = (data) => {
    let lnsearch = document.createElement("link");
    lnsearch.setAttribute("rel", "search");
    lnsearch.setAttribute("type", "application/opensearchdescription+xml");
    // should get from api
    lnsearch.setAttribute("title", data.title);
    return lnsearch;
};

/* suggestions link
   ignore for now
let lnsg = document.createElement("link");
lnsg.setAttribute("rel", "suggestions"); */

// Codes below are based on https://github.com/gregsadetsky/chrome-dont-add-custom-search-engines/blob/master/src/content.js
// Special thanks to @gregsadetsky

let setOpenSearch = (lnsearch) => {
        if (document.querySelector('[type="application/opensearchdescription+xml"]')) {
            if (DEBUG) console.log("OpenSearch already existed");
        } else {
            if (DEBUG) console.info("title: " + lnsearch.getAttribute("title"));
            if (DEBUG) console.info("href: " + lnsearch.getAttribute("href"));
            document.getElementsByTagName("head")[0].appendChild(lnsearch);
            if (DEBUG) console.log("OpenSearch was set to " + lnsearch.getAttribute("href"));
        }
    } //setOpenSearch

let onDOMContentLoaded = (lnsearch) => {
        if (DEBUG) console.log("onDOMContentLoaded");
        setOpenSearch(lnsearch);
        window.addEventListener("load", function() {
            if (DEBUG) console.log("onload");
            setOpenSearch(lnsearch);
            if (DEBUG) console.log("All done");
        }); // #3
    } //onDOMContentLoaded

let removeOpenSearch = (lnsearch) => {
    document.querySelectorAll('[type="application/opensearchdescription+xml" i]').forEach(
        function(it) {
            it.removeAttribute('type');
            if (DEBUG) console.info({ "Spoiled by type removal": it });
        }
    );
}

chrome.storage.local.get(['json'], (result) => {
    let host = getHost();
    if (DEBUG) console.info("current: " + host);
    if (result.json.opensearch[host] !== undefined) {
        if (DEBUG) console.log("opensearch.json exist");

        // init lnsearch
        let lnsearch = setlnSearch(result.json.opensearch[host]);
        if (DEBUG) console.log("type is " + result.json.opensearch[host].type);
        if (result.json.opensearch[host].type = (1 || 2)) {
            lnsearch.setAttribute("href", result.json.xmlUrl + host + result.json.xmlName);
        } else {
            lnsearch.setAttribute("href", result.json.opensearch[host].href);
        }
        if (result.json.opensearch[host].type = (2 || 5)) {
            removeOpenSearch(lnsearch);
            if (DEBUG) console.log("turn to remove OpenSearch");
        }
        if (result.json.opensearch[host].enabled) {
            document.addEventListener("DOMContentLoaded", onDOMContentLoaded(lnsearch));
        }
    } else {
        if (DEBUG) console.log("opensearch.json don't exist");
    }
});