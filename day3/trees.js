const part1 = (data) => {
	const h = new Hill(data, 3, 1);
	console.log(h.hasNextSpot());
	while (h.hasNextSpot()) {
		console.log(h.hasNextSpot());
		h.findNextSpot();
	}
	return h.trees;
}

class Hill {

	constructor(pattern, xMod, yMod) {
		this.pattern = pattern;
		this.xMod = xMod;
		this.yMod = yMod;
		this.x = 0;
		this.y = 0;
		this.trees = 0;
	}

	hasNextSpot() {
		console.log(this.y);
		console.log(this.yMod);
		console.log(this.pattern.length);
		
		return (this.y + this.yMod) < this.pattern.length;
	}

	findNextSpot() {
		if (!this.hasNextSpot()) {
			return false;
		}

		this.y += this.yMod;
		this.x = (this.x + this.xMod) % this.pattern[this.y].length;

		if (this.pattern[this.y][this.x] === "#") {
			this.trees++;
		}
	}

}

const part2 = (data) => {
}

module.exports = {
	part1, part2
}
