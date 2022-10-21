/** Insertion Sort 
 * Start by picking the second element in the array (we will assume the first element is the start of the “sorted” portion)
Now compare the second element with the one before it and swap if necessary.
Continue to the next element and if it is in the incorrect order, iterate through the sorted portion to place the element in the correct place.
Repeat until the array is sorted.
*/

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currVal = arr[i];

    for (var j = i - 1; j > -1 && arr[j] > currVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currVal;
  }
  return arr;
}

module.exports = insertionSort;