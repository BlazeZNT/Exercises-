let thing = { a: 1, b: 2, c: 3 };

let colour = "purule";
const thingo = {};
thingo.a = 3;
thingo[colour] = "#6a5acd";

// console.log(Object.keys(thing));
// console.log(Object.values(thing));
// console.log(Object.entries(thing));

// console.log(thing.entries);

// for (let [x, y] of thing) {
// 	console.log(x, y);
// }
for (let [x, y] of Object.entries(thing)) {
	console.log(x, y);
}

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
}

Triangle.prototype.printThis = function () {
	console.log(this.a, this.b);
};

Triangle.prototype.area = function () {
	this.printThis();
	return (this.a * this.b) / 2;
};

let tri1 = new Triangle();

// this is a test for class

class Bozo {
	hehe() {
		console.log(this.a + this.b);
	}
}

let t1 = new Bozo();
t1.a = 4;
t1.b = 6;

// class Newtry {
// 	constructor() {
// 		console.log("Well you played a game");
// 	}
// 	fun() {
// 		console.log("This is fun");
// 	}
// 	notfun() {
// 		console.log("This is not fun");
// 	}
// 	decent() {
// 		console.log("This is quite Decent");
// 	}
// }

// const newhell = new Newtry();

class tryout {
	constructor(a, b, c) {
		// if (!Number.isFinite(a) || a <= 0) {
		// 	throw new Error(`${a} is not a Number`);
		// }
		// if (!Number.isFinite(b) || b <= 0) {
		// 	throw new Error(`${b} is not a Number`);
		// }
		// if (!Number.isFinite(c) || c <= 0) {
		// 	throw new Error(`${c} is not a Number`);
		// } instead of this you can also do this
		console.log("Hi");
		for (let side of [a, b, c]) {
			if (!Number.isFinite(side) || side <= 0) {
				throw new Error(`${a} is not a Number`);
			}
		}
		this.a = a;
		this.b = b;
		this.c = c;
	}
	aalert() {
		return "Well game  " + this.a + " was fun";
	}
	balert() {
		console.log("Well game " + this.b + " was fun");
	}
	calert() {
		// cannot be console.log if super is being used and added on
		return "Well game " + this.c + " was fun";
	}
	abcalert() {
		const { a, b, c } = this;
		const numgame = a + b + c;
		return Math.floor(numgame);
	}
}

const helloi = new tryout(1, 2, 3);
const hellov = new tryout(5, 6, 7);

class gametime extends tryout {
	constructor(a, b, c) {
		console.log("Hello");
		super(a, b, c);
	}
	// calert() {
	// 	console.log("New game " + this.c + " was fun");
	// }can also use New to add on to the super
	calert() {
		return "New " + super.calert();
	}
}

const newthingy = new gametime(5, 6, 7);

class showtime extends tryout {
	constructor(a, b, c) {
		console.log("newnewShow");
		super(a, b, c);
		this.newside = c;
	}
	aalert() {
		return "New show " + super.aalert();
	}
}

const newshow = new showtime(7, 8, 9);
