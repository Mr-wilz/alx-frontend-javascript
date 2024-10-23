export default function updateUniqueItems(groceries) {
	if (!(groceries instanceof Map)) {
		throw new Error("cannot process");
	}

	for (let [key, value] of groceries){
		if (value === 1) {
			groceries.set(key, 100);
		}
	}
	return groceries;
}
