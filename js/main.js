var mbWidth = parseFloat($('.magic-box').css('width'));
var mbHeight = parseFloat($('.magic-box').css('height'));
var rows = 32;
var columns = 32; 
var startColor = "white";



var setFields = function (r, c) {
	var boxWidth = ((mbWidth-2) / c) + 'px';
	var boxHeight = ((mbHeight-2) / r) + 'px';
	$('.magic-field').css('width', boxWidth);
	$('.magic-field').css('height', boxHeight);
}

$(document).ready(function() {
	var i;
	for (i = 0; i < columns * rows; i++) {
		$('.magic-box').append('<div class="magic-field"></div>');
	}
	$('.magic-field').css('background-color', startColor);

	setFields(rows, columns);
})

