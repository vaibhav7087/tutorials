# Topic 2.2: Async / Await & Error Handling

> **Prerequisites:** Promises (Topic 2.1), basic understanding of asynchronous code.
> **Estimated Time:** 45 minutes (15 min reading/WIU + 30 min challenge)

---

## Learning Objectives

By the end of this topic, you will be able to:
- Explain what the `async` keyword does to a function signature and return value.
- Use the `await` operator to wait for Promises in a clean, synchronous-looking style.
- Handle asynchronous errors effectively using `try...catch` blocks.

---

## The Concepts

While `.then()` and `.catch()` work well for simple Promises, chaining multiple Promises together can quickly become hard to read. ES2017 introduced **Async/Await**, which is syntactic sugar built on top of Promises. It allows you to write asynchronous code that looks and behaves like synchronous code.

---

### 1. The `async` Keyword
  
Declaring a function as `async` does two things:
1. It allows you to use the `await` keyword inside that function.
2. It automatically wraps the function's return value in a **Promise**.

```javascript
// Normal function returning a primitive
function getGreeting() {
  return "Hello!";
}

// Async function returning a Promise that resolves with "Hello!"
async function getAsyncGreeting() {
  return "Hello!";
}

getAsyncGreeting().then((val) => console.log(val)); // Prints: "Hello!"
```

---

### 2. The `await` Operator

The `await` keyword pauses the execution of an `async` function until the Promise settles (resolves or rejects), then returns the resolved value.

> ⚠️ **Important**: `await` can ONLY be used inside an `async` function (or at the top level of ES modules).

```javascript
// Consuming a promise with Async/Await
async function showUser() {
  console.log("Fetching user...");
  
  // Pauses execution here until checkServerStatus completes
  const status = await checkServerStatus(true); 
  
  console.log("Result:", status); // "Result: Server is active"
}
```

---

### 3. Error Handling with `try...catch`

When an `await`ed Promise rejects, it throws an error. You catch these errors using standard JavaScript `try...catch` blocks.

```javascript
async function handleServerCheck() {
  try {
    const status = await checkServerStatus(false); // Rejects!
    console.log(status);
  } catch (error) {
    console.error("Caught error:", error.message); // Handles the rejection!
  } finally {
    console.log("Done checking status."); // Always runs!
  }
}
```

---

## 📚 Reading Checklist

- [ ] [MDN Reference: async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [ ] [MDN Reference: await operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)

---

## 🧠 Challenge: Async Student Data Fetcher

### Your Task
Create an `async` function `fetchStudentData(studentId)` that simulates fetching student information asynchronously.

### Constraints
1. Must return a Promise (achieved using `async`).
2. If `studentId` is not provided or is less than or equal to 0, throw an `Error("Invalid student ID")`.
3. If `studentId` is valid, simulate a 300ms delay and return an object: `{ id: studentId, name: "Tany", cgpa: 10 }`.
4. Do **not** use `.then()`—you must use `async/await` and `try/catch` for handling asynchronous flows.

---

## 📖 Sources & Documentation

| Concept | Official Documentation |
|---------|----------------------|
| Async Functions | [MDN async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) |
| Await Operator | [MDN await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) |
| Try...Catch | [MDN try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) |
