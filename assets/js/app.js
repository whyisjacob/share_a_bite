/**
 * new_recipe.html has hard-code from this file
 */

$(document).on('click','#menu', function(){
	$('#navigation').toggleClass('hidden');
})
$(document).on('click', 'article', function(){
	$('#navigation').addClass('hidden');
})

$(document).ready(function(){

	$('#nav').load('assets/includes/head.txt')
	$('#footer').load('assets/includes/footer.txt')

// var config = {
//   apiKey: "AIzaSyCgoRfIkQr6LbDgERECflwrP4Dmi2-TPKA",
//   authDomain: "grab-a-bite-df6c2.firebaseapp.com",
//   databaseURL: "https://grab-a-bite-df6c2.firebaseio.com",
//   projectId: "grab-a-bite-df6c2",
//   storageBucket: "grab-a-bite-df6c2.appspot.com",
//   messagingSenderId: "915542502205"
// };
// firebase.initializeApp(config);
// var login = firebase.database();
firebase.auth().onAuthStateChanged(function(user) {

  if (user) {
    // User is signed in.
    console.log('!!!==== app.js knows user is logged in !!!====');
    $('#login').attr('href','user.html').html('My Account <span class="glyphicon glyphicon-user"></span>')
    $('#search').html('Sign Out').attr('href','logout.html')


  } else {
    // No user is signed in.
    console.log('!!!==== app.js doesn\'t know of a user being logged in !!!====');
  }
});

})
