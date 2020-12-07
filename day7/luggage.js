const part1 = (luggage) => {
	const map = getMap(luggage);

	return findGoldBags(Object.keys(map), map).size;
}

const getMap = (luggage) => {
	const keyRegex = /([\w ]*) bags? contain/;
	const bagRegex = /(\d) ([\w ]*) bags?/;
	const globalBagRegex = /(\d) ([\w ]*) bags?/g;
	const map = {};

	luggage.forEach((bag) => {
		const name = bag.match(keyRegex)[1];
		map[name] = {};
		const bagMatches = bag.match(globalBagRegex);

		if (bagMatches) {
			bagMatches.forEach((match) => {
				const results = match.match(bagRegex);
				map[name][[results[2]]] = results[1];
			});
		}
	});
	return map;
}

const findGoldBags = (keys, map) => {
	let routesSet = new Set();
	keys.forEach((bag) => {
		const newKeys = Object.keys(map[bag]);
		if (newKeys.includes("shiny gold")){
			routesSet.add(bag);
		} else if(newKeys[0] !== 'undefined') {
			const subRoutes = findGoldBags(Object.keys(map[bag]), map);
			routesSet = new Set([...routesSet, ...subRoutes]);
		}
		newKeys.forEach((newKey) => {
			if (routesSet.has(newKey)) {
				routesSet.add(bag);
			}
		});
	});
	return routesSet;
}

const part2 = (groups) => {
}

module.exports = {
	part1, part2
}
