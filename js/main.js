var mbWidth = parseFloat($('.magic-box').css('width'));
var mbHeight = parseFloat($('.magic-box').css('height'));
var rows = 32;
var columns = 32; 
var startColor = "#C9C9C9";
var usedColor = "black";
var clicked = false;
var rand = false;

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

var paintFields = function (color) {
	$('.magic-field').css('background-color', startColor);
  	$('.magic-box').on('mouseover', 'div', function() {
        if(clicked) {
        	if (rand) {
        		$(document).mousemove(function() {
					color = random();
				});
        	}
            $(this).css('background-color', color);
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
	paintFields(usedColor);
	setFields(r, r);
}

var reset = function () {
	$('.magic-field').css('background-color', startColor);
}

var random = function () {
	var r = Math.floor((Math.random() * 255));
	var g = Math.floor((Math.random() * 255));
	var b = Math.floor((Math.random() * 255));
	var rgb = "rgb(" + r + "," + g + "," + b +")";
	return rgb;
}

$(document).ready(function() {
	$(document).mousedown(function() {
		clicked = true;
	}).mouseup(function() {
		clicked = false;
	});

	$('.colors button').click(function() {
		paintFields(usedColor);
	});


	$('.random').on('click', function () {
		if (!rand) {
			rand = true;
			$(this).addClass('active');
		} else {
			rand = false;
			$(this).removeClass('active');
			paintFields("black");
		}
	});

	createBox(rows, columns);
	paintFields(usedColor);
	setFields(rows, columns);
})
