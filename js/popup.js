/**
 * Global Vars
 */
var interval_ref = 0;	//reference var to hold interval

/**
 * Updates the score. Fetches from Cricinfo and displays it.
 */
function updateScore()
{
	$.ajax({url: "http://static.cricinfo.com/rss/livescores.xml"})
	 .done(function(data) {
		$item = $(data).find("item");
		$description = $item.find("description");

		//hide loading text
		$("#loadingWrap").addClass("hidden");

		//display score!
		$("#scoreWrap").html($description.text());
		$("#scoreWrap").removeClass("hidden");
	 });
}

/**
 * Whenever popup.html is loaded, display the scores.
 * Also set the interval so that it updates the score every minute.
 */
$(document).ready(function() {
	//update score right now!
	updateScore();

	//Update the scores every minute.
	interval_ref = setInterval(updateScore, 60*1000);
});