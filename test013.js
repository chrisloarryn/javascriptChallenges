// 5
nums = [2, 3, 6, 6, 5];

const getSecondLargest = (nums) => {
    // Complete the function
    const sorted_array = nums.sort((a, b) => a - b);
    const unique_sorted_array =
        sorted_array
            .filter((elem, index, self) => index === self.indexOf(elem));

    return unique_sorted_array[unique_sorted_array.length - 2];
};

console.log(getSecondLargest(nums))
