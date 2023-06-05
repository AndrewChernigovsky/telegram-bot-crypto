export const list = [
	'🍎',
	'🍐',
	'🍊',
	'🍋',
	'🍌',
	'🍉',
	'🍇',
	'🍓',
	'🫐',
	'🍈',
	'🍒',
	'🍑',
];

// функция по выпадению комбинаций - казино
export function chance() {
	let a = [
		{ id: 0, int: 61 },
		{ id: 1, int: 20 },
		{ id: 2, int: 20 },
		{ id: 3, int: 8.99 },
		{ id: 4, int: 6 },
		{ id: 5, int: 2 },
		{ id: 6, int: 0.1 },
	];

	let sum = 0;
	for (let i = 0; i < a.length; i++) {
		sum += a[i].int;
	}

	let rand = Math.floor(Math.random() * sum);

	let i = 0;
	for (let s = a[0].int; s <= rand; s += a[i].int) {
		i++;
	}

	return a[i].id;
}

// расчет фрукта
export function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getChance(a, result, chanceV) {
	if (chanceV == 1) {
		result[a + 1] = result[a];
	}
	if (chanceV == 2) {
		if (a == 0) {
			result[0] = result[a];
			result[1] = result[a];
			result[2] = result[a + 2];
			result[3] = result[a + 2];
		} else if (a == 1) {
			result[0] = result[a];
			result[1] = result[a];
			result[3] = result[a + 2];
			result[4] = result[a + 2];
		} else if (a == 2) {
			result[1] = result[a];
			result[2] = result[a];
			result[3] = result[a + 2];
			result[4] = result[a + 2];
		}
	}
	if (chanceV == 3) {
		result[a + 1] = result[a];
		result[a + 2] = result[a];
	}
	if (chanceV == 4) {
		if (a == 0) {
			result[a + 1] = result[a];
			result[3] = result[2];
			result[4] = result[3];
		} else if (a == 1) {
			result[1] = result[0];
			result[2] = result[0];
			result[4] = result[3];
		}
	}
	if (chanceV == 5) {
		result[a + 1] = result[a];
		result[a + 2] = result[a];
		result[a + 3] = result[a];
	}
}

export function cycle(result,  res) {
	let countCycles;

	for (let i = 1; i <= 12; i++) {
		result.push(i);
	}

	for (countCycles = 1; countCycles <= 5; countCycles++) {
		result.splice(Math.random() * result.length, 1)[0];
	}

	return res;
}