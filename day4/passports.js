const part1 = (data) => {
	return data
		.map((line) => new Passport(line.replace(/\n/g, " ")))
		.filter((passport) => passport.isValidPart1())
		.length
}

const part2 = (data) => {
	return data
		.map((line) => new Passport(line.replace(/\n/g, " ")))
		.filter((passport) => passport.isValid())
		.length
}

class Passport {

	constructor(string) {
		this.map = {};
		this.required = ["byr", "ecl", "eyr", "hcl", "hgt", "iyr", "pid"];
		this.validEyeColors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
		string.split(" ").forEach((entry) => this.map[entry.split(":")[0]] = entry.split(":")[1])
	}

	isValidPart1() {
		return this.required
			.filter((entry) => !this.map[entry])
			.length === 0;
	}

	isValid() {
		return this.hasValidBirthYear()
			&& this.hasValidIssueYear()
			&& this.hasValidExpirationYear()
			&& this.hasValidHeight()
			&& this.hasValidEyeColor()
			&& this.hasValidHairColor()
			&& this.hasValidPassportNumber();
	}

	hasValidPassportNumber() {
		const passportNumber = this.map["pid"];
		return Boolean(passportNumber && passportNumber.match(/^\d{9}$/));
	}

	hasValidHairColor() {
		const hairColor = this.map["hcl"];
		return Boolean(hairColor && hairColor.match(/^#[a-fA-F0-9]{6}$/));
	}

	hasValidEyeColor() {
		const eyeColor = this.map["ecl"];
		return this.validEyeColors.includes(eyeColor);
	}

	hasValidHeight() {
		const height = this.map["hgt"];
		if (!height || !height.match(/^(\d*)(in|cm)$/)) {
			return false;
		}
		const [_, amount, units] = height.match(/^(\d*)(in|cm)$/);
		if (units === "cm") {
			return Number(amount) >= 150 && Number(amount) <= 193 
		} else if (units === "in") {
			return Number(amount) >= 59 && Number(amount) <= 76 
		} else {
			return false;
		}
	}

	hasValidBirthYear() {
		const birthYear = this.map["byr"];
		return this.isYear(birthYear, 1920, 2002);
	}

	hasValidIssueYear() {
		const birthYear = this.map["iyr"];
		return this.isYear(birthYear, 2010, 2020);
	}

	hasValidExpirationYear() {
		const birthYear = this.map["eyr"];
		return this.isYear(birthYear, 2020, 2030);
	}

	isYear(year, min, max) {
		return year && year.length === 4 && Number(year) >= min && Number(year) <= max;
	}

}

module.exports = {
	part1, part2, Passport
}
