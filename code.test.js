const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

// Test 1: Make sure output is properly sorted
const testSort =
    jsc.forall("array nat", function(arr) {
        var a1 = JSON.parse(JSON.stringify(arr));
        var a2 = JSON.parse(JSON.stringify(arr));
        return JSON.stringify(pancakeSort(a1)) ==
            JSON.stringify(a2.sort(function(a, b)
                { return a - b; }));
    });

// Test 2: Make sure that flipping preserves array length
const testFlipLength =
    jsc.forall("array nat", jsc.nat, function(arr, n) {
        const a1 = flip(arr, n);

        return a1.length == arr.length;
    });

// Test 3: Make sure that flipping preserves array values
const testFlipPreserve =
    jsc.forall("array nat", jsc.nat, function(arr, n) {
        const a1 = flip(arr, n);
        const a2 = arr.sort();
        const a3 = a1.sort();

        return JSON.stringify(a2) == JSON.stringify(a3);
    });

// Test 4: Make sure that flipping TWICE results in the same array state
const testFlipTwice =
    jsc.forall("array nat", jsc.nat, function(arr, n) {
        const a1 = flip(arr, n);
        const a2 = flip(a1, n);

        return JSON.stringify(a2) == JSON.stringify(arr);
    });

jsc.assert(testSort);
console.log("testSort Passed.");
jsc.assert(testFlipLength);
console.log("testFlipLength Passed.");
jsc.assert(testFlipPreserve);
console.log("testFlipPreserve Passed.");
jsc.assert(testFlipTwice);
console.log("testFlipTwice Passed.")