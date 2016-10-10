console.log(allCinemas);
console.log(config.movie);


$(document).ready(function() {

	function city_sel() {
		$('.drop_menu__i').removeClass('drop_menu__i').addClass('drop_menu__e');
		$('.drop_menu__e').on('click',function(e){
			e.preventDefault();
			$.cookie('cityLocation', $(this).attr('data-target'), {path:'/'});
			location.reload();
		})
	}
	setTimeout(city_sel, 100);

	var
	cm,
	map,
	infoWindow,
	cinema_ids = [],
	all = allCinemas,
	grayStyles = [{featureType: "all", stylers: [{saturation: -90}, {lightness: 10}]}];

	function initialize(cm, cinema_ids) {

			var myOptions = {
			styles: grayStyles,
			zoom: 9,
			scrollwheel: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP

	};
	infoWindow = new google.maps.InfoWindow;
	map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
	var startLat;
	var startLong

	function infoCallback(infowindow, marker) {
			return function() {
				infowindow.open(map, marker);
		};
	}
	function setMarkers(map, all, cinema_ids) {
		var all2 = [];
		var latC = 0;
		var lngC =0;
		if (cinema_ids) {
				for (var i in cinema_ids) {
						for (var k in all) {
							if (all[k][0] == cinema_ids[i]) {
								all2.push(all[k]);
							}
						}
				}

				for (var i in all2) {

						var name 	= all2[i][1];
						var address = all2[i][2];
						var lat 	= all2[i][3];
						var lng 	= all2[i][4];

						latC += parseFloat(lat);
						lngC += parseFloat(lng);

						var image = 'https://kassa.rambler.ru/s/StaticContent/promo/alice/images/oval.png';
						var latlngset;
						latlngset = new google.maps.LatLng(lat, lng);
						var marker = new google.maps.Marker({map: map, position: latlngset, icon: image});
						var content = '<div class="map-content"><h3><a style="color:#fc0;" href=#' + all2[i][0] + '>' + name + '</a></h3>' + address + '<br />' + '</div>';
						var infowindow = new google.maps.InfoWindow();
						infowindow.setContent(content);
						google.maps.event.addListener(marker, 'click', infoCallback(infowindow, marker));

				}
				var pos = new google.maps.LatLng(latC/(all2.length), lngC/(all2.length));
				map.setCenter(pos);

		}
	}

	function clearMarkers() {
				setMarkers(map, null);
	}
	if (cm === 'clear') {
		clearMarkers();
	};

	if (cinema_ids) {
		//console.log('****cinema_ids*****');
		setMarkers(map, all, cinema_ids);
	}
};
	var urlPath = $('.bnt_emp_text').attr('data-location');

	$(document)
		.off('click, mouseup, mouseover').on('click', '.btn_rasp_static', function() {
		ticketManager.session("1d3a9e48-9d32-4c98-9d2a-4b29c87edd49", $(this).attr('data-session'));
	})
		.on('mouseup', '.ui-state-default', function(e) {
		e.preventDefault();
	})
		.on('click', '.date_link', function(e) {
			$('.search_input').val('');
			e.preventDefault();
			window.stop();

				$('.date_item').removeClass('active');
				$(this).parent().addClass('active');
				$('.rasp_items').addClass('rasp_hover').load('' + $(this).attr('href') + ' .rasp_items', function() {

					initialize('clear');
					$('.rasp_items').removeClass('rasp_hover');
					$('.rasp_filter.cf.s-schedule-filter').remove();
					$('.btn_rasp').removeClass('btn_rasp').addClass('btn_rasp_static');

					cinema_ids = []; ////

					$('.rasp_title').each(function() {
							var cinema_href = ($(this).find('a').attr('href')).split('-');
							$(this).find('a').attr('name',cinema_href[cinema_href.length - 1]);
			  			cinema_ids.push(cinema_href[cinema_href.length - 1]);
					});
					initialize('load', cinema_ids);
			});
	})

	if (urlPath) {urlPath = '/'+urlPath}
	else {urlPath = '/msk'}
	$('.sh_block').load('https://kassa.rambler.ru' + urlPath +  '/movie/' + config.movie + '?noredirect=1 #schedule', function() {
		initialize('clear');
		$('.rasp_filter.cf.s-schedule-filter').remove();
		$('.btn_rasp').removeClass('btn_rasp').addClass('btn_rasp_static');
		$('.rasp_title').each(function() {
				var cinema_href = ($(this).find('a').attr('href')).split('-');
				$(this).find('a').attr('name',cinema_href[cinema_href.length - 1]);
  			cinema_ids.push(cinema_href[cinema_href.length - 1]);
		});
		initialize('load', cinema_ids);
	});
})