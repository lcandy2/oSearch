// DEBUG use

let lnsearch = document.createElement("link");
lnsearch.setAttribute("rel", "search");
lnsearch.setAttribute("type", "application/opensearchdescription+xml");
//
lnsearch.setAttribute("href", "");

lnsearch.setAttribute("title", "oSearch");

function setOpenSearch() {
    if (
        document.querySelector('[type="application/opensearchdescription+xml"]')
    ) {
        console.log("[DEBUG] OpenSearch already existed");
        removeOpenSearch();
        setOpenSearch();
    } else {
        document.getElementsByTagName("head")[0].appendChild(lnsearch);
        console.log("[DEBUG] OpenSearch was set to " + lnsearch.getAttribute("href"));
    }
}

function onDOMContentLoaded() {
    console.log("[DEBUG] onDOMContentLoaded");
    setOpenSearch();
    window.addEventListener("load", function() {
        console.log("[DEBUG] onload");
        //setOpenSearch();
        console.log("[DEBUG] All done!");
    });
}

function removeOpenSearch() {
    document.querySelectorAll('[type="application/opensearchdescription+xml" i]').forEach(
        function(it) {
            it.removeAttribute('type');
            console.log({ "[DEBUG] Spoiled by type removal": it });
        }
    );
}

document.addEventListener("DOMContentLoaded", onDOMContentLoaded);