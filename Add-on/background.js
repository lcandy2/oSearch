// Initialization
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.get(['updateUrl'], (updUrl) => {
        if (updUrl.updateUrl = 'underfined') {
            chrome.storage.local.set({ updateUrl: "https://osearch.vercel.app/opensearch.json" }, );
            update();
        } else { update(); }
    });
});

// Update
chrome.runtime.onStartup.addListener(() => {
    update();
});

function update() {
    chrome.storage.local.get(['updateUrl'], (updUrl) => {
        fetch(updUrl.updateUrl)
            .then((response) => response.json())
            .then((data) => {
                chrome.storage.local.set({ json: data, });
                chrome.storage.local.set({ updateUrl: data.updateUrl, });
            })
            .catch(console.error);
    })
}

/*
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
