# Topic 1.1: Closures

> **Prerequisites:** Scope basics, functions.
> **Estimated Time:** 45 minutes (15 min reading/WIU + 30 min challenge)

---

## Learning Objectives

By the end of this topic, you will be able to:
- Explain lexical scope and how JavaScript finds variables.
- Write a closure that captures and maintains private state.
- Explain why closures are crucial for React Hooks like `useState`.

---

## The Concepts

### 1. Lexical Scope

**Lexical scope** means that variable access is determined by where variables are declared in the written source code. Inner functions can look "outward" to access parent variables, but parent scopes cannot look "inward" to access inner variables.

```javascript
// Example: Inner function has access to outer scope variables
const globalVal = "global";

function outer() {
  const outerVal = "outer";

  function inner() {
    const innerVal = "inner";
    console.log(globalVal); // ✅ Accessible
    console.log(outerVal);  // ✅ Accessible
    console.log(innerVal);  // ✅ Accessible
  }
  inner();
  // console.log(innerVal); // ❌ Error: innerVal is not defined in this scope
}
outer();
```

---

### 2. Closures & Variable Capture

A **closure** is created when an inner function is defined inside an outer function, and the inner function keeps access to the outer function's variables even *after* the outer function has finished executing.

This allows us to create private variables that cannot be modified directly from the outside.

```javascript
// Example: Encapsulating a private state
function createCounter() {
  let count = 0; // Private state variable

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
// console.log(counter.count);    // ❌ undefined (count is private!)
```

---

### 3. The React Connection

React Hooks like `useState` use closures to store state. Since React components are just functions that run on every render, the local variables inside them are redeclared each time. To remember values, React keeps your state in a separate scope, and the `useState` getter and setter functions act as closures to read and write to that hidden state.

---

## 📚 Reading Checklist

- [ ] [MDN Closures: Lexical Scoping](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#lexical_scoping)
- [ ] [MDN Closures: Practical Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#practical_closures)

---

## 🧠 Challenge: Private Step Counter

### Your Task
Create a counter function `createStepCounter(initialValue, stepSize)` that uses closures to maintain a private `count` state.

### Constraints
1. The raw count must not be directly accessible or editable from the outside.
2. Return an object with three methods:
   - `getValue()`: returns current count.
   - `stepUp()`: increments count by `stepSize` and returns new count.
   - `stepDown()`: decrements count by `stepSize` and returns new count.

### Submission Template
Create your submission file at `coursework/sitting_1/exercises/step_counter.js`:

```javascript
function createStepCounter(initialValue = 0, stepSize = 1) {
  let count = initialValue;

  return {
    getValue() {
      return count;
    },
    stepUp() {
      count += stepSize;
      return count;
    },
    stepDown() {
      count -= stepSize;
      return count;
    }
  };
}

// Verification Tests
const myCounter = createStepCounter(10, 2);
console.log("Val (10):", myCounter.getValue() === 10 ? "✅" : "❌");
console.log("Up (12):", myCounter.stepUp() === 12 ? "✅" : "❌");
console.log("Down (10):", myCounter.stepDown() === 10 ? "✅" : "❌");
console.log("Private Check:", myCounter.count === undefined ? "✅" : "❌");
```

---

## 📖 Sources & Documentation

| Concept | Official Documentation |
|---------|----------------------|
| Closures & Scope | [MDN Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) |
