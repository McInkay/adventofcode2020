const part1 = (groups) => {
	return groups
		.map((group) => getNumberOfYes(group.split("\n")))
		.reduce((total, num) => total + num);
}

const part2 = (lines) => {
}

const getNumberOfYes = (group) => {
	const qs = new Set();
	group.forEach((person) => person.split("").forEach((q) => qs.add(q)));
	return qs.size;
}

module.exports = {
	part1, part2, getNumberOfYes
}
