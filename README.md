# Pancake Sort

There is an abstract data type (ADT) called a *pancake array*, which provides
the function `flip(array, n)`, which takes the top (first) $n$ items in the
array and "flips them over", i.e. reverses their order.

For example, if you called `flip([1, 2, 3, 4], 2)`, the result would
be the array  `[2, 1, 3, 4]`, because the order of the (first) top 2
elements in the array has been reversed.

If $n$ is larger than the number of items in the array, the entire array gets
reversed. The intuition for the name "pancake array" is that with a stack of
pancakes, you can insert a spatula at any point in the stack and use it to flip
over all pancakes above that point.

Implement a sorting function that will sort an array of pancakes such that the
smallest pancake is at the top. You may use only the `flip()` function to
manipulate the array. You may break ties arbitrarily. Test your new function;
I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`, but it only tests
`pancakeSort()`, not `flip()`.

Hint: Start by thinking about the calls to `flip()` required to move a *single*
element into its correct position.

## Runtime Analysis

What is the asymptotic runtime ($\Theta$) of your algorithm in terms of the
number of comparisons of pancakes? What is it in terms of the number of flips?
Add your answer to this markdown file.

<hr>

Assuming "pancakes" correlates to each element `n`, and the number of flips correlates to the number of times `flip()` is run:

The first outer loop runs in linear time through each element, but in reverse from the right side of the array to the left side.

$O(n)$

The inner loop also runs in linear time through each element, but in ascending order from the left to the right side of the array in order to find the "pancake" (or value) that is the largest.

$O(n)$

The actual flipping operation is done in constant time since it is just array concatination and reverse operations

$O(1)$

General:

Thus the Asymptotic Runtime is:

$O(n) * O(n) = \Theta(n^2)$ - (Number of pancake comparisons)

The runtime in terms of number of flips is $O(n)$ since the inner loop performs the flips, and it runs in linear time, as well as in-place.

- Referenced https://www.geeksforgeeks.org/pancake-sorting/ for code and runtime analysis. All code written is my own.

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."
