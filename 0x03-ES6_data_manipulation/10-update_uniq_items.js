export default function updateUniqueItems(groceriesMap) {
  // Check if the argument is a Map, otherwise throw an error
  if (!(groceriesMap instanceof Map)) {
    throw new Error("Cannot process");
  }

  // Update entries where the value is 1
  groceriesMap.forEach((value, key) => {
    if (value === 1) {
      groceriesMap.set(key, 100);
    }
  });
  return groceriesMap;
}
