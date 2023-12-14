order = { a: 1, b: 2, c: 3 };

const { a, b, c } = order;

const { d: e = 4 } = order;

// Array Destructuring

arr = [1, 2, 3];

const [hi, ho, he, ...others] = arr;

// Function Destructuring

function calculate({ a, b }) {
	return a + b;
}

function awards([gold, silver, bronze]) {
	return {
		gold,
		silver,
		bronze,
	};
}

// DataStructures Destructuring

movies = {
	name: "Shrek",
	rated: {
		rating: 9.5,
		star: 4.5,
	},
	produced: 1990,
};

const {
	rated: { rating },
} = movies;

// const {
// 	Versions: [{ runtime: runtick }, { runtime: runtick }],
// } = movies;

let dis = "a";
let del = "b";

let both = [dis, del];
[del, dis] = both;
