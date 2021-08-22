const DEBUG = true;

let url = new URL(window.location.href);
let host = url.host;
host = host.replace("www.", "");
if (DEBUG) console.log("current: " + host);

let xhr = new XMLHttpRequest();
xhr.open(
    "GET",
    "https://raw.githubusercontent.com/lcandy2/oSearch/development/opensearch.json",
    false
);
xhr.send();
let data = JSON.parse(xhr.responseText)

if (data.opensearch[host].enabled) {
    if (DEBUG) console.log("[" + data.opensearch[host].enabled + "] OpenSearch was enabled.");
} else {
    if (DEBUG) console.log("[" + data.opensearch[host].enabled + "] OpenSearch was disabled, script is going to stop.[1]");
}

// tab to search link
let lnsearch = document.createElement("link");
lnsearch.setAttribute("rel", "search");
lnsearch.setAttribute("type", "application/opensearchdescription+xml");
// should get from api
lnsearch.setAttribute("title", data.opensearch[host].title);
lnsearch.setAttribute("href", data.opensearch[host].href);
if (DEBUG) console.log("title: " + lnsearch.getAttribute("title"));
if (DEBUG) console.log("href: " + lnsearch.getAttribute("href"));

// suggestions link
// ignore for now
let lnsg = document.createElement("link");
lnsg.setAttribute("rel", "suggestions");

// Codes below are based on https://github.com/gregsadetsky/chrome-dont-add-custom-search-engines/blob/master/src/content.js
// Special thanks to @gregsadetsky

function setOpenSearch() {
    if (
        document.querySelector('[type="application/opensearchdescription+xml"]')
    ) {
        if (DEBUG) console.info("OpenSearch already existed");
    } else {
        document.getElementsByTagName("head")[0].appendChild(lnsearch);
        if (DEBUG) console.info("OpenSearch was set to " + lnsearch.getAttribute("href"));
    }
} //setOpenSearch

function onDOMContentLoaded() {
    if (DEBUG) console.log("onDOMContentLoaded");
    setOpenSearch();
    window.addEventListener("load", function() {
        if (DEBUG) console.log("onload");
        setOpenSearch();
        if (DEBUG) console.log("All done");
    }); // #3
} //onDOMContentLoaded

document.addEventListener("DOMContentLoaded", onDOMContentLoaded);