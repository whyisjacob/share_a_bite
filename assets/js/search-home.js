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
//https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=gte%20591,%20lte%20722&health=alcohol-free
//edamam api data
var appId = "c26ba31b";
var apiKey = "0e164b393b7346efa7e6769658022a14";
var queryUrl = "https://api.edamam.com/search?q=" + query + "&app_id=" + appId + "&app_key=" + apiKey + "&from=0&to=6&callback=myfunc";
var myfunc = function (json) {
  alert(json);
}
$.ajax({
     url: queryUrl,
     method: "GET",
     dataType: 'jsonp', 
     jsonpCallback: 'myfunc', 
 	 jsonp: 'callback'
 	 // success: myfunc(json){
 	 // 	alert(json);
 	 // }
    }).done(function(response) {
    	console.log(response);

    });

});
});
