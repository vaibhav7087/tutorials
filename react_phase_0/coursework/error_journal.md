# Error Journal

> Track every mistake and its underlying reason. Over time, you'll see patterns in your thinking that you can fix.

## Format
- ❌ [What I got wrong]
  → WHY I was wrong: [The underlying reason]
  → PATTERN: [Category — e.g., "confused terminology", "wrong location in pipeline", "forgot about concurrency"]

---

<!-- Add entries below as you complete each topic -->
- ❌ SyntaxError: Identifier 'initialValue' has already been declared
  → WHY I was wrong: Tried to redeclare function parameters using 'let' inside the function body.
  → PATTERN: scoping rules / parameter redeclaration

- ❌ initialValue = +1; did not add to count
  → WHY I was wrong: Confused addition assignment (+=) with assigning a positive number (= +). Also hardcoded '1' instead of using stepSize.
  → PATTERN: operator syntax / hardcoding parameters
  
- ❌ TypeError [ERR_INVALID_MODULE_SPECIFIER]: Invalid module ".formatter.mjs"
  → WHY I was wrong: Forgot the slash in relative path `./formatter.mjs`. Node.js thought it was a package from node_modules.
  → PATTERN: relative import path syntax

- ❌ Named import not resolved or template literal printed literally (e.g., "${val}")
  → WHY I was wrong: Forgot to write `export` keyword before the function declaration, and used double quotes ("") instead of backticks (``) for string interpolation.
  → PATTERN: module export syntax / string interpolation syntax

- ❌ Rejection condition placed inside setTimeout instead of before it
  → WHY I was wrong: Checked validation inside the timer callback, causing invalid inputs to wait for delayTime before rejecting instead of rejecting immediately.
  → PATTERN: asynchronous control flow / validation timing

- ❌ Used logical AND (&&) instead of logical OR (||) for validation (!message && typeof message == "string")
  → WHY I was wrong: Combined conditions with &&, which prevented non-string values (like numbers) from triggering the rejection block.
  → PATTERN: boolean logic / parameter validation

- ❌ SyntaxError: missing ) after argument list on new Promise
  → WHY I was wrong: Closed the inner arrow function with } but omitted the closing parenthesis ) for the new Promise(...) constructor call.
  → PATTERN: bracket/parenthesis pairing syntax

- ❌ Returning value inside setTimeout callback inside an async function
  → WHY I was wrong: Placed return statement inside setTimeout, which returned to setTimeout instead of returning from the outer async function (causing it to return undefined after 1ms).
  → PATTERN: callback closure return value vs async return

- ❌ Pausing time in async functions
  → WHY I was wrong: Thought setTimeout alone would pause an async function, when async functions require awaiting a Promise (e.g., await new Promise(resolve => setTimeout(resolve, 300))) to pause execution.
  → PATTERN: async/await pause mechanism
- ❌ ReferenceError: response is not defined (attempting to use `response.json()` outside `try` block)
  → WHY I was wrong: Declared `const response` inside `try { ... }` block, which scoped `response` only to that block.
  → PATTERN: block scoping / variable lifetime in `try...catch`

- ❌ Swallowing errors inside `catch (error)` block
  → WHY I was wrong: Logged `error.message` in `catch` but forgot to `throw error`, causing the async function to resolve silently instead of rejecting on HTTP/network errors.
  → PATTERN: error handling / error bubbling

- ❌ Missing `await` on `response.json()`
  → WHY I was wrong: Thought `response.json()` was synchronous, resulting in a pending Promise instead of actual parsed JSON data.
  → PATTERN: async/await / promise resolution

- ❌ `TypeError: users.filter is not a function` (omitted `()` from `response.json`)
  → WHY I was wrong: Wrote `await response.json` without `()`, which referenced the method definition rather than executing it.
  → PATTERN: method invocation syntax `()`

- ❌ `TypeError: response.json is not a function` (omitted `await` from `fetch`)
  → WHY I was wrong: Wrote `const response = fetch(...)` without `await`, making `response` a Promise object (which lacks a `.json()` method).
  → PATTERN: missing `await` on `fetch()`

- ❌ Confused Array destructuring `[ ]` with Object destructuring `{ }`
  → WHY I was wrong: Wrote `const [ name, role ] = user;` to extract properties from an object instead of using `{ name, role }`.
  → PATTERN: destructuring syntax (curly `{}` for objects vs square `[]` for arrays)

---

# 🔍 Phase 0 Retrospective: Pattern Analysis

> Analyzed 15 errors across Sitting 1 & 2. Three dominant clusters emerged.

---

## Cluster 1: Syntax Precision — "I know what I want, but I type it wrong" (6/15 errors — 40%)

| # | Error | Actual Mistake |
|---|-------|---------------|
| 2 | `= +1` instead of `+= 1` | Wrong operator |
| 3 | `".formatter.mjs"` instead of `"./formatter.mjs"` | Missing `/` |
| 4 | `""` instead of `` ` ` `` for template literals | Wrong quote type |
| 7 | Missing `)` on `new Promise(...)` | Unclosed parenthesis |
| 12 | `response.json` instead of `response.json()` | Missing `()` |
| 15 | `[ ]` instead of `{ }` for object destructuring | Wrong bracket type |

**What this means:** You understand the concept but rush the syntax. These are all 1-character mistakes.

### ✅ Rule to Follow:
> **"Scan every line for matching pairs before running."**
> Checklist: Are my brackets paired `() {} []`? Did I use backticks for interpolation? Did I call the function with `()`?

---

## Cluster 2: Code Placement — "Right code, wrong location" (5/15 errors — 33%)

| # | Error | Actual Mistake |
|---|-------|---------------|
| 1 | Redeclaring function params with `let` | Variable already existed in outer scope |
| 5 | Validation inside `setTimeout` callback | Should have been before it |
| 8 | `return` inside `setTimeout` callback | Returned to wrong function |
| 10 | `response` declared in `try`, used outside | Block scoping violation |
| 11 | Swallowed error in `catch` instead of re-throwing | Error stayed trapped inside catch |

**What this means:** You don't yet instinctively feel where a variable "lives and dies." When you write `try { const x = ... }`, that `x` ceases to exist after the `}`. Same with callbacks — code inside `setTimeout(() => { })` runs in a different world than the outer function.

### ✅ Rule to Follow:
> **"Before using any variable, point to the line where it was created. Are you still inside the same `{ }` block?"**
> If NO → move your code inside that block, or declare the variable in the outer scope.

---

## Cluster 3: Async Blindness — "Forgot that this returns a Promise" (4/15 errors — 27%)

| # | Error | Actual Mistake |
|---|-------|---------------|
| 9 | `setTimeout` doesn't pause async functions | Needed `await new Promise(...)` |
| 13 | Missing `await` on `response.json()` | Got Promise instead of data |
| 14 | Missing `await` on `fetch()` | Got Promise instead of Response |
| 6 | `&&` vs `||` in boolean validation | Logical operator confusion |

**What this means:** Promises are invisible. Unlike a syntax error that crashes immediately, a missing `await` silently gives you a Promise object that *looks* like it could be data until you try to `.filter()` or `.map()` it.

### ✅ Rule to Follow:
> **"The Three Functions That Always Need `await`:"**
> 1. `fetch()` → returns a Promise
> 2. `response.json()` → returns a Promise
> 3. Any function YOU marked `async` → returns a Promise
>
> If you call any of these three without `await`, you will get a Promise object, not actual data.

---

## 📋 Pre-Run Checklist (Use Before Every `node <file>.js`)

- [ ] Are all `()`, `{}`, `[]` brackets properly paired and matched?
- [ ] Am I using backticks `` ` ` `` (not `""`) for template literals?
- [ ] Does every `fetch()` and `.json()` have `await` in front?
- [ ] Is every variable used in the same `{ }` block where it was declared?
- [ ] Am I `return`ing from the right function (not from inside a callback)?

