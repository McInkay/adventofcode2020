const part1 = (groups) => {
	return groups
		.map((group) => getNumberOfYes(group.split("\n")))
		.reduce((total, num) => total + num);
}

const getNumberOfYes = (group) => {
	const qs = new Set();
	group.forEach((person) => person.split("").forEach((q) => qs.add(q)));
	return qs.size;
}

const part2 = (groups) => {
	return groups
		.map((group) => getNumberOfAll(group.split("\n")))
		.reduce((total, num) => total + num);
}

const getNumberOfAll = (group) => {
	const numPeople = group.length;
	const qs = {};
	group.forEach((person) => person.split("").forEach((q) => {
		qs[q] = qs[q] ? qs[q] + 1 : 1
	}));
	return Object.entries(qs).filter((q) => q[1] === numPeople).length;
}

module.exports = {
	part1, part2, getNumberOfYes
}
