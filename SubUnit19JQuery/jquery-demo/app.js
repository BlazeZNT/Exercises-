// $('img').click(function () {
//   alert('HELLO!')
// })

$("img").click(function () {
	// $(this).fadeOut(1000, function () {
	// 	$(this).remove();
	// });
	$(this).animate(
		{
			opacity: 0,
			width: "50px",
		},
		1000,
		function () {
			$(this).remove();
		}
	);
});

$("img").on("mouseleave", function () {
	$(this).css("border", "none");
});

$("img").on("mouseenter", function () {
	$(this).css("border", "10px solid purple");
});

$("#submito").on("click", function () {
	$("form").append("<input type='text'/>");
});

// without delegation new text input will not get bamboozled
// $("input").on("click", function () {
// 	$(this).val("BAMBOOZLED");
// });

$("form").on("click", "input", function () {
	$(this).val("BAMBOOZLED");
});

// $("img").on("mouseenter", function () {
// 	$(this).css("border", "10px solid purple");
// });

// $("img").on("click", function () {
// 	// $(this).fadeOut(3000, function () {
// 	//   $(this).remove()
// 	// })
// 	$(this).animate(
// 		{
// 			opacity: 0,
// 			width: "50px", //DO NOT ANIMATE WIDTH (POOR PERFORMANCE)
// 		},
// 		3000,
// 		function () {
// 			$(this).remove();
// 		}
// 	);
// });

// $("#add-input").on("click", function () {
// 	$("form").append('<input type="text"/>');
// });

// $("form").on("focus", "input", function () {
// 	$(this).val("BAMBOOZLED");
// });
