/**
 * Challenge: Delay With Message
 * Topic: 2.1 Promises
 * 
 * PROBLEM STATEMENT:
 * Create a function `delayWithMessage(message, delayTime)` that returns a Promise.
 * 
 * CONSTRAINTS:
 * 1. The Promise must resolve with the `message` string after `delayTime` milliseconds.
 * 2. If the `message` is empty (falsy) or is not a string, it must immediately reject with an Error object containing the message `"Invalid message"`.
 * 3. Do NOT use async/await yet—solve this using the `new Promise()` constructor and `setTimeout`.
 */

// ==========================================
// WRITE YOUR CODE HERE:
// ==========================================

function delayWithMessage(message, delayTime) {
  return new Promise((resolve, reject) => {
    if (!message || typeof message !== "string") {
      reject(new Error("Invalid message"));
      return;
    } else {
      setTimeout(() => {
        resolve(message);
      }, delayTime);
    }
  }); // FIX:Added closing parenthesis ')' to properly close new Promise(...)
}


// ==========================================
// TEST SUITE - Do not modify this verification block!
// ==========================================
try {
  if (typeof delayWithMessage !== "function") throw new Error("delayWithMessage is not defined!");

  const start = Date.now();

  // Test 1 & 2: Successful delay and message resolution
  delayWithMessage("Hello Async", 500)
    .then((result) => {
      const elapsed = Date.now() - start;
      console.log("Test 1 (Message Match):", result === "Hello Async" ? "✅ PASS" : "❌ FAIL");
      console.log("Test 2 (Time Delay):", (elapsed >= 470 && elapsed <= 700) ? "✅ PASS" : `❌ FAIL (Elapsed: ${elapsed}ms)`);
    })
    .catch((err) => console.log("Test 1/2 Failed with Error:", err.message));

  // Test 3: Rejection on invalid parameter
  delayWithMessage("", 100)
    .then(() => console.log("Test 3 (Validation check): ❌ FAIL (Resolved empty message instead of rejecting)"))
    .catch((err) => {
      console.log("Test 3 (Validation check):", err instanceof Error && err.message === "Invalid message" ? "✅ PASS" : "❌ FAIL");
    });

} catch (err) {
  console.error("❌ TEST RUN ERROR:", err.message);
}
