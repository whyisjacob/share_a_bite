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

		    	localStorage.setItem('recipe', AddToLocalStorage(response));
		    	// this function converts JSON into string to be entered into localStorage
				function AddToLocalStorage(data) {
				  if (typeof data != "string") {data = JSON.stringify(data);}
					  return data;
				}
				// this function gets string from localStorage and converts it into JSON
				function GetFromLocalStorage(key) {
				  return JSON.parse(localStorage.getItem(key));
				}

				var myData = GetFromLocalStorage("recipe");
				console.log(myData);

				});
		});
});


    
//     //making a button with the recipe searched
   
		


//    console.log("button created");
//    var master = [];

// //---------- functions


// function createButtons(){

//         //this should prevent recreating items in the list...
//         // Looping through the array of buttons and doing classes, etc. all at once.
//         for (var i = 0; i < master.length; i++) {

//           // Then dynamicaly generating buttons for each thing in array
//           var a = $("<button>");
//           // Adding classes to our button
//           a.addClass("btn btn-info text-center");
//           // Adding a data-attribute
//           a.attr("data-name", master[i]);
//           // Providing the initial button text
//           a.text(master[i]);
//           // Adding the button to the buttons-view div
//           $("#for-test").append(a);
//         }
// };

//    	function alterMasterList(){
//   //if input is blank
//   if ($("#search-input").val() === ""){
//     console.log("type something fun!");
//   } //otherwise do what I actually want this function to do
//     else {
//   master.push($("#search-input").val());
//   }
// };

// //---------- MAIN PROCESSES
// //main addition of buttons from the input
// $("#for-test").click(function(){

//   //this keeps the divs from disappearing, and the console from freaking out.
//   event.preventDefault();

//   alterMasterList();
//   // $(".for-hiding").removeAttr("hidden");
//   createButtons();

//   $("#zoo-input").val("");

// });
//    	//.on click for displaying gifs
// $("#search-input").on("click","button.thing-button", function(){
    
//     //trying to clear the div of previous gif images, too many will make super slow page

//     $("#for-test").empty();
//     // show more instructions for users.
//     $("#hide-em").removeAttr("hidden");

//     //NICE

//     //this is important to know, you need to make sure that when your gif/new.div image display function is called, it can reference the correct value with "this" and use it in its response.data, etc.
//       console.log($(this).attr("data-name"));

//       console.log("inside handler");

//         var newButton = $(this).attr("data-name");
//         var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + newButton + "&api_key=9BlNYmwgDWvberRjgJV9QfSnyt8O6fja&limit=10";

//         console.log($(this).attr("data-name"));

//         // calling AJAX and displaying the 10 gifs per button click. the .on() means it will access newly created elements, while a .click(function()) does not bind itself to dynamically created elements.
          
//           var newGif = response.data;

//           for (var i = 0; i < newGif.length; i++) {

//             var newThingDiv = $("<div class='newGif'>");

//              // Storing the rating data
//             var rating = newGif[i].rating;

//             // Creating an element to have the rating displayed
//             var pOne = $("<p>").text("Rating: " + rating);

//             // Displaying the rating
//             newThingDiv.append(pOne);

//             // Retrieving the URL for the image
//             var stillURL = response.recipe.image;

//             // Creating an element to hold the image
//             var image = $("<img>").attr("src", stillURL).attr("data-still", stillURL);

//             image.addClass("clickImg");
//             $( "div.demo-container" ).text();
//             // Appending the image
//             newThingDiv.append(image);

//             // Putting the gifs above the previous gifs
//             $("#gif-population").prepend(newThingDiv);
        
//         }
//     });

// });

// });




// });

