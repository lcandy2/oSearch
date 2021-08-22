function i18n() {
    // page_welcome
    setChildTextNode('welcome', chrome.i18n.getMessage("page_welcome_welcome"));
    setChildTextNode('initialization', chrome.i18n.getMessage("page_welcome_initialization"));
    setChildTextNode('defaultTitle', chrome.i18n.getMessage("page_welcome_default"));
    setChildTextNode('defaultDescription', chrome.i18n.getMessage("page_welcome_default_description"));
    setChildTextNode('customTitle', chrome.i18n.getMessage("page_welcome_custom") + "【不可用】");
    setChildTextNode('customDescription', chrome.i18n.getMessage("page_welcome_custom_description"));
    setChildTextNode('terms', chrome.i18n.getMessage("page_welcome_terms") + chrome.i18n.getMessage("page_welcome_terms_link"));
    // page_popup
    setChildTextNode('working', chrome.i18n.getMessage("page_popup_working"));
    setChildTextNode('more', chrome.i18n.getMessage("page_popup_more"));
}

function setChildTextNode(elementId, text) {
    if (document.getElementById(elementId)) document.getElementById(elementId).innerText = text;
}

document.addEventListener('DOMContentLoaded', () => {
    i18n();
});