// const firstreq = new XMLHttpRequest();
// firstreq.addEventListener("load", function () {
// 	const data = JSON.parse(this.responseText);
// 	for (let planet of data.results) {
// 		console.log(planet.name);
// 	}
// 	console.log(data);
// });
// firstreq.addEventListener("error", () => {
// 	console.log("Error!!!");
// });
// firstreq.open("GET", "https://swapi.dev/api/planets/");
// firstreq.send();
// console.log("Sending...... Request");
async function getData() {
	const data = await axios.get("https://swapi.dev/api/planets/");
	console.log("This line runs after resquest");
	console.log(data);
	for (Planet of data.data.results) {
		console.log(Planet.name);
	}
	const next = data.data.next;
	const nextdata = await axios.get(`${next}`);
	for (nextPlanet of nextdata.data.results) {
		console.log(nextPlanet.name);
	}

	// for (planet of data) {
	// 	console.log(planet.name);
	// }
}

async function getLaunches() {
	const data = await axios.get(
		"https://api.spacexdata.com/v3/launches/upcoming"
	);
	console.log(data);
	let thing = data.data;
	console.log(thing);
	const putul = document.querySelector("#rocket");
	for (let name of thing) {
		console.log(name.mission_name);
		console.log(name.rocket.rocket_name);
		const newli = document.createElement("li");
		newli.innerText = `Mission name is ${name.mission_name} and rocket name is ${name.rocket.rocket_name} `;
		putul.append(newli);
	}
}
