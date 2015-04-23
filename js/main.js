var mbWidth = parseFloat($('.magic-box').css('width'));
var mbHeight = parseFloat($('.magic-box').css('height'));
var rows = 32;
var columns = 32; 
var startColor = "#C9C9C9";
var usedColor = "white";
var clicked = false;

var setFields = function (r, c) {
	var boxWidth = (mbWidth / c) + 'px';
	var boxHeight = (mbHeight / r) + 'px';
	$('.magic-field').css('width', boxWidth);
	$('.magic-field').css('height', boxHeight);
}

var createBox = function (rows, columns) {
	$('div.magic-field').remove();
	var i;
	var boxes = columns * rows
	for (i = 0; i < boxes; i++) {
		$('.magic-box').append('<div class="magic-field"></div>');
	}
}

var paintFields = function () {
	$('.magic-field').css('background-color', startColor);
  	$('.magic-box').on('mouseover', 'div', function() {
        if(clicked) {
            $(this).css('background-color', usedColor);
        }
    })
}

var userFields = function () {
	var r = prompt("Specify the number of rows (1-90):\n(Warning: Large values could be really slow.)");
	if (isNaN(r)) {
		alert("The value must be a number, mate!");
		return false;
	} else if (r < 1 || r > 100) {
		alert("The value must be a number between 1 and 90.");
		return false;
	}
	createBox(r, r);
	paintFields();
	setFields(r, r);
}

var reset = function () {
	$('.magic-field').css('background-color', startColor);
}

$(document).ready(function() {
	$(document).mousedown(function() {
		clicked = true;
	}).mouseup(function() {
		clicked = false;
	});

	createBox(rows, columns);
	paintFields();
	setFields(rows, columns);
})
