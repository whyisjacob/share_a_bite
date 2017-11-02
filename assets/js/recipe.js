jQuery(document).ready(function() {
	  jQuery("time.timeago").timeago();
	});

	/**
	* @description Displays contents of recipe sections
	*/
	$('h4').on('click', function(){
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
	$('#menu').on('click',function(){
		$('#navigation').toggleClass('hidden');
	})
	$('article').on('click',function(){
		$('#navigation').addClass('hidden');
	})