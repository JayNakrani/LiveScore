/**
 * Whenever popup.html is loaded, display the scores.
 */
$(document).ready( function () {
	//fetch the score from Cricinfo and display
	$.ajax({url: "http://static.cricinfo.com/rss/livescores.xml"})
	 .done(function(data) {
		// console.log(data);
		$item = $(data).find("item");
		$description = $item.find("description");
  		
  		$("#scoreWrap").html(($description.text()));
	 });
});