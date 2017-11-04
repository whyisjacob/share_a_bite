	$(document).on('click','#menu', function(){
		$('#navigation').toggleClass('hidden');
	})
	$(document).on('click', 'article', function(){
		$('#navigation').addClass('hidden');
	})