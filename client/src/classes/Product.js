export class Product {
	#name;
	#price;
	#imgUrl;

	constructor(name, price) {
		this.#name = name;
		this.#price = price;
	}
a
	get name() {
		return this.#name;
	}

	set name(name) {
		this.#name = name;
	}

	get price() {
		return this.#price;
	}

	set price(price) {
		this.#price = price;
	}

	get imgUrl() {
		return this.#imgUrl;
	}

	set imgUrl(imgUrl) {
		this.#imgUrl = imgUrl;
	}
}