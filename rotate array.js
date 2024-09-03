function rotate(nums, k) {
    const n = nums.length;
    k = k % n;

    // Helper function to reverse a portion of the array
    function reverse(start, end) {
        while (start < end) {
            // Swap elements at indices start and end
            const temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }

    // Reverse the entire array
    reverse(0, n - 1);

    // Reverse the first k elements
    reverse(0, k - 1);

    // Reverse the remaining elements
    reverse(k, n - 1);
}

// Example usage:
const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
rotate(nums, k);
console.log(nums);  // Output: [5, 6, 7, 1, 2, 3, 4]
