"use strict";

const DEBUG = true;

let getHost = () => {
    let url = new URL(window.location.href);
    let host = url.host.replace("www.", "");
    if (DEBUG) console.log("current: " + host);
    return host;
};

let setLnSearch = (data) => {
    let lnsearch = document.createElement("link");
        lnsearch.setAttribute("rel", "search");
        lnsearch.setAttribute("type", "application/opensearchdescription+xml");
        // should get from api
        lnsearch.setAttribute("title", data.title);
        lnsearch.setAttribute("href", data.href);
    return lnsearch;
};

// suggestions link
// ignore for now
// let lnsg = document.createElement("link");
// lnsg.setAttribute("rel", "suggestions");

// Codes below are based on https://github.com/gregsadetsky/chrome-dont-add-custom-search-engines/blob/master/src/content.js
// Special thanks to @gregsadetsky

let setOpenSearch = (data) => {
    if ( document.querySelector('[type="application/opensearchdescription+xml"]') ) {
        if (DEBUG) console.info("OpenSearch already existed");
    } else {
        let lnsearch = setLnSearch(data);
        if (DEBUG) console.log("title: " + data.title);
        if (DEBUG) console.log("href: " + data.href);
        document.getElementsByTagName("head")[0].appendChild(lnsearch);
        if (DEBUG) console.info("OpenSearch was set to " + lnsearch.getAttribute("href"));
    }
} //setOpenSearch

let onDOMContentLoaded = (data) => {
    if (DEBUG) console.log("onDOMContentLoaded");
    setOpenSearch(data);
    window.addEventListener("load", function() {
        if (DEBUG) console.log("onload");
        setOpenSearch(data);
        if (DEBUG) console.log("All done");
    }); // #3
} //onDOMContentLoaded

chrome.storage.local.get(['json'],(result) => {
    let host = getHost();
    if(result.json.opensearch[host] !== undefined) {
        document.addEventListener("DOMContentLoaded", onDOMContentLoaded(result.json.opensearch[host]));
    }
});