const DEBUG = true;

let url = new URL(window.location.href);
let host = url.host;
host = host.replace("www.", "");
console.log(host);

let xhr = new XMLHttpRequest();
xhr.open(
	"GET",
	"https://raw.githubusercontent.com/lcandy2/oSearch/development/opensearch.json",
	false
);
xhr.send();
let data = JSON.parse(xhr.responseText)
console.log(data.opensearch[host].title);

// tab to search link
let lnsearch = document.createElement("link");
lnsearch.setAttribute("rel", "search");
lnsearch.setAttribute("type", "application/opensearchdescription+xml");
// should get from api
lnsearch.setAttribute("title", data.opensearch[host].title);
lnsearch.setAttribute("href", data.opensearch[host].href);

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
		if (DEBUG) console.info("OpenSearch was set");
	}
} //setOpenSearch

function onDOMContentLoaded() {
	if (DEBUG) console.log("onDOMContentLoaded");
	setOpenSearch();
	window.addEventListener("load", function () {
		if (DEBUG) console.log("onload");
		setOpenSearch();
		console.log("All done");
	}); // #3
} //onDOMContentLoaded

document.addEventListener("DOMContentLoaded", onDOMContentLoaded);
