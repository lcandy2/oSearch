// Initialization
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({

    });
    /*chrome.tabs.create({
        url: 'pages/welcome.html'
    });*/
});

chrome.runtime.onStartup.addListener(() => {
    //check update
});
/*
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