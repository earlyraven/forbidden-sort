const {
  parrotSortDescription,
  parrotSort,
  stalinSortDescription,
  stalinSort,
  sleepSortDescription,
  sleepSort,
} = require('./index'); // Replace './index' with the appropriate path to your module

// Test parrotSortDescription
test('parrotSortDescription returns the expected description', () => {
  expect(parrotSortDescription()).toBe("This algorithm simply returns the array that was provided without doing anything to it, much like a parrot would simply repeat a phrase given to it.  If the input is sorted, it will return a correct response, but if not, it will return an incorrect response.  Time complexity: O(1).");
});

// Test parrotSort
test('parrotSort returns the input array', () => {
  const inputArray = [3, 1, 4, 1, 5, 9, 2];
  expect(parrotSort(inputArray)).toEqual([3, 1, 4, 1, 5, 9, 2]);
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

test('stalinSort correctly sorts a single-entry input array.', () => {
  const inputArray = [3];
  expect(stalinSort(inputArray)).toEqual([3]);
});

test('stalinSort correctly sorts a non-empty input array with the same elements', () => {
  const inputArray = [3, 3, 3, 3, 3];
  expect(stalinSort(inputArray)).toEqual([3, 3, 3, 3, 3]);
});

// Test sleepSortDescription
test('sleepSortDescription returns the expected description', () => {
  expect(sleepSortDescription()).toBe("This algorithim uses time-based sorting. It creates a thread for each element, where each thread is initialized with the element's value. These threads set an alarm to wake up after a time equal to their value, sleep, and upon waking, add their value to an initially empty sorted array.  Time complexity: 0(n + max), where max is the value of the highest element.  Note: Does not work with negative values.");
});

// Test sleepSort
const sleepSortTimout = 10000; // (in ms)

test('sleepSort correctly sorts a non-empty input array with significant value differences (delta >= 1).', async () => {
  const testTimoutMilliseconds = 10000;
  const inputArray = [3, 1, 4, 1, 5, 6, 2, 6, 5, 3, 5];
  const sortedArray = await sleepSort(inputArray);
  const expectedResult = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 6];
  expect(sortedArray).toEqual(expectedResult);
}, sleepSortTimout);

test('sleepSort correctly sorts a single entry input array.', async () => {
  const testTimoutMilliseconds = 10000;
  const inputArray = [3];
  const sortedArray = await sleepSort(inputArray);
  const expectedResult = [3];
  expect(sortedArray).toEqual(expectedResult);
}, sleepSortTimout);

test('sleepSort correctly sorts an empty input array.', async () => {
  const testTimoutMilliseconds = 10000;
  const inputArray = [];
  const sortedArray = await sleepSort(inputArray);
  const expectedResult = [];
  expect(sortedArray).toEqual(expectedResult);
}, sleepSortTimout);

test('sleepSort rejects input with negative values', async () => {
  const inputArray = [3, -1, 4, 1, 5, 9, 2, -6, 5, 3, 5];
  const expectedErrorMessage = "Negative values are not supported.";
  await expect(sleepSort(inputArray)).rejects.toMatch(expectedErrorMessage);
}, sleepSortTimout);

test('sleepSort correctly sorts a non-empty input array with zero values', async () => {
  const inputArray = [3, 0, 4, 1, 0, 9, 2, 0, 5, 3, 0];
  const sortedArray = await sleepSort(inputArray);
  const expectedResult = [0, 0, 0, 0, 1, 2, 3, 3, 4, 5, 9];
  expect(sortedArray).toEqual(expectedResult);
}, sleepSortTimout);

// Test sleepSort with a larger input array
test('sleepSort correctly sorts a non-empty input array with values rather close to each other (delta ~= .1).', async () => {
  const inputArray = [1.6, 1.2, 1.5, 1.3, 1.1, 1.0, 1.7];
  const sortedArray = await sleepSort(inputArray);
  const expectedResult = [1.0, 1.1, 1.2, 1.3, 1.5, 1.6, 1.7];
  expect(sortedArray).toEqual(expectedResult);
}, sleepSortTimout);
