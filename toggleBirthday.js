$("a[href='/events/birthdays/']").parents().eq(3).toggle();

var state = !$("a[href='/events/birthdays/']").parents().eq(3).is(":visible");

chrome.storage.sync.set({
   birthday: state
});