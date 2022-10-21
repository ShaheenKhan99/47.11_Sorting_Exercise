/** merge
Given two sorted arrays, write a function called merge which accepts two sorted arrays and returns a new array with values from both arrays sorted.

This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.

Also, do not use the built in .sort() method! We’re going to use this function to implement a sort, so the helper itself shouldn’t depend on a sort. */

function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
    
  return result; 
}


/** mergeSort
Implement the merge sort algorithm. Given an array, this algorithm will sort the values in the array. Here’s some guidance for how merge sort should work:

Break up the array into halves until you can compare one value with another
Once you have smaller sorted arrays, merge those with other sorted pairs until you are back at the full length of the array
Once the array is merged back together, return the merged (and sorted!) array
In order to implement this function, you’ll also need to implement a merge function that takes in two sorted arrays and returns a new sorted array. You implemented this function in the previous exercise, so use that function! */

function mergeSort(arr) {
  if (arr.length <=1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

module.exports = { merge, mergeSort};