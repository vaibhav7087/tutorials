/**
 * Challenge: Async Student Data Fetcher
 * Topic: 2.2 Async / Await
 * 
 * PROBLEM STATEMENT:
 * Create an async function `fetchStudentData(studentId)` that simulates fetching student information asynchronously.
 * 
 * CONSTRAINTS:
 * 1. Must be declared with the `async` keyword.
 * 2. If `studentId` is not provided, not a number, or <= 0, throw an Error with the message `"Invalid student ID"`.
 * 3. Otherwise, simulate a 300ms delay using a Promise and setTimeout, then return an object: `{ id: studentId, name: "Tany", cgpa: 10 }`.
 * 4. Do NOT write any function signature or boilerplate in your exercise file—only write the code from scratch above the tests.
 */

// ==========================================
// WRITE YOUR CODE HERE:
// ==========================================
async function fetchStudentData(studentId) {
  if (!studentId || typeof studentId !== "number" || studentId <= 0) {
    throw new Error("Invalid student ID");

  }
  await new Promise((resolve, reject) => setTimeout(() => {
    resolve("Success")
  }, 300));
  return { id: studentId, name: "Tany", cgpa: 10 };
}



// ==========================================
// TEST SUITE - Do not modify this verification block!
// ==========================================
(async () => {
  try {
    if (typeof fetchStudentData !== "function") throw new Error("fetchStudentData is not defined!");

    const start = Date.now();

    // Test 1 & 2: Successful async data retrieval
    try {
      const data = await fetchStudentData(101);
      const elapsed = Date.now() - start;

      console.log("Test 1 (Data Match):", (data && data.id === 101 && data.name === "Tany" && data.cgpa === 10) ? "✅ PASS" : "❌ FAIL");
      console.log("Test 2 (Time Delay):", (elapsed >= 270 && elapsed <= 500) ? "✅ PASS" : `❌ FAIL (Elapsed: ${elapsed}ms)`);
    } catch (err) {
      console.log("Test 1/2 Failed with Error:", err.message);
    }

    // Test 3: Rejection / Error Handling on invalid ID
    try {
      await fetchStudentData(0);
      console.log("Test 3 (Validation check): ❌ FAIL (Resolved invalid ID instead of throwing)");
    } catch (err) {
      console.log("Test 3 (Validation check):", err instanceof Error && err.message === "Invalid student ID" ? "✅ PASS" : "❌ FAIL");
    }

  } catch (err) {
    console.error("❌ TEST RUN ERROR:", err.message);
  }
})();
