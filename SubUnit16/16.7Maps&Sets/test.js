const myMap = new Map();

myMap.set(7, "seven");
myMap.set("seven", 7);

// arr = ["hello", "hey", "Hi"];
// const mySet = new Set(["hello", "hey", "Hi"]);
// console.log(mySet);

function bannedGreet(input) {
	const mySet = new Set(["hello", "hey", "Hi"]);
	return input.filter((val) => !mySet.has(val));
}

const sus = ["hello", "hey", "konichiwa"];
