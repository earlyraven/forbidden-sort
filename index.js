console.log("The package file is attempting to load...");

const greetMe = (name) => console.log(`Hello, ${name}!`);
const add = (value1, value2) => value1 + value2;
const addAndSay = (value1, value2) => `The sum of ${value1} and ${value2} is: ${add(value1, value2)}`;

const parrotSortDescription = () => `This algorithm simply returns the array that was provided without doing anything to it, much like a parrot would simply repeat a phrase given to it.  If the input is sorted, it will return a correct response, but if not, it will return an incorrect response.  Time complexity: O(1).`
const parrotSort = (the_data_array) => the_data_array;

const stalinSortDescription = () => `This algorithm simply goes through the array and eliminates any items that would cause the array to not be sorted.  Due to this brutal approach, some data may be lost if the initial array was not already sorted.  It will however, always result in a sorted array, although the result may be shorter than desired as some data may be purged.  Time complexity: O(n).`
const stalinSort = function(the_data_array) {
	const sortedArray = [];
	let minValueEncountered;
	let activeValue;
	let data_size = the_data_array.length;

	if (data_size > 0) {
		activeValue = the_data_array[0];
		minValueEncountered = activeValue;
		sortedArray.push(activeValue);
	} else {
		return [];
	}

	for (let i=1; i<the_data_array.length; i++) {
		activeValue = the_data_array[i];
		if (activeValue >= minValueEncountered) {
			sortedArray.push(activeValue);
			minValueEncountered = activeValue;
		}
	}
	return sortedArray;
}

module.exports = {
	greetMe,
	add,
	addAndSay,

	parrotSortDescription,
	parrotSort,

	stalinSortDescription,
	stalinSort,
};

console.log("The package file finished loading.");
