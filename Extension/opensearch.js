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
    return lnsearch;
};

// suggestions link
// ignore for now
// let lnsg = document.createElement("link");
// lnsg.setAttribute("rel", "suggestions");

// Codes below are based on https://github.com/gregsadetsky/chrome-dont-add-custom-search-engines/blob/master/src/content.js
// Special thanks to @gregsadetsky

let setOpenSearch = (lnsearch) => {
    if ( document.querySelector('[type="application/opensearchdescription+xml"]') ) {
        if (DEBUG) console.info("OpenSearch already existed");
    } else {
        if (DEBUG) console.log("title: " + lnsearch.getAttribute("title"));
        if (DEBUG) console.log("href: " + lnsearch.getAttribute("href"));
        document.getElementsByTagName("head")[0].appendChild(lnsearch);
        if (DEBUG) console.info("OpenSearch was set to " + lnsearch.getAttribute("href"));
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

chrome.storage.local.get(['json'],(result) => {
    let host = getHost();
    if (DEBUG) console.log("Get local data already");
    if(result.json.opensearch[host] !== undefined) {
        if (DEBUG) console.log("opensearch.json exist");
        
        // init lnsearch
        let lnsearch = setLnSearch(result.json.opensearch[host]);
        if(result.json.opensearch[host].type == (1 || 2)){
            lnsearch.setAttribute("href", result.json.xmlUrl + host + "/opensearch.xml");
        } else { 
            lnsearch.setAttribute("href", result.json.opensearch[host].href);
        }

        document.addEventListener("DOMContentLoaded", onDOMContentLoaded(lnsearch));
    } else {
        if (DEBUG) console.log("opensearch.json don't exist");
    }
});