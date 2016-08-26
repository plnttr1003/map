$(document).ready(function () {
	function city_sel() {
		$('.drop_menu__i').removeClass('drop_menu__i').addClass('drop_menu__e');
		$('.drop_menu__e').on('click',function(e){
			e.preventDefault();
			$.cookie('cityLocation', $(this).attr('data-target'), {path:'/'});
			location.reload();
		})
	}
	setTimeout(city_sel, 100);

	$('.trailer_frame').on('click', function(){
		$(this).addClass('clicked');
		$('.trailer_frame').html('<ifra' + 'me width="100%" height="100%" src="https://www.youtube.com/embed/73zbG_8DtoE?rel=0&amp;controls=1&amp;showinfo=0&amp;autoplay=1" frameborder="0" allowfullscreen></ifra' + 'me>');
		return false;
	});

	$('.dot.dot2').on('click', function(){
		$('.dot').removeClass('active');
		$(this).addClass('active');
		$('.slides_inner').scrollLeft(5000);
	})
	$('.dot.dot1').on('click', function(){
		$('.dot').removeClass('active');
		$(this).addClass('active');
		$('.slides_inner').scrollLeft(0);
	})
	$('#prev').click('click', function () {
		carousel.prev();
		return false
	});
	$('#next').click('click', function () {
		carousel.next();
		return false;
	});
});