// ANSWER 1
// hehe = new Set([1, 1, 2, 2, 3, 4]);
// {
// 	1, 2, 3, 4;
// }

// ANSWER 2
// [...new Set("referee")].join("")
// ref;

// ANSWER 3
// let m = new Map();
// m.set([1, 2, 3], true);
// m.set([1, 2, 3], false);

// {[1,2,3] =>true, [1,2,3]=>false}

// ANSWER 4

const hasDuplicate = (arr) => {
	return arr.length === [...new Set(arr)].length ? false : true;
};

// ANSWER 5

const vowelCount = (str) => {
	let vowel = ["a", "e", "i", "o", "u"];
	const newArr = str.split("");
	const myMap = new Map();
	newArr.forEach(function (val) {
		if (vowel.includes(val)) {
			if (myMap.has(val)) {
				let newnum = myMap.get(val);
				newnum++;
				myMap.set(val, newnum);
			} else {
				myMap.set(val, 1);
			}
		}
	});
	return myMap;
};
