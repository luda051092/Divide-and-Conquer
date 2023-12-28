function findFloor(arr, x) {
  let left = 0;
  let right = arr.length - 1;
  let floor = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // If arr[mid] is equal to x, it is the floor
    if (arr[mid] === x) {
        return arr[mid];
    }

    // If arr[mid] is greater than x, search in the left half
    if (arr[mid] > x) {
        right = mid - 1;
    }
    // If arr[mid] is less than x, update floor and search in the right half
    else {
        floor = arr[mid];
        left = mid + 1;
    }
  }

  return floor;
}

module.exports = findFloor