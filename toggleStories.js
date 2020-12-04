$("div[data-pagelet='Stories']").toggle();

var state = !$("div[data-pagelet='Stories']").is(":visible");

chrome.storage.sync.set({
   stories: state
});