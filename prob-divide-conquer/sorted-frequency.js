function sortedFrequency(arr, target) {
    // Helper function to find first occurrence of the target
    function findFirstOccurrence() {
        let left = 0;
        let right = arr.length - 1;
        let firstOccurrence = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (arr[mid] === target) {
                firstOccurrence = mid;
                right = mid - 1;
            }   else if (arr[mid] < target) {
                left = mid + 1;
            }   else {
                right = mid - 1;
            }
        }

        return firstOccurrence;
    }

    // Helper function to find last occurence of the target
    function findLastOccurence() {
        let left = 0;
        let right = arr.length - 1;
        let lastOccurrence = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (arr[mid] === target) {
                lastOccurrence = mid;
                left = mid + 1;
            }   else if (arr[mid] < target) {
                left = mid + 1;
            }   else {
                right = mid - 1;
            }
        }

        return lastOccurrence;

    }

    // Find first and last occurrence
    const firstIndex = findFirstOccurrence();
    const lastIndex = findLastOccurence();

    // Calculate frequency
    if (firstIndex !== -1 && lastIndex !== -1) {
        return lastIndex - firstIndex + 1;
    }   else {
        return -1;
    }

}

module.exports = sortedFrequency