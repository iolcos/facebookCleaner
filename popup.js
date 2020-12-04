function birthdayHandler(e) {
    chrome.runtime.sendMessage({directive: "toggle-birthday"});
}

function storiesHandler(e) {
    chrome.runtime.sendMessage({directive: "toggle-stories"});
}

function salonsHandler(e) {
    chrome.runtime.sendMessage({directive: "toggle-salons"});
}

function youMayKnowHandler(e) {
    chrome.runtime.sendMessage({directive: "toggle-youmayknow"});
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('birthday').addEventListener('change', birthdayHandler);
    document.getElementById('stories').addEventListener('change', storiesHandler);
    document.getElementById('salons').addEventListener('change', salonsHandler);
    document.getElementById('youmayknow').addEventListener('change', youMayKnowHandler);
});

chrome.storage.sync.get({
	birthday: false,
	stories: false,
	salons: false,
	youMayKnow: false
}, function(items) {
	items.birthday ? $("#birthday").prop( "checked", true ) : null;
	items.stories ? $("#stories").prop( "checked", true ) : null;
	items.salons ? $("#salons").prop( "checked", true ) : null;
	items.youMayKnow ?  $("#youmayknow").prop( "checked", true ) :null;
});