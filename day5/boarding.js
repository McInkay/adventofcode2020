const part1 = (lines) => {
	return lines
		.map(seatId)
		.reduce((highest, id) => (id > highest) ? id : highest);
}

const part2 = (lines) => {
}

const seatId = (string) => {
	const rowInfo = string.substring(0, 7);
	const colInfo = string.substring(7);
	
	let row, col;
	row = findFromString(rowInfo, "F", 127);
	col = findFromString(colInfo, "L", 7);

	return (row * 8) + col; 
}

const findFromString = (string, lowerChar, maxNum) => {
	let min = 0, max = maxNum;
	for (let i = 0; i < (string.length - 1); i++) {
		if (string[i] === lowerChar) {
			max = max - Math.ceil((max - min) / 2);
		} else {
			min = min + Math.ceil((max - min) / 2);
		}
	}

	if (string[string.length - 1] === lowerChar) {
		return min;
	} else {
		return max;
	}
}

module.exports = {
	part1, part2, seatId
}
