let hehe = [1, 2, 3, 4, 5, 5, 123].reduce((max, currNum) => {
	return Math.max(max, currNum);
});

// remove return and curly brackets
[1, 2, 3, 4, 6, 5, 7].filter((i) => i % 2 === 0);

[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (i % 2 === 0 ? "even" : "odd"));

// for explict return add inside paranthesies

const makeMath = (num) => ({
	double: num * num,
	square: num * 2,
});

const makeObj = () => ({ mood: "meh" });
