const part1 = (data) => {
	for (const e1 of data) {
		for (const e2 of data) {
			if (Number(e1) + Number(e2) === 2020) {
				return Number(e1) * Number(e2);
			}
		}
	}
}

const part2 = (data) => {
	for (const e1 of data) {
		for (const e2 of data) {
			for (const e3 of data) {
				if (Number(e1) + Number(e2) + Number(e3) === 2020) {
					return Number(e1) * Number(e2) * Number(e3);
				}
			}
		}
	}
}

module.exports = {
	part1, part2
}
