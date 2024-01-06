// PART 1
// NUMBER 1
console.log("Let's get ready to party with jQuery");

// NUMBER 2
$("img").addClass("image-center");

// NUMBER 3
$("p").eq(5).remove();

// NUMBER 4
$("h1").css("font-size", Math.floor(Math.random() * 100));

// NUMBER 5
$("ol").append("<li>'BABABOOI'</li>");

// NUMBER 6
$("aside").children().remove();
$("aside").append(
	"<p>I am very sorry for placing that unsightly list. Here is a Superior Paragraph</p>"
);

// NUMBER 7
// $("input").on("click", function () {
// 	console.log($(this).val());
//     $('body').css("background-color",)
// });
// $(".row mb-5").on("click", function () {
// 	console.log("Hello");

// 	const num1 = $("input").eq(0).val();
// 	const num2 = $("input").eq(1).val();
// 	const num3 = $("input").eq(3).val();
// 	$("body").css("background-color", rgb(num1, num2, num3));
// });

$(".row-mb-5").on("click", "input", function () {
	const num1 = $("input").eq(0).val();
	const num2 = $("input").eq(1).val();
	const num3 = $("input").eq(2).val();
	$("body").css("background-color", `rgb(${num1},${num2},${num3})`);
});

// NUMBER 8
$("img").on("click", function () {
	$(this).animate(
		{
			opacity: 0,
		},
		1000,
		function () {
			$(this).remove();
		}
	);
});
