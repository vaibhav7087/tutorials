/**
 * Challenge: Private Step Counter
 * Topic: 1.1 Closures
 * 
 * PROBLEM STATEMENT:
 * Create a counter function `createStepCounter(initialValue, stepSize)` 
 * that uses closures to maintain a private `count` state.
 * 
 * CONSTRAINTS:
 * 1. The raw count must not be directly accessible or editable from the outside.
 * 2. Return an object with three methods:
 *    - getValue(): returns current count.
 *    - stepUp(): increments count by stepSize and returns new count.
 *    - stepDown(): decrements count by stepSize and returns new count.
 */

function createStepCounter(initialValue, stepSize) {
    let count = initialValue;
    return {
        getValue() {
            return count;
        }, stepUp() {
            count += stepSize;
            return count;
        }, stepDown() {
            count -= stepSize;
            return count;
        }

    }
}
// ==========================================
// TEST SUITE - Do not modify this verification block!
// ==========================================
const myCounter = createStepCounter(10, 2);
console.log("Val (10):", myCounter.getValue() === 10 ? "✅ PASS" : "❌ FAIL");
console.log("Up (12):", myCounter.stepUp() === 12 ? "✅ PASS" : "❌ FAIL");
console.log("Down (10):", myCounter.stepDown() === 10 ? "✅ PASS" : "❌ FAIL");
console.log("Private Check:", myCounter.count === undefined ? "✅ PASS" : "❌ FAIL");
