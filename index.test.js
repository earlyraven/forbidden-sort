const {
  parrotSortDescription,
  parrotSort,
  stalinSortDescription,
  stalinSort,
} = require('./index'); // Replace './index' with the appropriate path to your module

// Test parrotSortDescription
test('parrotSortDescription returns the expected description', () => {
  expect(parrotSortDescription()).toBe("This algorithm simply returns the array that was provided without doing anything to it, much like a parrot would simply repeat a phrase given to it.  If the input is sorted, it will return a correct response, but if not, it will return an incorrect response.  Time complexity: O(1).");
});

// Test parrotSort
test('parrotSort returns the input array', () => {
  const inputArray = [3, 1, 4, 1, 5, 9, 2];
  expect(parrotSort(inputArray)).toEqual(inputArray);
});

// Test stalinSortDescription
test('stalinSortDescription returns the expected description', () => {
  expect(stalinSortDescription()).toBe("This algorithm simply goes through the array and eliminates any items that would cause the array to not be sorted.  Due to this brutal approach, some data may be lost if the initial array was not already sorted.  It will however, always result in a sorted array, although the result may be shorter than desired as some data may be purged.  Time complexity: O(n).");
});

// Test stalinSort
test('stalinSort correctly sorts a non-empty input array', () => {
  const inputArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  expect(stalinSort(inputArray)).toEqual([3, 4, 5, 9]);
});

test('stalinSort returns an empty array if given an empty array.', () => {
  const inputArray = [];
  expect(stalinSort(inputArray)).toEqual([]);
});
