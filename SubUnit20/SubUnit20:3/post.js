// async function postTest() {
// 	const test = await axios.post("https://reqres.in/api/users", {
// 		name: "Ovuvueue",
// 		age: 1,
// 		favfood: "mutton",
// 	});
// 	console.log(test.data);
// }

// postTest();

async function getUsers() {
	let token = await Login("zarni1", "11223344");
	const res = await axios.get("https://hack-or-snooze-v3.herokuapp.com/users", {
		params: { token },
	});
	console.log(res);
}

async function signUp(name, username, password) {
	const res = await axios.post(
		"https://hack-or-snooze-v3.herokuapp.com/signup",
		{ user: { name, username, password } }
	);
	console.log(res);
}

async function Login(username, password) {
	const res = await axios.post(
		"https://hack-or-snooze-v3.herokuapp.com/login",
		{ user: { username, password } }
	);
	console.log(res);
	return res.data.token;
}

async function makeStories() {
	let token = await Login("zarni1", "11223344");
	const res = await axios.post(
		"https://hack-or-snooze-v3.herokuapp.com/stories",
		{
			token,
			story: {
				author: "Blaze",
				title: "test",
				url: "https://en.wikipedia.org/wiki/Shostakovich_v._Twentieth_Century-Fox_Film_Corp.",
			},
		}
	);
	console.log(res);
}

// signUp("zarni", "zarni1", "11223344");
Login("zarni1", "11223344");
