class Vehicle {
	constructor(make, model, year) {
		this.make = make;
		this.model = model;
		this.year = year;
	}
	honk() {
		return "Beep";
	}
	toString() {
		const { make, model, year } = this;
		return `The vehicle is a ${make} ${model} from ${year}`;
	}
}

class Car extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year);
		this.numWheels = 4;
	}
}

class Motorcycle extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year);
		this.numWheels = 2;
	}

	revEngine() {
		return "Vroom!!!";
	}
}

class Garage {
	constructor(capacity) {
		this.capacity = capacity;
		this.vehicles = [];
	}
	add(val) {
		const { capacity, vehicles } = this;
		if (vehicles.length >= capacity) {
			return "Sorry, we're full";
		} else if (
			// check to see whether the object name are vehicles
			val.constructor.name !== "Motorcycle" &&
			val.constructor.name !== "Car"
		) {
			return "Only vehicles are allowed in here!";
		}
		console.log(val.constructor.name);
		console.log(val);
		return vehicles.push(val);
	}
}
