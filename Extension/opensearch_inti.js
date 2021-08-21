const DEBUG = true;

if (DEBUG) console.info('OpenSearch was injected');

// tab to search link
let lnsearch = document.createElement("link");
lnsearch.setAttribute("rel", "search");
lnsearch.setAttribute("type", "application/opensearchdescription+xml");
lnsearch.setAttribute("title", "bilibili");
lnsearch.setAttribute("href", "https://www.douban.com/opensearch");

// suggestions link
let lnsg = document.createElement("link");
lnsg.setAttribute("rel", "suggestions");

// apply to the page
if (document.querySelector('[type="application/opensearchdescription+xml"]')) { if (DEBUG) console.info('OpenSearch already existed'); } else {
    document.getElementsByTagName("head")[0].appendChild(lnsearch);
    if (DEBUG) console.info('OpenSearch was set');
}