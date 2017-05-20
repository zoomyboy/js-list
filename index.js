export default class {
	constructor(elements = []) {
		this.elements = elements;
	}

	enqueue(el) {
		this.elements.push(el);
	}

	dequeue() {
		return this.elements.shift();
	}

	dequeueExcept(el) {
		var first = this.firstExcept(el);
		if (first != undefined) {
			this.remove(first);
		}

		return first;
	}

	firstExcept(el) {
		return this.elements.find(function(thisel) {
			return thisel != el;
		});
	}

	remove(el) {
		this.elements = this.elements.filter(function(thisel) {
			return thisel != el;
		});
	}

	contains(el) {
		return this.elements.find(function(thisel) {
			return thisel == el;
		}) != undefined;
	}

	length() {
		return this.elements.length;
	}
};
