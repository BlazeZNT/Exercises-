const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
	"Apple",
	"Apricot",
	"Avocado 🥑",
	"Banana",
	"Bilberry",
	"Blackberry",
	"Blackcurrant",
	"Blueberry",
	"Boysenberry",
	"Currant",
	"Cherry",
	"Coconut",
	"Cranberry",
	"Cucumber",
	"Custard apple",
	"Damson",
	"Date",
	"Dragonfruit",
	"Durian",
	"Elderberry",
	"Feijoa",
	"Fig",
	"Gooseberry",
	"Grape",
	"Raisin",
	"Grapefruit",
	"Guava",
	"Honeyberry",
	"Huckleberry",
	"Jabuticaba",
	"Jackfruit",
	"Jambul",
	"Juniper berry",
	"Kiwifruit",
	"Kumquat",
	"Lemon",
	"Lime",
	"Loquat",
	"Longan",
	"Lychee",
	"Mango",
	"Mangosteen",
	"Marionberry",
	"Melon",
	"Cantaloupe",
	"Honeydew",
	"Watermelon",
	"Miracle fruit",
	"Mulberry",
	"Nectarine",
	"Nance",
	"Olive",
	"Orange",
	"Clementine",
	"Mandarine",
	"Tangerine",
	"Papaya",
	"Passionfruit",
	"Peach",
	"Pear",
	"Persimmon",
	"Plantain",
	"Plum",
	"Pineapple",
	"Pomegranate",
	"Pomelo",
	"Quince",
	"Raspberry",
	"Salmonberry",
	"Rambutan",
	"Redcurrant",
	"Salak",
	"Satsuma",
	"Soursop",
	"Star fruit",
	"Strawberry",
	"Tamarillo",
	"Tamarind",
	"Yuzu",
];

function search(str) {
	let newUpper = str.toLowerCase();
	// changes the user input to lowercase to make sure it can relate to the values in the array
	return fruit.filter((val) => val.toLowerCase().includes(newUpper));
	// this function is used to check if the fruit array contains user input
}

function searchHandler(e) {
	let results = search(input.value);
	showSuggestions(results, input.value);
	// run the function search

	// TODO
}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = "";
	// to make sure there is nothing in the list already
	if (inputVal === "" || results.length === 0) {
		return;
	} else {
		let newul = document.createElement("ul");
		for (let i of results) {
			let newli = document.createElement("li");
			newli.innerText = i;
			newli.classList.add("suggestions");

			newul.appendChild(newli);
		}
		suggestions.appendChild(newul);
	}
}

function useSuggestion(e) {
	input.value = e.target.innerText;
	suggestions.innerHTML = "";
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
