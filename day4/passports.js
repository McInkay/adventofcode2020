const part1 = (data) => {
	return data
		.map((line) => new Passport(line.replace(/\n/g, " ")))
		.filter((passport) => passport.isValid())
		.length
}

const part2 = (data) => {
}

class Passport {

	constructor(string) {
		this.map = {};
		this.required = ["byr", "ecl", "eyr", "hcl", "hgt", "iyr", "pid"];
		string.split(" ").forEach((entry) => this.map[entry.split(":")[0]] = entry.split(":")[1])
	}

	isValid() {
		return this.required
			.filter((entry) => !this.map[entry])
			.length === 0;
	}

}

module.exports = {
	part1, part2
}
