const {
  checkIfSorted,
  getShuffled,
  shuffleArray,
  parrotSortDescription,
  parrotSort,
  stalinSortDescription,
  stalinSort,
  sleepSortDescription,
  sleepSort,
  bogoSortDescription,
  bogoSort,
  bozoSortDescription,
  bozoSort,
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

test('sleepSort correctly sorts a non-empty input array with values rather close to each other (delta ~= .1).', async () => {
  const inputArray = [1.6, 1.2, 1.5, 1.3, 1.1, 1.0, 1.7];
  const sortedArray = await sleepSort(inputArray);
  const expectedResult = [1.0, 1.1, 1.2, 1.3, 1.5, 1.6, 1.7];
  expect(sortedArray).toEqual(expectedResult);
}, sleepSortTimout);

// Test checkIfSorted
test('checkIfSorted correctly identifies a sorted array', () => {
  const inputArray = [1, 2, 3, 4, 5]; // Sorted array input
  const returnedValue = checkIfSorted(inputArray);
  expect(returnedValue).toBe(true);
});

test('checkIfSorted correctly identifies an unsorted array', () => {
  const inputArray = [1, 3, 2, 4, 5]; // Unsorted array input
  const returnedValue = checkIfSorted(inputArray);
  expect(returnedValue).toBe(false);
});

test('checkIfSorted correctly identifies an empty array', () => {
  const inputArray = []; // Empty array input
  const returnedValue = checkIfSorted(inputArray);
  expect(returnedValue).toBe(true);
});

// Test getShuffled
test('getShuffled returns an empty array for empty input', () => {
  const inputArray = [];
  const shuffledArray = getShuffled(inputArray);
  expect(shuffledArray).toEqual([]);
});

test('getShuffled returns the same array for single-element input', () => {
  const inputArray = [42];
  const shuffledArray = getShuffled(inputArray);
  expect(shuffledArray).toEqual(inputArray);
});

test('getShuffled returns a shuffled array for two-element input', () => {
  const inputArray = [42, 17];
  const shuffledArray = getShuffled(inputArray);
  // Check if the shuffled array has the same elements (order may vary)
  expect(shuffledArray).toContain(42);
  expect(shuffledArray).toContain(17);
});

test('getShuffled returns a shuffled array for a larger input array', () => {
  const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const shuffledArray = getShuffled(inputArray);
  // Check if the shuffled array contains all the elements from the input array
  expect(shuffledArray).toEqual(expect.arrayContaining(inputArray));
  // Check if the shuffled array is not in the same order as the input array
  expect(shuffledArray).not.toEqual(inputArray);
});

// Helper function for testing shuffleArray
function isRandomlyShuffled(array) {
  const originalArray = [...array];
  array.sort(); // Sort the array to check if it's not in its original order
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== originalArray[i]) {
      return true; // The array is not in its original order, indicating randomness
    }
  }
  return false; // The array is still in its original order
}

test('shuffleArray correctly shuffles an array with a single element.', () => {
  const inputArray = [5];
  shuffleArray(inputArray);
  expect(isRandomlyShuffled(inputArray)).toBe(false);
});

// Helper function for testing shuffleArray with tolerance
function testShuffleArrayWithTolerance(inputArray, numTrials, tolerancePercent) {
  const originalArray = [...inputArray];
  const successTrials = numTrials * (1 - tolerancePercent / 100);

  let shuffledCount = 0;
  let notShuffledCount = 0;

  for (let trial = 0; trial < numTrials; trial++) {
    const shuffledArray = getShuffled(inputArray);

    if (originalArray.some((value, index) => value !== shuffledArray[index])) {
      shuffledCount++;
    } else {
      notShuffledCount++;
    }
  }

  const shuffledPercentage = shuffledCount / numTrials;
  const notShuffledPercentage = notShuffledCount / numTrials;

  if (inputArray.length > 1) {
    const expectedAverageUnsortedAmount = 1 / (Math.pow(2, (inputArray.length - 1)));
    expect(shuffledPercentage).toBeGreaterThan((1 - tolerancePercent / 100) * (1 - expectedAverageUnsortedAmount));
    expect(notShuffledPercentage).toBeLessThan((1 + tolerancePercent / 100) * expectedAverageUnsortedAmount);
  }
}

test('shuffleArray correctly shuffles an array with 5 sorted elements.', () => {
  console.log("NOTE: Due to randomness, this does have a chance to fail.");
  const inputArray = [1, 2, 3, 4, 5];
  const numTrials = 1000;  // Number of shuffle trials
  const tolerancePercent = 25;

  testShuffleArrayWithTolerance(inputArray, numTrials, tolerancePercent);
});

test('shuffleArray correctly shuffles an array with 5 sorted elements.', () => {
  console.log("NOTE: Due to randomness, this does have a chance to fail.");
  const inputArray = [1, 2, 3, 4, 5];
  const numTrials = 1000;  // Number of shuffle trials
  const tolerancePercent = 25;

  testShuffleArrayWithTolerance(inputArray, numTrials, tolerancePercent);
});

test('shuffleArray correctly shuffles an array with 3 sorted elements.', () => {
  console.log("NOTE: Due to randomness, this does have a chance to fail.");
  const inputArray = [1, 2, 3];
  const numTrials = 1000;  // Number of shuffle trials
  const tolerancePercent = 25;

  testShuffleArrayWithTolerance(inputArray, numTrials, tolerancePercent);
});

test('shuffleArray correctly shuffles an array with 2 sorted elements.', () => {
  console.log("NOTE: Due to randomness, this does have a chance to fail.");
  const inputArray = [1, 5];
  const numTrials = 1000;  // Number of shuffle trials
  const tolerancePercent = 25;

  testShuffleArrayWithTolerance(inputArray, numTrials, tolerancePercent);
});

test('shuffleArray correctly shuffles an array with 1 element.', () => {
  console.log("NOTE: Due to randomness, this does have a chance to fail.");
  const inputArray = [2];
  const numTrials = 1000;  // Number of shuffle trials
  const tolerancePercent = 25;

  testShuffleArrayWithTolerance(inputArray, numTrials, tolerancePercent);
});

test('shuffleArray correctly shuffles an array with 0 elements.', () => {
  console.log("NOTE: Due to randomness, this does have a chance to fail.");
  const inputArray = [];
  const numTrials = 1000;  // Number of shuffle trials
  const tolerancePercent = 25;

  testShuffleArrayWithTolerance(inputArray, numTrials, tolerancePercent);
});

test('shuffleArray correctly shuffles an array with 20 unsorted elements.', () => {
  console.log("NOTE: Due to randomness, this does have a chance to fail.");
  const inputArray = [2,3,4,5,8,9,10,11,15,16,17,12,13,14,1,6,7,19,18,20];
  const numTrials = 1000;  // Number of shuffle trials
  const tolerancePercent = 25;

  testShuffleArrayWithTolerance(inputArray, numTrials, tolerancePercent);
});

test('shuffleArray correctly shuffles an array with 20 sorted elements.', () => {
  console.log("NOTE: Due to randomness, this does have a chance to fail.");
  const inputArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  const numTrials = 1000;  // Number of shuffle trials
  const tolerancePercent = 25;

  testShuffleArrayWithTolerance(inputArray, numTrials, tolerancePercent);
});

// Test bogoSortDescription
test('bogoSortSortDescription returns the expected description', () => {
  expect(bogoSortDescription()).toBe("This algorithm randomly shuffles the items in the list, then checks if it's sorted.  This repeats until it's sorted. Time complexity expectation: O((n+1)!)");
});


// Test bogoSort
test('bogoSort correctly sorts a small 5 element array', () => {
  const inputArray = [5, 3, 1, 4, 2];
  const sortedArray = bogoSort([...inputArray]);
  expect(checkIfSorted(sortedArray)).toBe(true);
});

test('bogoSort correctly sorts a larger 10 element array', () => {
  const inputArray = [10, 7, 8, 1, 3, 6, 2, 9, 4, 5];
  const sortedArray = bogoSort([...inputArray]);
  expect(checkIfSorted(sortedArray)).toBe(true);
});

test('bogoSort correctly sorts an empty array', () => {
  const inputArray = [];
  const sortedArray = bogoSort([...inputArray]);
  expect(checkIfSorted(sortedArray)).toBe(true);
});

test('bogoSort correctly sorts an array with one element', () => {
  const inputArray = [42];
  const sortedArray = bogoSort([...inputArray]);
  expect(checkIfSorted(sortedArray)).toBe(true);
});

test('bogoSort correctly sorts an already sorted array', () => {
  const inputArray = [1, 2, 3, 4, 5];
  const sortedArray = bogoSort([...inputArray]);
  expect(checkIfSorted(sortedArray)).toBe(true);
});

// Test bozoSortDescription
test('bozoSortDescription returns the expected description', () => {
  expect(bozoSortDescription()).toBe("This algorithm does the following until the list is sorted: pick two elements at random and swap them.  Expected time complexity: O((n!).");
});

// Test bozoSort
test('bozoSort correctly sorts an array with one element', () => {
  const inputArray = [42];
  const sortedArray = bozoSort([...inputArray]);
  expect(checkIfSorted(sortedArray)).toBe(true);
});

test('bozoSort correctly sorts an array with 4 unsorted elements', () => {
  const inputArray = [42, 13, 25, 50];
  const sortedArray = bozoSort([...inputArray]);
  expect(checkIfSorted(sortedArray)).toBe(true);
});

test('bozoSort correctly sorts an array with 0 elements', () => {
  const inputArray = [];
  const sortedArray = bozoSort([...inputArray]);
  expect(checkIfSorted(sortedArray)).toBe(true);
});

test('bozoSort correctly sorts an array with 1 element', () => {
  const inputArray = [3];
  const sortedArray = bozoSort([...inputArray]);
  expect(checkIfSorted(sortedArray)).toBe(true);
});

test('bozoSort correctly sorts an array with 6 unsorted elements', () => {
  const inputArray = [3,1,4,2,5,8];
  const sortedArray = bozoSort([...inputArray]);
  expect(checkIfSorted(sortedArray)).toBe(true);
});

test('bozoSort correctly sorts an array with 8 sorted elements', () => {
  const inputArray = [1,2,3,4,5,6,7,8];
  const sortedArray = bozoSort([...inputArray]);
  expect(checkIfSorted(sortedArray)).toBe(true);
});
