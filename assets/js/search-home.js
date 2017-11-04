$( document ).ready(function() {
    console.log( "ready!" );
	$("#sizing-addon1").on("click", function(){
		console.log("glyphicon clicked");
		var query = $("#search-input").val().trim();
		console.log(query);	
		var link = $("#sizing-addon1").attr("data-link");
		console.log(link);

	// this might just be hardcoded, trying to avoid CORS issues
	$("#sizing-addon1").load(link);
	});


});
