chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        switch (request.directive) {
        case "toggle-birthday":
            chrome.tabs.executeScript(null, { 
                file: "toggleBirthday.js" 
            });
            sendResponse({});
            break;
        case "toggle-stories":
            chrome.tabs.executeScript(null, { 
                file: "toggleStories.js" 
            });
            sendResponse({});
            break;
        case "toggle-salons":
            chrome.tabs.executeScript(null, {
                file: "toggleSalonsVocaux.js"
            });
            sendResponse({});
            break;
        case "toggle-youmayknow":
            chrome.tabs.executeScript(null, {
                file: "toggleYouMayKnow.js"
            });
            sendResponse({});
            break;
        default:
            alert("Unmatched request of '" + request + "' from script to background.js from " + sender);
        }
    }
);