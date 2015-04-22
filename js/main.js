var mbWidth = parseFloat($('.magic-box').css('width'));
var mbHeight = parseFloat($('.magic-box').css('height'));
var rows = 16;
var columns = 16; 
var startColor = "#888";
var usedColor = "white";


var setFields = function (r, c) {
	var boxWidth = ((mbWidth-2) / c) + 'px';
	var boxHeight = ((mbHeight-2) / r) + 'px';
	$('.magic-field').css('width', boxWidth);
	$('.magic-field').css('height', boxHeight);
}

var createBox = function (rows, columns) {
	$('div.magic-field').remove();
	var i;
	for (i = 0; i < columns * rows; i++) {
		$('.magic-box').append('<div class="magic-field"></div>');
	}
}

var paintFields = function () {
	$('.magic-field').css('background-color', startColor);
	$('div.magic-field').hover(function() {
		$(this).css('background-color', usedColor);
	});
}

var userFields = function () {
	var r = prompt("Specify the number of rows:");
	if (isNaN(r)) {
		alert("The value must be a number, mate!");
		return false;
	} else if (r < 1 || r > 64) {
		alert("The value must be a number between 1 and 64.");
		return false;
	}
	createBox(r, r);
	paintFields();
	setFields(r, r);
}

$(document).ready(function() {
	createBox(rows, columns);
	paintFields();
	setFields(rows, columns);
})



