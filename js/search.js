$(document).ready(function () {
	var $search_input = $('.search_input');

	function search() {
		var $rasp_item = $('.rasp_item'),
				search_header = $search_input.val().toLowerCase(),
				$search_container = $('.sh_block'),
				rasp_name;

		transliterate = (
			function() {
				var rus = "щ   ш  ч  ц  ю  я  ё  ж  ъ  ы  э  а б в г д е з и й к л м н о п р с т у ф х ь".split(/ +/g),
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

		$rasp_item.each(function() {
			rasp_name = $(this).find('a span').text().toLowerCase();
			if ((rasp_name.indexOf(search_header) != -1) ||
					(rasp_name.indexOf(transliterate(search_header)) != -1) ||
					(rasp_name.indexOf(transliterate(transliterate(search_header), true)) != -1))
			{
				$(this).removeClass('hidden_item_block');
			}
			else {
				$(this).addClass('hidden_item_block');
			}
		})
		delete rasp_name;
		//console.log('=-=-=-=-=-=-=-=');
		console.log($('.hidden_item_block').length);
		console.log($rasp_item.length);
		//console.log('+-+-+-+-+-+-+-+');
		$('.hidden_item_block').length === $rasp_item.length ? $search_container.addClass('empty_search') : $search_container.removeClass('empty_search');
	}

	$search_input.on('keyup',function(e){
		search();
	})
});