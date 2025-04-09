function flip(array, n) {
    // Concat subarray to be flipped at n (left side)
    const flipped_subarray = array.slice(0, n);

    // Concat the rest of the subarray (right side)
    const remaining_subarray = array.slice(n);

    // Flip
    flipped_subarray.reverse();

    // If n is larger than length of array, flip entire array
    // Else concat as expected.
    if (n > array.length) {
        return flipped_subarray;
    } else {
        // Combine (left side) + (right side)
        return flipped_subarray.concat(remaining_subarray);
    }
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    for (let index = array.length; index > 1; index--) {
        // Find index of the largest pancake in current array state pre-flip
        let maxIndex = 0;
        for (let j_index = 1; j_index < index; j_index++) {
            if (array[j_index] > array[maxIndex]) {
                maxIndex = j_index;
            }
        }

        // If the largest pancake isn't already at the top, bring it there by flipping it there.
        if (maxIndex != index - 1) {
            if (maxIndex != 0) {
                array = flip(array, maxIndex + 1);
            }
            array = flip(array, index);
        }
    }
    return array;
}