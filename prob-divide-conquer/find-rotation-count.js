function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        // If the array is sorted, the rotation count = 0.
        if (arr[left] <= arr[right]) {
            return left;
        }

        const mid = Math.floor((left + right) / 2);
        const next  = (mid + 1) % arr.length;
        const prev = (mid + arr.length - 1) % arr.length;

        // Check if pivot is found
        if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
            return mid;
        }

        // If the left half is sorted, search in the right half
        if (arr[left] <= arr[mid]) {
            left = mid + 1;
        }
        // If the right half is sorted, search in the left half
        else if (arr[mid] <= arr[right]) {
            right = mid - 1;
        }
    }

    return -1; // Rotation count not found 
  
}

module.exports = findRotationCount