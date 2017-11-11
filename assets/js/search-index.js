$( document ).ready(function() {
    console.log( "ready!" );
    var config = {
		  apiKey: "AIzaSyCgoRfIkQr6LbDgERECflwrP4Dmi2-TPKA",
		  authDomain: "grab-a-bite-df6c2.firebaseapp.com",
		  databaseURL: "https://grab-a-bite-df6c2.firebaseio.com",
		  projectId: "grab-a-bite-df6c2",
		  storageBucket: "grab-a-bite-df6c2.appspot.com",
		  messagingSenderId: "915542502205"
		};
		firebase.initializeApp(config);

		var database = firebase.database();
		var defaultAuth = firebase.auth();
		console.log(defaultAuth)
	$("#sizing-addon1").on("click", function(){

		console.log("glyphicon clicked");
		var query = $("#search-input").val().trim();

		console.log(query);	

		var rLink = "https://whyisjacob.github.io/share_a_bite/recipe-list.html";
		var devLink = "../recipe-list.html";
		var fLink = "https://whyisjacob.github.io/share_a_bite/results.html?rkey="


	// this might just be hardcoded, trying to avoid CORS issues
	$("#main-image").load(rLink).addClass(".for-hiding");

	var uEmail,
		displayName,
		emailVerified,
		photoURL,
		isAnonymous,
		uid = 'Public',
		providerData;

	var d = new Date();
	var y = d.getFullYear();
	var m = d.getMonth();
	console.log(m);
	switch(m){
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
			m = 0 + d.getMonth();
		break;
	}
	m++//since it pulls the month previous to current month

	d = d.getDate();
	switch(d){
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
			d = '0' + d.getDate();
		break;
	}

	var dateStamp = y + '-' + m + '-' + d;

		

//edamam api data
		var apeId = "c26ba31b";
		var apiKey = "0e164b393b7346efa7e6769658022a14";
		var queryUrl = "https://api.edamam.com/search?q=" + query + "&app_id=" + apeId + "&app_key=" + apiKey + "&from=0&to=3&callback=myfunc";
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
			    		ingredients: response.hits[0].recipe.ingredientLines,
			    		description: result.instructions,
			    		image: response.hits[0].recipe.image,
			    		servings: result.servings,
			    		unique: result.id
		    		}

		    		console.log(recipeZero);
		    			$("#recipeZero").text(recipeZero.title);
		    			$("#authorZero").text("Added By: " + recipeZero.author);
		    			var rImage = $("<img>").attr("src", recipeZero.image).attr("alt", recipeZero.title).attr("target", "_blank").attr("data-ID", recipeZero.unique).css("cursor", "pointer");
		    			rImage.addClass("rec-image");
		    			$(".recipeImageZero").append(rImage);
		    			$(".descriptionZero").append(recipeZero.description);

		    			function addrecipe(){
						// uncomment if you get an error about firebase not being configured
						firebase.initializeApp(config);


						//set up appropriate variables
						var rName = recipeZero.title,
							ringredients = [],
							rDirections = [],
							rServings = result.servings,
							rImage = recipeZero.image,
							isPub = 'Y'; //$('#ispub').val()

						//put all of the ingredients into an array
							var vI = recipeZero.ingredients;
							console.log(vI)
							ringredients.push(vI);
						

						//put all of the directions/steps (if separated) in to an array
							var vD = recipeZero.description;
							console.log(vD)
							rDirections.push(vD);


						//build the object with all recipe data
						var postData={
							enterBy:recipeZero.author,
							user:uid,
							rName: recipeZero.unique,
							rStory: "",
							ringredients: ringredients,
							rDirections: rDirections,
							rServings: rServings,
							rImage: rImage,
							rCategories: "",
							date:dateStamp
						}
						var newPostKey = firebase.database().ref().child('recipes').push().key;

						var updates = {};
						updates['public-recipes/' + newPostKey] = postData;
						updates['/user-recipes/' + uid + '/' + newPostKey] = postData;
						return database.ref().update(updates);
						localStorage.setItem("postKey", newPostKey);
						console.log(newPostKey);
						}

						

						$('body').on('click','img',function(){
							addrecipe();
							console.log("toast, maybe I did something");
							var gotPostKey = localStorage.getItem(postKey);
							console.log(gotPostKey);
						// results.html?rkey=[whatever the rKey is]
							var sendieLink = fLink + gotPostKey;
							console.log(sendieLink);
							console.log(gotPostKey);	
							$("body").load(sendieLink);
							$(".recipe>h3").append(recipeZero.author);
							$(".recipe_image").append(rImage);
							$("#ingredients_list").append(recipeZero.ingredients);
							$("#steps").append(recipeZero.description);





						});
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
			    		ingredients: response.hits[0].recipe.ingredientLines,
			    		description: result.instructions,
			    		image: response.hits[1].recipe.image,
			    		servings: result.servings,
			    		unique: result.id
		    		}

		    		console.log(recipeOne);
		    			$("#recipeOne").text(recipeOne.title);
		    			$("#authorOne").text("Added By: " + recipeOne.author);
		    			var rImage = $("<img>").attr("src", recipeOne.image).attr("alt", recipeOne.title).attr("target", "_blank").attr("data-ID", recipeOne.unique).css("cursor", "pointer");
		    			rImage.addClass("rec-image");
		    			$(".recipeImageOne").append(rImage);
		    			$(".descriptionOne").append(recipeOne.description);
		    			function addrecipe(){
						// uncomment if you get an error about firebase not being configured
						firebase.initializeApp(config);


						//set up appropriate variables
						var rName = recipeOne.title,
							ringredients = [],
							rDirections = [],
							rServings = result.servings,
							rImage = recipeOne.image,
							isPub = 'Y'; //$('#ispub').val()

						//put all of the ingredients into an array
							var vI = recipeOne.ingredients;
							console.log(vI)
							ringredients.push(vI);

						//put all of the directions/steps (if separated) in to an array
							var vD = recipeOne.description;
							console.log(vD)
							rDirections.push(vD);


						//build the object with all recipe data
						var postData={
							enterBy:recipeOne.author,
							user:uid,
							rName: recipeOne.unique,
							rStory: "",
							ringredients: ringredients,
							rDirections: rDirections,
							rServings: rServings,
							rImage: rImage,
							rCategories: "",
							date:dateStamp
						}
						var newPostKey = firebase.database().ref().child('recipes').push().key;

						var updates = {};
						updates['public-recipes/' + newPostKey] = postData;
						updates['/user-recipes/' + uid + '/' + newPostKey] = postData;
						return database.ref().update(updates);
						localStorage.setItem("postKey", newPostKey);
						console.log(newPostKey);


						}
						

						$('body').on('click','img',function(){
							addrecipe();
							console.log("toast, maybe I did something");
							var gotPostKey = localStorage.getItem(postKey);
							console.log(gotPostKey);
						// results.html?rkey=[whatever the rKey is]
							var sendieLink = fLink + gotPostKey;
							console.log(sendieLink);
							console.log(gotPostKey);
							$("body").load(sendieLink);
							$(".recipe>h3").append(recipeOne.author);
							$(".recipe_image").append(rImage);
							$("#ingredients_list").append(recipeOne.ingredients);
							$("#steps").append(recipeOne.description);



						});
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
			    		ingredients: response.hits[0].recipe.ingredientLines,
			    		description: result.instructions,
			    		image: response.hits[2].recipe.image,
			    		servings: result.servings,
			    		unique: result.id
		    		}

		    		console.log(recipeTwo);
		    			$("#recipeTwo").text(recipeTwo.title);
		    			$("#authorTwo").text("Added By: " + recipeTwo.author);
		    			var rImage = $("<img>").attr("src", recipeTwo.image).attr("alt", recipeTwo.title).attr("target", "_blank").attr("data-ID", recipeTwo.unique).css("cursor", "pointer");
		    			rImage.addClass("rec-image");
		    			$(".recipeImageTwo").append(rImage);
		    			$(".descriptionTwo").append(recipeTwo.description);
		    			function addrecipe(){
						// uncomment if you get an error about firebase not being configured
						firebase.initializeApp(config);


						//set up appropriate variables
						var rName = recipeTwo.title,
							ringredients = [],
							rDirections = [],
							rServings = result.servings,
							rImage = recipeTwo.image,
							isPub = 'Y'; //$('#ispub').val()

						//put all of the ingredients into an array
							var vI = recipeTwo.ingredients;
							console.log(vI)
							ringredients.push(vI);

						//put all of the directions/steps (if separated) in to an array
							var vD = recipeTwo.description;
							console.log(vD)
							rDirections.push(vD);


						//build the object with all recipe data
						var postData={
							enterBy:recipeTwo.author,
							user:uid,
							rName: recipeTwo.unique,
							rStory: "",
							ringredients: ringredients,
							rDirections: rDirections,
							rServings: rServings,
							rImage: rImage,
							rCategories: "",
							date:dateStamp
						}
						var newPostKey = firebase.database().ref().child('recipes').push().key;

						var updates = {};
						updates['public-recipes/' + newPostKey] = postData;
						updates['/user-recipes/' + uid + '/' + newPostKey] = postData;
						return database.ref().update(updates);
						localStorage.setItem("postKey", newPostKey);
						console.log(newPostKey);
						}
						
						var gotPostKey = localStorage.getItem(postKey);
						var sendieLink = fLink + gotPostKey;

						$('body').on('click','img',function(){
							addrecipe();
							console.log("toast, maybe I did something");
							var gotPostKey = localStorage.getItem(postKey);
							console.log(gotPostKey);
						// results.html?rkey=[whatever the rKey is]
							var sendieLink = fLink + gotPostKey;
							console.log(sendieLink);
							console.log(gotPostKey);

							$("body").load(sendieLink);

							$(".recipe>h3").append(recipeTwo.author);
							$(".recipe_image").append(rImage);
							$("#ingredients_list").append(recipeTwo.ingredients);
							$("#steps").append(recipeTwo.description);


						});
					});



function addrecipe(){
	// uncomment if you get an error about firebase not being configured
	// firebase.initializeApp(config);


	//set up appropriate variables
	var rName = $('#recipe_name').val(),
		ringredients = [],
		rDirections = [],
		rServings = $('#servings').val(),
		rImage = $('#image').val(),
		isPub = 'Y'; //$('#ispub').val()

	//put all of the ingredients into an array
	$('.ingredients').each(function(i,val){
		var v = $(val).val();
		console.log(v)
		ringredients.push(v);
	})

	//put all of the directions/steps (if separated) in to an array
	$('.directions').each(function(i,val){
		var v = $(val).val();
		console.log(v)
		rDirections.push(v);
	})


	//build the object with all recipe data
	var postData={
		enterBy:displayName,
		user:uid,
		rName: rName,
		rStory: rStory,
		ringredients: ringredients,
		rDirections: rDirections,
		oTemp: oTemp,
		rTime: rTime,
		rServings: rServings,
		rImage: rImage,
		rCategories: rCategories,
		date:dateStamp
	}
	var newPostKey = firebase.database().ref().child('recipes').push().key;

	var updates = {};
	updates['public-recipes/' + newPostKey] = postData;
	updates['/user-recipes/' + uid + '/' + newPostKey] = postData;
	return database.ref().update(updates);

	}


		    //still in glyphicon on.click
				
		});
})
})





		



