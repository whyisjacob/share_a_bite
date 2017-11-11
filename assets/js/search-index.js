$( document ).ready(function() {
    console.log( "ready!" );
	$("#sizing-addon1").on("click", function(){

		console.log("glyphicon clicked");
		var query = $("#search-input").val().trim();

		console.log(query);	

		var link = "https://whyisjacob.github.io/share_a_bite/recipe-list.html"

	// this might just be hardcoded, trying to avoid CORS issues
	$("#main-image").load(link);
	

//edamam api data
		var apeId = "c26ba31b";
		var apiKey = "0e164b393b7346efa7e6769658022a14";
		var queryUrl = "https://api.edamam.com/search?q=" + query + "&app_id=" + apeId + "&app_key=" + apiKey + "&from=0&to=6&callback=myfunc";
		var myfunc = function (json) {
		  alert(json);
			};

		$.ajax({
	     url: queryUrl,
	     method: "GET",
	     dataType: 'jsonp', 
	     jsonpCallback: 'myfunc', 
	 	 jsonp: 'callback'
	 	 
		    }).done(function(response) {
		    	console.log(response);
		    	console.log(response.hits[0].recipe.calories);
		    	console.log(response.hits[0].recipe.url);
		    	console.log(response.hits[0].recipe.label);

		    	var edamamZeroUrl = response.hits[0].recipe.url;
		    	var edamamOneUrl = response.hits[1].recipe.url;
		    	var edamamTwoUrl = response.hits[2].recipe.url;
		    	var edamamThreeUrl = response.hits[3].recipe.url;
		    	var edamamFourUrl = response.hits[4].recipe.url;
		    	var edamamFiveUrl = response.hits[5].recipe.url;


	
	//rapidApi & MashApe API data
				var mashApeKey = "6VjrbyPxBhmshMDBaeTjrWDPL7bYp15gxCejsnfSkIrzeSiI6W";
				var mashApeHost = "spoonacular-recipe-food-nutrition-v1.p.mashape.com";

				//ajax one

				$.ajax({
					url:"https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/extract?forceExtraction=false&url=" + edamamZeroUrl,
					method: "GET",
					headers: {
				        "X-Mashape-Key":mashApeKey,
				        "X-Mashape-Host":mashApeHost,
				    }
				    }).done(function (result) {
				   	 console.log(result);
				   	var recipeZero = {
			    		title: response.hits[0].recipe.label,
			    		author: response.hits[0].recipe.source,
			    		description: result.instructions,
			    		image: response.hits[0].recipe.image,
			    		unique: result.id
		    		}

		    		console.log(recipeZero);
		    			$("#recipeZero").text(recipeZero.title);
					});


				//ajax two

				$.ajax({
					url:"https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/extract?forceExtraction=false&url=" + edamamOneUrl,
					method: "GET",
					headers: {
				        "X-Mashape-Key":mashApeKey,
				        "X-Mashape-Host":mashApeHost,
				    }
				    }).done(function (result) {
				   	 console.log(result);
				   	var recipeOne = {
			    		title: response.hits[1].recipe.label,
			    		author: response.hits[1].recipe.source,
			    		description: result.instructions,
			    		image: response.hits[1].recipe.image,
			    		unique: result.id
		    		}

		    		console.log(recipeOne);
					});
					

				//ajax three

				$.ajax({
					url:"https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/extract?forceExtraction=false&url=" + edamamTwoUrl,
					method: "GET",
					headers: {
				        "X-Mashape-Key":mashApeKey,
				        "X-Mashape-Host":mashApeHost,
				    }
				    }).done(function (result) {
				   	 console.log(result);
				   	var recipeTwo = {
			    		title: response.hits[2].recipe.label,
			    		author: response.hits[2].recipe.source,
			    		description: result.instructions,
			    		image: response.hits[2].recipe.image,
			    		unique: result.id
		    		}

		    		console.log(recipeTwo);
					});
					

				//ajax four

				$.ajax({
					url:"https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/extract?forceExtraction=false&url=" + edamamThreeUrl,
					method: "GET",
					headers: {
				        "X-Mashape-Key":mashApeKey,
				        "X-Mashape-Host":mashApeHost,
				    }
				    }).done(function (result) {
				   	 console.log(result);
				   	var recipeThree = {
			    		title: response.hits[3].recipe.label,
			    		author: response.hits[3].recipe.source,
			    		description: result.instructions,
			    		image: response.hits[3].recipe.image,
			    		unique: result.id
		    		}

		    		console.log(recipeThree);
					});
					

				//ajax five

				$.ajax({
					url:"https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/extract?forceExtraction=false&url=" + edamamFourUrl,
					method: "GET",
					headers: {
				        "X-Mashape-Key":mashApeKey,
				        "X-Mashape-Host":mashApeHost,
				    }
				    }).done(function (result) {
				   	 console.log(result);
				   	var recipeFour = {
			    		title: response.hits[4].recipe.label,
			    		author: response.hits[4].recipe.source,
			    		description: result.instructions,
			    		image: response.hits[4].recipe.image,
			    		unique: result.id
		    		}

		    		console.log(recipeFour);
					});
					

				//ajax six

				$.ajax({
					url:"https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/extract?forceExtraction=false&url=" + edamamFiveUrl,
					method: "GET",
					headers: {
				        "X-Mashape-Key":mashApeKey,
				        "X-Mashape-Host":mashApeHost,
				    }
				    }).done(function (result) {
				   	 console.log(result);
				   	var recipeFive = {
			    		title: response.hits[5].recipe.label,
			    		author: response.hits[5].recipe.source,
			    		description: result.instructions,
			    		image: response.hits[5].recipe.image,
			    		unique: result.id
		    		}

		    		console.log(recipeFive);
					});
				})


		    //still in glyphicon on.click
				
				});

	});

		



