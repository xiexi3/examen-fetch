export class Category {
	#catName;
	#catValue;

	constructor(catName, catValue) {
		this.#catName = catName;
		this.#catValue = catValue;
	}

	get catName() {
		return this.#catName;
	}

	set catName(catName) {
		this.#catName = catName;
	}

	get catValue() {
		return this.#catValue;
	}

	set catValue(catValue) {
		this.#catValue = catValue;
	}
}