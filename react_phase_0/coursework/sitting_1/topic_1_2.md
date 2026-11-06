# Topic 1.2: ES Modules (Imports & Exports)

> **Prerequisites:** Topic 1.1 (Closures).
> **Estimated Time:** 30 minutes (10 min reading/WIU + 20 min challenge)

---

## Learning Objectives

By the end of this topic, you will be able to:
- Differentiate between **Named Exports** and **Default Exports**.
- Use the correct `import` and `export` syntax in Node.js/modern JavaScript.
- Explain module scope and why it prevents global namespace conflicts.

---

## The Concepts

Before ES Modules (ESM), JavaScript files shared everything in a single global scope, making it easy to accidentally overwrite other scripts' variables. ES Modules give each file its own private **module scope**. Variables in a file are completely hidden unless you explicitly **export** them.

---

### 1. Named Exports vs. Default Exports

There are two main ways to share code between files:

#### A. Named Exports
Use when a file exports **multiple** utilities. You must import them using the exact same name, surrounded by `{ curly braces }`.

```javascript
// math.mjs
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// main.mjs
import { add, subtract } from "./math.mjs";
console.log(add(5, 3)); // 8
```

#### B. Default Exports
Use when a file has a **single main thing** to export (like a React component or a class). You do *not* use curly braces when importing, and you can name the import whatever you want.

```javascript
// logger.mjs
export default function logMessage(msg) {
  console.log(`[Log]: ${msg}`);
}

// main.mjs
import customLoggerName from "./logger.mjs"; // No curly braces!
customLoggerName("Hello!"); // [Log]: Hello!
```

---

## 📚 Reading Checklist

- [ ] [MDN Guide: JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [ ] [MDN Reference: import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [ ] [MDN Reference: export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)

---

## 🧠 Challenge: Modular Counter App

### Your Task
You will build a mini modular application using three files in the `coursework/sitting_1/exercises/` directory.

1. **`counter.mjs`**: Should export your step counter logic.
2. **`formatter.mjs`**: Should export a formatting utility.
3. **`app.mjs`**: The main entry point that imports both modules, runs the counter, formats the output, and prints it.

### Constraints
1. **`counter.mjs`** must use a **Default Export** to export a function `createCounter(initialValue)`.
2. **`formatter.mjs`** must use a **Named Export** to export a function `formatResult(val)`. It should return a string like: `"The current count is: <val>"`.
3. **`app.mjs`** must import both modules correctly and run the test steps.

### Verification
You will run `app.mjs` using node:
```bash
node coursework/sitting_1/exercises/app.mjs
```

---

## 📖 Sources & Documentation

| Concept | Official Documentation |
|---------|----------------------|
| ES Modules | [MDN Web Docs: Guide to Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) |
| Import Syntax | [MDN Statement: import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) |
| Export Syntax | [MDN Statement: export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) |
