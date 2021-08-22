// DEBUG use

let lnsearch = document.createElement("link");
lnsearch.setAttribute("rel", "search");
lnsearch.setAttribute("type", "application/opensearchdescription+xml");
lnsearch.setAttribute("href", "https://v.qq.com/opensearch.xml");
lnsearch.setAttribute("title", "爱奇艺");
console.info("[DEBUG] title: " + lnsearch.getAttribute("title"));
console.info("[DEBUG] href: " + lnsearch.getAttribute("href"));

function setOpenSearch() {
    if (
        document.querySelector('[type="application/opensearchdescription+xml"]')
    ) {
        console.error("[DEBUG] OpenSearch already existed");
    } else {
        console.info("[DEBUG] " + lnsearch + " is going to be appendChild");
        document.getElementsByTagName("head")[0].appendChild(lnsearch);
        console.log("[DEBUG] OpenSearch was set to " + lnsearch.getAttribute("href"));
    }
}

function onDOMContentLoaded() {
    console.log("onDOMContentLoaded");
    setOpenSearch();
    window.addEventListener("load", function() {
        console.log("[DEBUG] onload");
        setOpenSearch();
        console.log("[DEBUG] All done!");
    });
}

document.addEventListener("DOMContentLoaded", onDOMContentLoaded);