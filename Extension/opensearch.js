const DEBUG = true;

// tab to search link
let lnsearch = document.createElement("link");
lnsearch.setAttribute("rel", "search");
lnsearch.setAttribute("type", "application/opensearchdescription+xml");
// should get from api
lnsearch.setAttribute("title", "bilibili");
lnsearch.setAttribute("href", "https://www.douban.com/opensearch");

// suggestions link
// ignore for now
let lnsg = document.createElement("link");
lnsg.setAttribute("rel", "suggestions");

// Codes below are based on https://github.com/gregsadetsky/chrome-dont-add-custom-search-engines/blob/master/src/content.js
// Special thanks to @gregsadetsky

function setOpenSearch() {
    if (document.querySelector('[type="application/opensearchdescription+xml"]')) { if (DEBUG) console.info('OpenSearch already existed'); } else {
        document.getElementsByTagName("head")[0].appendChild(lnsearch);
        if (DEBUG) console.info('OpenSearch was set');
    }
} //setOpenSearch

function onDOMContentLoaded() {
    if (DEBUG) console.log('onDOMContentLoaded');
    setOpenSearch();
    window.addEventListener('load', function() {
        if (DEBUG) console.log('onload');
        setOpenSearch();
        console.log('All done')
    }); // #3
} //onDOMContentLoaded

document.addEventListener('DOMContentLoaded', onDOMContentLoaded);