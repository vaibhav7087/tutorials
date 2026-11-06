# Topic 2.1: Promises

> **Prerequisites:** Callbacks, basic understanding of asynchronous code.
> **Estimated Time:** 45 minutes (15 min reading/WIU + 30 min challenge)

---

## Learning Objectives

By the end of this topic, you will be able to:
- Explain the 3 states of a Promise: **Pending**, **Fulfilled**, and **Rejected**.
- Consume promises using `.then()`, `.catch()`, and `.finally()`.
- Create your own Promise using the `new Promise()` constructor.

---

## The Concepts

JavaScript is single-threaded, meaning it can only do one thing at a time. However, operations like fetching data from a server or loading a file can take time. If we did them synchronously, the whole browser would freeze.

Promises allow us to handle asynchronous operations. A **Promise** is a placeholder object for a value that will be resolved (success) or rejected (failure) in the future.

---

### 1. Promise States

A Promise is always in one of three states:
1. **Pending**: The async operation is still running (e.g., waiting for API response).
2. **Fulfilled**: The operation completed successfully, and we have the result.
3. **Rejected**: The operation failed, and we have an error.

---

### 2. Consuming Promises with `.then()` and `.catch()`

When a function returns a Promise, we use:
- **`.then(callback)`**: to receive the successful result.
- **`.catch(callback)`**: to catch and handle any errors.
- **`.finally(callback)`**: to run code regardless of success or failure (e.g., turning off loading spinners).

```javascript
// Consuming a promise
fetchDataFromServer()
  .then((data) => {
    console.log("Success! Data received:", data);
  })
  .catch((error) => {
    console.error("Error occurred:", error.message);
  })
  .finally(() => {
    console.log("Operation complete.");
  });
```

---

### 3. Creating a Promise (`new Promise`)

You can wrap any asynchronous callback-based code in a Promise using the constructor. It takes a executor function with two arguments: `resolve` and `reject`.

```javascript
// Creating a Promise
function checkServerStatus(isOnline) {
  return new Promise((resolve, reject) => {
    // Simulate async network delay
    setTimeout(() => {
      if (isOnline) {
        resolve("Server is active"); // Fulfilled state
      } else {
        reject(new Error("Server is offline")); // Rejected state
      }
    }, 1000);
  });
}
```

---

## 📚 Reading Checklist

- [ ] [MDN Reference: Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [ ] [MDN Guide: Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

---

## 🧠 Challenge: Delay With Message

### Your Task
Create a function `delayWithMessage(message, delayTime)` that returns a Promise. 

### Constraints
1. The Promise must wait for `delayTime` milliseconds before resolving.
2. If the operation succeeds, it should resolve with the `message` string.
3. **Validation Rule**: If `message` is empty or not a string, it must immediately reject with an Error object containing the message `"Invalid message"`.
4. Do **not** write any function signature or boilerplate in your exercise file—only write the code from scratch above the tests.

---

## 📖 Sources & Documentation

| Concept | Official Documentation |
|---------|----------------------|
| Promise API | [MDN Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) |
| Using Promises | [MDN Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) |
