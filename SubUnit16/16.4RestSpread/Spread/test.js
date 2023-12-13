// function sum() {
// 	const args = Array.from(arguments);
// 	return args.reduce((val, next) => val + next);
// }

const max = function () {
	const args = Array.from(arguments);
	return args.reduce((val, next) => (next > val ? next : val));
};

const sum = (...num) => num.reduce((val, next) => val + next);

function hehe(fam1, fam2, ...rest) {
	console.log(fam1, "+", fam2);
	console.log(rest);
}

const filterByType = (type, ...num) =>
	num.filter((current) => typeof current === type);

newarr = [1, 2, 3, 4, 5];
function test(a, c, v, b, d) {
	console.log(a);
	console.log(v);
	console.log(c);
	console.log(b);
	console.log(d);
}

test(...newarr);
