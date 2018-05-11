// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    // so fib(2) = fib(1) + fib(0)
    // fib(0) = 0 && fib(1) = 1
    // recursion with fib(0) and fib(1) base cases
    if (n==1) { return 1 }
    if (n==0) { return 0 }
    return fib(n-1) + fib(n-2);
}

module.exports = fib;
