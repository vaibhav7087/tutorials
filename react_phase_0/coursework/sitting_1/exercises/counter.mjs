/**
 * Exercise: counter.mjs (Topic 1.2 ES Modules)
 * 
 * DESCRIPTION:
 * Create a simple counter function `createCounter(initialValue)` that uses closures to maintain a private `count` state.
 * It should return an object with `getValue()` and `increment()` methods.
 * 
 * CONSTRAINTS:
 * 1. Must export `createCounter` as the DEFAULT export.
 */

export default function createStepCounter(initialValue) {
    let count = initialValue;
    return {
        getValue() {
            return count;
        },
        increment() {
            count++;
        }

    }
}