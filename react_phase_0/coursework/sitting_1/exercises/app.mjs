/**
 * Exercise: app.mjs (Topic 1.2 ES Modules)
 * 
 * DESCRIPTION:
 * Import your default `createCounter` from `./counter.mjs` and named `formatResult` from `./formatter.mjs`.
 * Initialize a counter, increment it, and format the output.
 * 
 * CONSTRAINTS:
 * 1. Do NOT modify the TEST SUITE verification block below.
 * 2. You must write the import statements and setup logic so the test suite runs correctly.
 */

// ==========================================
// WRITE YOUR IMPORTS AND SETUP HERE:
// ==========================================

import createCounter from './counter.mjs';
import { formatResult } from './formatter.mjs';


// ==========================================
// TEST SUITE - Do not modify this verification block!
// ==========================================
try {
  if (typeof createCounter !== "function") throw new Error("createCounter is not defined! Did you import/declare it?");
  if (typeof formatResult !== "function") throw new Error("formatResult is not defined! Did you import/declare it?");

  const testCounter = createCounter(5);
  testCounter.increment();
  const result = formatResult(testCounter.getValue());

  console.log("Counter Val (6):", testCounter.getValue() === 6 ? "✅ PASS" : "❌ FAIL");
  console.log("Formatted Result Match:", result === "The current count is: 6" ? "✅ PASS" : "❌ FAIL");
} catch (err) {
  console.error("❌ TEST RUN ERROR:", err.message);
}
