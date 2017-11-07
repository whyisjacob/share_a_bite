$( document ).ready(function() {
    console.log( "ready!" );
	$("#sizing-addon1").on("click", function(){

		console.log("glyphicon clicked");
		var query = $("#search-input").val().trim();

		console.log(query);	
		
		var link = "https://whyisjacob.github.io/share_a_bite/recipe-list.html"

	// this might just be hardcoded, trying to avoid CORS issues
	// $("#main-image").load(link);
	// });
	// Initialize Firebase
		  // var config = {
		  //   apiKey: "AIzaSyCgoRfIkQr6LbDgERECflwrP4Dmi2-TPKA",
		  //   authDomain: "grab-a-bite-df6c2.firebaseapp.com",
		  //   databaseURL: "https://grab-a-bite-df6c2.firebaseio.com",
		  //   projectId: "grab-a-bite-df6c2",
		  //   storageBucket: "grab-a-bite-df6c2.appspot.com",
		  //   messagingSenderId: "915542502205"
		  // };

		  // firebase.initializeApp(config);

//edamam api data
var appId = "c26ba31b";
var apiKey = "0e164b393b7346efa7e6769658022a14";
var queryUrl = "https://api.edamam.com/search?q=" + query + "&app_id=${" + appId + "}&app_key=${" + apiKey + "}&from=0&to=6";
 
$.ajax({
      url: queryUrl,
      method: "GET"
    }).done(function(response) {
      console.log(response);

    });

});
});
