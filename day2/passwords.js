const part1 = (data) => {
	return data.filter(line => {
		const [policy, password] = line.split(":");
		return passwordValid1(password, policy);
	}).length;
}

const passwordValid1 = (password, policy) => {
	const [range, letter] = policy.split(" ");
	const [min, max] = range.split("-");
	const instances = (password.match(new RegExp(letter, "g")) || []).length;
	return instances >= min && instances <= max;
};

const part2 = (data) => {
	return data.filter(line => {
		const [policy, password] = line.split(":");
		return passwordValid2(password.trim(), policy);
	}).length;
}

const passwordValid2 = (password, policy) => {
	const [range, letter] = policy.split(" ");
	const [index1, index2] = range.split("-");
	const char1 = password[index1 - 1];
	const char2 = password[index2 - 1];
	return char1 === letter ^ char2 === letter; 
};

module.exports = {
	part1, part2
}
