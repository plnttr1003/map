$(document).ready(function () {
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

		$('.search_input').on('keyup',function(){
			var search_header = $('.search_input').text();
			console.log('translit2: ' + transliterate(transliterate(search_header), true));

			console.log(search_header);
			$('.rasp_item').each(function() {
				var rasp_name = $(this).find('a span').text();
				//console.log($rasp_name);
				if (rasp_name.indexOf(search_header) != -1) {
					console.log('=-=-=-rus=-=-=-');
					console.log(search_header);
					console.log(rasp_name);
					$(this).removeClass('hidden_item');
				}
				else if (rasp_name.indexOf(transliterate(search_header)) != -1) {
					console.log('+-+-+-+eng+-+-+-+');
					console.log(transliterate(search_header));
					console.log(transliterate(rasp_name));
					$(this).removeClass('hidden_item');
				}
				else if (rasp_name.indexOf(transliterate(transliterate(search_header), true)) != -1) {
					console.log('+-+-+-+rus_eng+-+-+-+');
					console.log(transliterate(search_header));
					console.log(transliterate(rasp_name));
					$(this).removeClass('hidden_item');
				}
				else {
					console.log('====none====');
					$(this).addClass('hidden_item');
				}
			})
		})
});