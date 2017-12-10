$(document).ready(function() {
	let direction = $(".slides");
	
	let previousbutton = $("#previous");
	previousbutton.on("click", function() {
		previous();
	})
	let nextbutton = $("#next");
	nextbutton.on("click", function() {
		next();
	})
	let slide1 = $("#slide1");
	slide1.on("click", function() {
		changeslide(1);
	})
	let slide2 = $("#slide2");
	slide2.on("click", function() {
		changeslide(2);
	})
	let slide3 = $("#slide3");
	slide3.on("click", function() {
		changeslide(3);
	})
	let slide4 = $("#slide4");
	slide4.on("click", function() {
		changeslide(4);
	})
	let index = 1;
	showslide();

	function previous() {
		direction.addClass("right");
		index -= 1;
		showslide();
		if(direction.hasClass("left")){
			direction.removeClass("left");
			direction.addClass("right");
			
		}
	}

	function next() {
		direction.addClass("left");
		index += 1;
		showslide();
		if(direction.hasClass("right")){
			direction.removeClass("right");
			direction.addClass("left");
			
		}
	}

	function changeslide(number) {
		index = number;
		showslide();
	}

	function showslide() {

		let slides = $(".slides");
		// let dots = $(".dot");
		if (index > slides.length) {
			index = 1;
		}
		if (index < 1) {
			index = slides.length;
		}
		slides.hide();
		// dots.removeClass("active");
		slides.eq(index - 1).show();
		// dots.eq(index - 1).addClass("active");
	
		// setTimeout(showslide, 2000);
	}
})