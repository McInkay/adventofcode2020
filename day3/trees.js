const part1 = (data) => {
	return getTrees(data, 3, 1)
}

const part2 = (data) => {
	const results = [
		getTrees(data, 1, 1),
		getTrees(data, 3, 1),
		getTrees(data, 5, 1),
		getTrees(data, 7, 1),
		getTrees(data, 1, 2),
	]
	return results.reduce((total, current) => total * current);
}

const getTrees = (pattern, xMod, yMod) => {
	const h = new Hill(pattern, xMod, yMod);
	console.log(h.hasNextSpot());
	while (h.hasNextSpot()) {
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

module.exports = {
	part1, part2
}
