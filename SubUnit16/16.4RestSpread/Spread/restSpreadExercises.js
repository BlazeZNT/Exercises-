// function filterOutOdds() {
// 	var nums = Array.prototype.slice.call(arguments);
// 	return nums.filter(function (num) {
// 		return num % 2 === 0;
// 	});
// }

const filterOutOdds = (...arguments) =>
	arguments.filter((num) => num % 2 === 0);

const findMin = (...arguments) =>
	arguments.reduce((current, next) => (current < next ? current : next));

const mergeObjects = (a, b) => (newobj = { ...a, ...b });

// const doubleAndReturnArgs = (arr, ...theRest) =>
// 	(newArr = [...arr, ...theRest]);

function doubleAndReturnArgs(arr, ...theRest) {
	newarr = theRest.map((num) => num * 2);
	return [...arr, ...newarr];
}

// const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]

/** remove a random element in the items array
and return a new array without that item. */

// function removeRandom(items) {

// }

const removeRandom = (items) => {
	newindex = Math.floor(Math.random() * items.length);
	console.log(newindex);
	return [...items.slice(0, newindex), ...items.slice(newindex + 1)];
};

// /** Return a new array with every item in array1 and array2. */

// function extend(array1, array2) {

// }

const extend = (array1, array2) => [...array1, ...array2];

// /** Return a new object with all the keys and values
// from obj and a new key/value pair */

// function addKeyVal(obj, key, val) {

// }
const addKeyVal = (obj, key, val) => {
	return { ...obj, [key]: val };
};

// /** Return a new object with a key removed. */

// function removeKey(obj, key) {
const removeKey = (obj, key) => {
	newobj = { ...obj };
	delete newobj[key];
	return newobj;
};

// }

// /** Combine two objects and return a new object. */

// function combine(obj1, obj2) {

const combine = (obj1, obj2) => {
	return { ...obj1, ...obj2 };
};

// }

// /** Return a new object with a modified key and value. */

// function update(obj, key, val) {
const update = (obj, key, val) => {
	return { ...obj, [key]: val };
};

// }
