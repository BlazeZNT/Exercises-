$(document).ready(function () {
	var slider = $("#rating");
	slider.on("input", function () {
		$("#Value").html(" Rating : " + this.value);
	});
	$("#movForms").on("click", "button", function (event) {
		const vallen = $(".movDiv input").val();
		event.preventDefault();
		if (vallen.length <= 2) {
			alert("There must be at least 2 characters");
		} else {
			$(".MovList").on("click", "button", function () {
				$(this).parent().remove();
			});

			const movie = $(".movDiv input").val();
			const rating = $(".ratDiv input").val();
			
			$(
				`<li>${movie} is rated ${rating} <button>Delete</button></li>`
			).appendTo("ol");
		}
	});
});

$("button").on("click", function (event) {});
