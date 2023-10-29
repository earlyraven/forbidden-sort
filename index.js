const parrotSortDescription = () =>
  `This algorithm simply returns the array that was provided without doing anything to it, much like a parrot would simply repeat a phrase given to it.  If the input is sorted, it will return a correct response, but if not, it will return an incorrect response.  Time complexity: O(1).`;
const parrotSort = (the_data_array) => the_data_array;

const sleepSortDescription = () =>
  `This algorithim uses time-based sorting. It creates a thread for each element, where each thread is initialized with the element's value. These threads set an alarm to wake up after a time equal to their value, sleep, and upon waking, add their value to an initially empty sorted array.  Time complexity: 0(n + max), where max is the value of the highest element.  Note: Does not work with negative values.`;
const sleepSort = async (the_data_array) => {
  if (the_data_array.length === 0) {
    return Promise.resolve([]);
  }

  if (the_data_array.some((value) => value < 0)) {
    return Promise.reject("Negative values are not supported.");
  }

  const sortedArray = [];
  const sleep = (milliseconds) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));

  const promises = the_data_array.map(async (value) => {
    await sleep(value * 1000);
    sortedArray.push(value);
  });

  await Promise.all(promises);
  return Promise.resolve(sortedArray);
};

const stalinSortDescription = () =>
  `This algorithm simply goes through the array and eliminates any items that would cause the array to not be sorted.  Due to this brutal approach, some data may be lost if the initial array was not already sorted.  It will however, always result in a sorted array, although the result may be shorter than desired as some data may be purged.  Time complexity: O(n).`;
const stalinSort = function (the_data_array) {
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

  for (let i = 1; i < the_data_array.length; i++) {
    activeValue = the_data_array[i];
    if (activeValue >= minValueEncountered) {
      sortedArray.push(activeValue);
      minValueEncountered = activeValue;
    }
  }
  return sortedArray;
};

module.exports = {
  parrotSortDescription,
  parrotSort,

  stalinSortDescription,
  stalinSort,

  sleepSortDescription,
  sleepSort,
};
