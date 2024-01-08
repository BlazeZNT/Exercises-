const data = document.querySelector("#takeData");
const dataput = document.querySelector("#addli");
const button = document.querySelector("button");

button.addEventListener("click", function (event) {
	event.preventDefault();
	let newli = document.createElement("li");
	let hehe = data.value;
	newli.innerHTML = `${hehe}`;
	dataput.append(newli);
});
