$(document).ready(function () {
	function search() {
		//alert('123');
			transliterate = (
				function() {
					var
						rus = "щ   ш  ч  ц  ю  я  ё  ж  ъ  ы  э  а б в г д е з и й к л м н о п р с т у ф х ь".split(/ +/g),
						eng = "shh sh ch cz yu ya yo zh `` y' e` a b v g d e z i j k l m n o p r s t u f x `".split(/ +/g);
					return function(text, engToRus) {
						var x;
						for(x = 0; x < rus.length; x++) {
							text = text.split(engToRus ? eng[x] : rus[x]).join(engToRus ? rus[x] : eng[x]);
							text = text.split(engToRus ? eng[x].toUpperCase() : rus[x].toUpperCase()).join(engToRus ? rus[x].toUpperCase() : eng[x].toUpperCase());	
						}
						return text;
					}
				}
			)();

			var search_header = $('.search_input').text().toLowerCase(),
					rasp_name;
			$('.rasp_item').each(function() {
				//$(this).css({'outline':'2px solid #000'});
				rasp_name = $(this).find('a span').text().toLowerCase();
				//console.log($rasp_name);
				if ((rasp_name.indexOf(search_header) != -1) ||
						(rasp_name.indexOf(transliterate(search_header)) != -1) ||
						(rasp_name.indexOf(transliterate(transliterate(search_header), true)) != -1))
				{
					console.log('=-=-=-rus=-=-=-');
					console.log(search_header);
					console.log(transliterate(search_header));
					console.log(rasp_name);
					$(this).removeClass('hidden_item');
					//$(this).css({'outline':'4px solid #000'});
				}
				else {
					console.log('====none====');
					$(this).addClass('hidden_item');
				}
			})
			delete rasp_name;
			console.log('uu: ' + rasp_name);
		}

	$('.search_input').on('keyup',function(e){search()})
});