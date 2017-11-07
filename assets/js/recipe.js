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
	})


	/**
	* @description Menu Display
	*/
	// $(document).on('click','#menu', function(){
	// 	$('#navigation').toggleClass('hidden');
	// })
	// $(document).on('click', 'article', function(){
	// 	$('#navigation').addClass('hidden');
	// })