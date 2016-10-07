$(document).ready(function () {

	function randomColor() {
		return '#' + Math.random().toString(16).slice(2, 8);
	};



	$("div").on("mouseenter", function () {
    $(this).css('background-color', randomColor());
    $(this).css('z-index', "100000");
  $("#piano-" + Math.ceil(Math.random() * 16))[0].play();
	});


	$("div").on("mouseleave", function () {
		$(this).css('background-color','black');
		$(this).css('z-index', "1");
	});
});
