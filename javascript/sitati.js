$('.ui.dropdown').dropdown();
var homepage = function() {
	var
	fadeInFauxBorderByIndex = function(index) {
		setTimeout(function() {
			$('.fauxBorder .border').eq(index).addClass('displayed');
			if($('.fauxBorder .border').eq(index)) {
				fadeInFauxBorderByIndex(index + 1);
			}
		}, 200);
	},
	fadeInFauxBorders = function() {
		fadeInFauxBorderByIndex(0);	
	};
	fadeInFauxBorders();
}();
