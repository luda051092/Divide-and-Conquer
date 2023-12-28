function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // Check if the mid element is 1
        if (arr[mid] === 1) {
            // Move to the right half
            left = mid + 1
        }   else {
            // Move to the left half (including the current mid element)
            right = mid - 1;
        }
    }

    // The variable 'left' now points to the first occurance of 0
    // The count of 0's is the total length - the index of the first 0
    return arr.length - left;
  
}

module.exports = countZeroes