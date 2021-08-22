// Initialization
chrome.runtime.onInstalled.addListener(() => {
    fetch("https://raw.githubusercontent.com/lcandy2/oSearch/development/opensearch.json")
        .then((response) => response.json())
        .then((data) => {
            chrome.storage.local.set({ json: data, });
        })
        .catch(console.error);
});

/*
chrome.runtime.onStartup.addListener(() => {
	//check update
});

chrome.storage.local.get(['initialized'], (result) => {
        console.log(result.initialized);
        if (result.initialized = 'underfined') {
            chrome.tabs.create({
                url: 'pages/welcome.html'
            });
            console.log('open welcome page');
        }
    });

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'loading') {
        chrome.scripting.executeScript({
                target: { tabId, tabId },
                files: ['opensearch_inti.js']
            })
            .then(() => {
                console.log("INJECTED sciprt");
            })
            .catch(err => console.log(err));
    }
    if (changeInfo.status === 'complete') {
        chrome.scripting.executeScript({
                target: { tabId, tabId },
                files: ['opensearch.js']
            })
            .then(() => {
                console.log("INJECTED sciprt");
            })
            .catch(err => console.log(err));
    }


});*/