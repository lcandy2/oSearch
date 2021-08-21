// apply to the page
if (document.querySelector('[type="application/opensearchdescription+xml"]')) { if (DEBUG) console.info('OpenSearch already existed'); } else {
    document.getElementsByTagName("head")[0].appendChild(lnsearch);
    if (DEBUG) console.info('OpenSearch was set');
}