$("div[data-pagelet='VideoChatHomeUnit']").toggle();

var state = !$("div[data-pagelet='VideoChatHomeUnit']").is(":visible");

chrome.storage.sync.set({
   salons: state
});