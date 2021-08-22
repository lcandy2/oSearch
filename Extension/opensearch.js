const DEBUG = true;

let url = new URL(window.location.href);
let host = url.host;
host = host.replace("www.", "");
if (DEBUG) console.log("current: " + host);

// suggestions link
// ignore for now
let lnsg = document.createElement("link");
lnsg.setAttribute("rel", "suggestions");

// Codes below are based on https://github.com/gregsadetsky/chrome-dont-add-custom-search-engines/blob/master/src/content.js
// Special thanks to @gregsadetsky

function setOpenSearch(data) {
    if (
        document.querySelector('[type="application/opensearchdescription+xml"]')
    ) {
        if (DEBUG) console.info("OpenSearch already existed");
    } else {
        // tab to search link
        let lnsearch = document.createElement("link");
        lnsearch.setAttribute("rel", "search");
        lnsearch.setAttribute("type", "application/opensearchdescription+xml");
        // should get from api
        lnsearch.setAttribute("title", data.title);
        lnsearch.setAttribute("href", data.href);
        if (DEBUG) console.log("title: " + lnsearch.getAttribute("title"));
        if (DEBUG) console.log("href: " + lnsearch.getAttribute("href"));
        document.getElementsByTagName("head")[0].appendChild(lnsearch);
        if (DEBUG) console.info("OpenSearch was set to " + lnsearch.getAttribute("href"));
    }
} //setOpenSearch

function onDOMContentLoaded(data) {
    if (DEBUG) console.log("onDOMContentLoaded");
    setOpenSearch(data);
    window.addEventListener("load", function() {
        if (DEBUG) console.log("onload");
        setOpenSearch(data);
        if (DEBUG) console.log("All done");
    }); // #3
} //onDOMContentLoaded

chrome.storage.local.get(['json'],(result) => {
    if(result.json.opensearch[host] !== undefined) {
        document.addEventListener("DOMContentLoaded", onDOMContentLoaded(result.json.opensearch[host]));
    }
});