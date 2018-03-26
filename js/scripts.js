"use strict";

var slider = document.getElementById('slider'),
	getSlide = document.querySelectorAll('.slider .slide'),
	slides = [],
	slide = 0;

for (var i = 0; i < getSlide.length; i++) {
	slides[i] = getSlide[i];
}

var slideInt = setInterval(function() {
	slides[slide].style.marginLeft = '-100%';
	if (++slide == slides.length - 1) {
		slides.push(slides[0]);

	}
}, 1000);


// function slideChange() {
// 	slideForward();

// 	function slideForward(argument) {
// 		var slideInt = setInterval(function() {
// 			slider.style.right = (slide * 100) + '%';

// 			if (++slide == 3) {
// 				slide = 1;
// 				clearInterval(slideInt);
// 				slideBack();
// 			}
// 		}, 2000);
// 	}

// 	function slideBack() {
// 		var slideInt = setInterval(function() {
// 			slider.style.right = (slide * 100) + '%';

// 			if (--slide == -1) {
// 				slide = 1;
// 				clearInterval(slideInt);
// 				slideForward();
// 			}
// 		}, 2000);
// 	}

// }

// slideChange();
