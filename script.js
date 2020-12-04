function removeBirthdays(){
	$("a[href='/events/birthdays/']").parents().eq(3).hide();
}

function removeSalonsVocaux(){
	$("div[data-pagelet='VideoChatHomeUnit']").hide();
}

function removeStories(){
	$("div[data-pagelet='Stories']").hide();
}

function removeYouMayKnow(){
	$("div[aria-labelledby='jsc_c_c4']").hide();
}

chrome.storage.sync.get({
	birthday: false,
	stories: false,
	salons: false,
	youMayKnow: false
}, function(items) {
	items.birthday ? removeBirthdays() :null;
	items.stories ? removeStories() :null;
	items.salons ? removeSalonsVocaux() :null;
	items.youMayKnow ? removeYouMayKnow() :null;
});

//$("a[aria-label='Sponsorisé']").parents("div[data-pagelet^='FeedUnit']").css("background-color", "blue");