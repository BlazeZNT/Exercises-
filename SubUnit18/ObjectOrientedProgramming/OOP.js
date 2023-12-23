thing = { a: 1, b: 2, c: 3 };

let colour = "purule";
const thingo = {};
thingo.a = 3;
thingo[colour] = "#6a5acd";

// console.log(Object.keys(thing));
// console.log(Object.values(thing));
// console.log(Object.entries(thing));

// console.log(thing.entries);

// // for (let [x, y] of thing) {
// // 	console.log(x, y);
// // }

// for (let [x, y] of Object.entries(thing)) {
// 	console.log(x, y);
// }

// now is testing for methods;

const newNum = (x, y) => x + y;
const MultiNum = (x, y) => x * y;

const newMath = {};
newMath.add = newNum;
newMath.multiply = MultiNum;
console.log(newMath);

hehe = newMath.multiply(3, 3);
console.log(hehe);

const nextMath = {
	add: (x, y) => {
		return x + y;
	},
	multi: (x, y) => {
		return x * y;
	},
};

nextMath.add(1, 5);

const finalMath = {
	add(x, y) {
		return x + y;
	},
	multiply(x, y) {
		return x * y;
	},
	square(x) {
		return x ** x;
	},
};

// This is used for testing this
const rightAngle = {
	a: 4,
	b: 2,
	printThis() {
		console.log(this.a, this.b);
	},
	area() {
		this.printThis();
		return (this.a * this.b) / 2;
	},
};

// This will be used for testing new

function Triangle(a, b) {
	this.a = a;
	this.b = b;
	this.printThis = function () {
		console.log(this.a, this.b);
	};
	this.area = function () {
		this.printThis();
		return (this.a * this.b) / 2;
	};
}
