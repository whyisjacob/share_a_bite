$( document ).ready(function() {
    console.log( "ready!" );
	$("#sizing-addon1").on("click", function(){
		console.log("glyphicon clicked");
		var query = $("#search-input").val().trim();
		console.log(query);	
		var link = "https://whyisjacob.github.io/share_a_bite/recipe-list.html"
		console.log(link);

	// this might just be hardcoded, trying to avoid CORS issues
	$(".container-fluid").load(link);
	});


});
