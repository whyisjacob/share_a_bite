jQuery(document).ready(function() {
	  jQuery("time.timeago").timeago();
	});

	/**
	* @description Displays contents of recipe sections
	*/
	$(document).on('click','h4', function(){
		var display = $(this).attr('data-display');
		if(display == 'hidden'){
			$(this).attr('data-display','show');
			$(this).children('span').attr('class', 'glyphicon glyphicon-menu-down');
			$(this).siblings('div').removeClass('hidden');
		} else {
			$(this).attr('data-display','hidden');
			$(this).children('span').attr('class', 'glyphicon glyphicon-menu-right');
			$(this).siblings('div').addClass('hidden');
		}
	});

	$(document).on('click','li', function(){

		//I'd like to give the unordered lists a data-attribute with a value that represents the ingredient listed inside. Ingredient by itself, not including the measurement, etc. Adding the nutritional value by presented measurement could be an interesting little math project.
	//edamam api data & converting JSONP into JSON
	console.log(this);
		var query = $(this).val().trim();
		console.log(query);
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
 	 
	    }).done(function(response) {
    		console.log(response);
    		console.log(response.hits[0]);
    		console.log(response.hits[0].recipe.calories);

		})
	});

	/**
	* @description Menu Display
	*/
	// $(document).on('click','#menu', function(){
	// 	$('#navigation').toggleClass('hidden');
	// })
	// $(document).on('click', 'article', function(){
	// 	$('#navigation').addClass('hidden');
	// })