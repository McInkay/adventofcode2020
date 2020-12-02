const part1 = (data) => {
	return data.filter(line => {
		const [policy, password] = line.split(":");
		return passwordValid(password, policy);
	}).length;
}

const passwordValid = (password, policy) => {
	const [range, letter] = policy.split(" ");
	const [min, max] = range.split("-");
	const instances = (password.match(new RegExp(letter, "g")) || []).length;
	return instances >= min && instances <= max;
};

const part2 = (data) => {
}

module.exports = {
	part1, part2
}
