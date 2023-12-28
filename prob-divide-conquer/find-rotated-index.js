function findRotatedIndex(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        // Check if the left half is sorted
        if (arr[left] <= arr[mid]) {
            // Check if the target is in the sorted left half
            if (arr[left] <= target && target < arr[mid]) {
                right = mid - 1;

            }   else {
                left = mid + 1;
            }
        }
        // If the left half is not sorted, than the right half must be sorted.
        else {
            // Check if the target is in the sorted right half
            if (arr[mid] < target && target <= arr[right]) {
                left = mid + 1;
            }   else {
                right = mid - 1;
            }
        }
    }

    return -1; // Target not found
 
}

module.exports = findRotatedIndex