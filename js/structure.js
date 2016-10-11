// построение структуры

$(document).ready(function() {
	var $head = $('head'),
			$body = $('body'),
			$bodyScript = $('body script'),
			$containerOuter = $('.container_outer');

	// css
	console.log(config.imax);
	if (config.mainCss === true) {$head.append(mainCss)}
	if (config.imax === true) {$head.append(imax)}

	// scripts
	if (config.search[0] === true) {$bodyScript.last().after(searchScript)} // скрипт для поиска

	// blocks
	if (config.header === true) {$bodyScript.last().after(header)}
	if (config.footer === true) {$body.append(footer)}

	if (config.map[0] === true) {$containerOuter.append(mapCanvas)}
})