$(document).ready(function () {
		$('.search_input').on('keyup',function(){
			var search_header = $('.search_input').text();
			console.log(search_header);
			$('.rasp_item').each(function() {
				if ($(this).find('a span').text().indexOf(search_header) != -1) {
					console.log('1');
					console.log($(this).find('a span').text());
					$(this).removeClass('hidden_item');
				}
				else {
					$(this).addClass('hidden_item');
				}
			})
		})
});