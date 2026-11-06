# JavaScript Day 2: React Readiness Master Learning Path

Welcome to Day 2 of your React Readiness journey! We are picking up from your solid foundation in Day 1 and Higher-Order Functions, focusing on the concepts that make React hooks, state management, and side effects make sense.

**Estimated Total Time**: ~4 to 5 hours.
**Recommended Schedule**: 2 Sittings (~2 to 2.5 hours each) completed in one intensive learning session.

---

## 🧠 Learning Methodology

Every topic in this coursework follows a **9-step cycle**. Do NOT skip steps — the ones that feel tedious (RECALL, ERROR LOG) make the biggest difference in long-term retention.

| Step | What You Do |
|------|------------|
| **1. LEARN** | Read the topic document + required external docs |
| **2. ANSWER** | Write a structured WIU (What I Understand) per section — your understanding + doubts |
| **3. REVIEW** | Get doubts resolved and misconceptions corrected |
| **4. APPLY** | Solve the challenge. Submit even if incomplete — time pressure reveals real gaps |
| **5. VERIFY** | Get challenge reviewed |
| **6. REVISE** | Update your challenge with corrections. Mark what changed and why |
| **7. BREAK IT** | (Code topics) Git branch + local dev — intentionally break things, predict outcomes |
| **8. ERROR LOG** | Record what you got wrong + the underlying reason |
| **9. RECALL** | Before starting the next sitting, re-answer ALL previous self-assessments from memory |

### 📝 WIU (What I Understand) File Format
Structure every `coursework/sitting_X/what_i_understand/wiu_topic_X.Y.md` like this:
```markdown
# WIU Topic [X.Y] - [Topic Name]

## Concept 1: [Concept Name]
- **My Explanation**: [Explain this concept in your own words]
- **Key Takeaway**: [Why does this matter for React?]
- **My Doubts**: [Any questions or things you are confused about]
```

### 📓 Error Log Format
Use `coursework/error_journal.md` to track mistakes:
```markdown
- ❌ [What I got wrong]
  → WHY I was wrong: [The underlying reason]
  → PATTERN: [Category — e.g., "lexical scope confusion", "asynchronous race conditions", "wrong module export syntax"]
```

---

## 📅 SITTING 1: Closures, Scope & ES Modules
*Estimated Time: ~1.25 hours*
*Goal: Understand how JavaScript remembers variables (for React State & Hooks) and how files share code (for React Component Structure).*

### Topic 1.1: Closures (45 min)
- **Lexical Scope**: How JavaScript determines variable accessibility based on physical location in source code.
- **Variable Capture**: How inner functions "remember" and access variables from their outer scope even after the outer function has finished executing.
- **Why React Hooks depend on this**: Understanding how `useState` stores values between renders.

### Topic 1.2: ES Modules (30 min)
- **Named vs Default Exports**: When to use `{ braces }` and when to omit them.
- **Module Scope**: How module files run in their own private scope.

> **Action Item for Sitting 1**: Build a modular "User Registry & State Simulator" utility using closures to store private user lists/states, exporting specific actions using ES Modules.

### ✅ Self-Assessment — Sitting 1
- [ ] Explain in plain English how a nested function can access a variable defined in its parent function even after the parent has returned.
- [ ] What is the difference between `export default MyComponent` and `export { MyComponent }` when importing them in another file?
- [ ] Why do React hooks like `useState` seem to "remember" state between renders? Connect this to closures.

---

## 📅 SITTING 2: Asynchronous JS & APIs
*Estimated Time: ~2.5 hours*
*Goal: Master calling APIs, handling delayed data, and managing errors (critical for React data fetching).*

### Topic 2.1: Promises (45 min)
- **Promise States**: Pending, Fulfilled, and Rejected.
- **Handling Promises**: Using `.then()` and `.catch()` syntax.

### Topic 2.2: Async/Await (45 min)
- **Async/Await Syntax**: Writing asynchronous code that reads like synchronous code.
- **Error Handling**: Using `try/catch` blocks to handle failures.

### Topic 2.3: Fetch API (1 hour)
- **HTTP Methods & JSON**: Making GET/POST requests and parsing `.json()`.

> **Action Item for Sitting 2**: Build a mini Weather / Stock Search Dashboard that fetches data from a public mockup API, handles loading/error states, and persists search history in Local Storage.

### ✅ Self-Assessment — Sitting 2
- [ ] What is the difference between a pending promise and a rejected promise?
- [ ] Why is `await` only allowed inside an `async` function?
- [ ] How does `try/catch` handle errors in async/await compared to `.catch()` in promise chains?

---

## 🎤 POST-PROJECT: Interview & Teach-Back
*Estimated Time: 30 min*
*Goal: Prove you can explain advanced JS concepts before jumping into React.*
