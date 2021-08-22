// Initialization
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.get(['updateUrl'], (updUrl) => {
        if (updUrl.updateUrl = 'underfined') {
            chrome.storage.local.set({ updateUrl: "https://raw.githubusercontent.com/lcandy2/oSearch/main/opensearch.json" }, );
        }
    });
    update();
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