// let btn = document.querySelector("#dogBtn");
// btn.addEventListener("click", function () {
// 	dogFetch();
// });

async function dogFetch() {
	const dogData = await axios.get("https://dog.ceo/api/breeds/image/random");
	console.log(dogData);
	let status = dogData.data.status;
	let imgAdd = document.querySelector("#imgAdd");
	if (status === "success") {
		imgAdd.src = dogData.data.message;
	} else {
		alert("There is an Error with the provided link");
	}
}

async function getDogByBreed(type) {
	try {
		let imgAdd = document.querySelector("#imgAdd");
		const res = await axios.get(
			`https://dog.ceo/api/breed/${type}/images/random`
		);
		console.log(res);
		imgAdd.src = res.data.message;
	} catch (e) {
		alert("BREED NOT FOUND");
		dogFetch();
	}
}

const res = document.querySelector("#dogName");
const dogForm = document.querySelector("#searchForm");
dogForm.addEventListener("submit", function (event) {
	event.preventDefault();
	getDogByBreed(res.value);
	res.value = "";
});
