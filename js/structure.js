// построение структуры

$(document).ready(function() {
	// css
	console.log(config.imax);
	if (config.mainCss === true) {$('head').append(mainCss)}
	if (config.imax === true) {$('head').append(imax)}

	//blocks
	if (config.header === true) {$('body script').last().after(header)}
	if (config.footer === true) {$('body').append(footer)}
})