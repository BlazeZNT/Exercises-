const cat = {
	name: "Blue",
	breed: "Scottish Fold",
	dance: function (dance) {
		console.log("This is", this);
		console.log(`Meow, I am a ${this.name} and I like to ${dance}`);
	},
};

const rocket = {
	name: "Torquise",
	breed: "Himalayan",
};

function dog(arg) {
	return this.name + this.breed + arg;
}
