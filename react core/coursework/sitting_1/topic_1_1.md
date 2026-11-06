# Topic 1.1: JSX & Your First Component

**Target Milestone:** 🎯 Milestone 1 — React Foundations & Static Shell
**Estimated Time:** 45 minutes

Welcome to Sitting 1! We are going to build the static shell of the **CureSlot Admin Dashboard**. Before we can build the dashboard, we need to understand how React constructs UI using Components and JSX.

## 📖 Step 1: LEARN

### 1. What is React?
React is a JavaScript library for building user interfaces. Instead of manually manipulating the DOM (like `document.getElementById`), you describe *what* the UI should look like, and React efficiently updates the DOM to match. It uses a **Virtual DOM** to figure out the minimal set of changes needed.
  
### 2. Components
In React, a **Component** is a JavaScript function that returns markup. It's an independent, reusable piece of UI. 
For your CureSlot dashboard, a `Sidebar`, a `Header`, and an `AppointmentCard` will all be components.

```javascript
// A simple React Component
function Header() {
  return <h1>CureSlot Admin</h1>;
}
```
*Note: Component names MUST start with a Capital Letter so React knows they are components, not standard HTML tags.*

### 3. JSX Syntax
JSX is a syntax extension for JavaScript that looks like HTML. It allows you to write markup inside your JavaScript files.

**The Rules of JSX:**
1. **Return a single root element**: If your component has multiple elements, wrap them in a parent tag or a Fragment (`<> ... </>`).
2. **Close all tags**: Tags like `<img>` must become `<img />`.
3. **camelCase all most things**: `class` becomes `className` (since `class` is a reserved word in JS), `onclick` becomes `onClick`, `for` becomes `htmlFor`.

```javascript
// Valid JSX
function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li>Dashboard</li>
        <li>Appointments</li>
      </ul>
      <hr />
    </div>
  );
}
```

### 4. Embedding JavaScript in JSX
You can evaluate JavaScript expressions inside JSX by wrapping them in curly braces `{}`.

```javascript
function WelcomeMessage() {
  const doctorName = "Dr. Shah";
  const unreadMessages = 3;

  return (
    <div>
      <p>Welcome back, {doctorName}!</p>
      <p>You have {unreadMessages > 0 ? unreadMessages : 'no'} unread messages.</p>
    </div>
  );
}
```

### 5. Rendering
To render a React component into the actual browser DOM, you use `createRoot`. In modern React setups (like Vite or Next.js), this is usually done once in an entry file (like `main.jsx` or `index.js`).

```javascript
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(<App />); // App is your root component
```

### 📚 Required Readings
1. [React Docs: Describing the UI](https://react.dev/learn/describing-the-ui) (Read "Your First Component" and "Writing Markup with JSX")
2. [Roadmap.sh: JSX](https://roadmap.sh/react) (Review the JSX node)

---

## 📝 Step 2: ANSWER

Open (or create) `coursework/sitting_1/what_i_understand/wiu_topic_1.1.md` and answer the following based on the structure in the Master Syllabus:
- Concept 1: Components (What are they? Why are they useful for CureSlot?)
- Concept 2: JSX Rules (What are the 3 main rules?)
- Concept 3: Embedding JS (How do you use variables in JSX?)

---

## ⚔️ Step 4: APPLY (Micro-Tasks)

Let's write our first components for the CureSlot Dashboard!

Create a file at `coursework/sitting_1/exercises/dashboard_shell.jsx` (or `.js`) and complete the following quests. You don't need a running React app yet; just write the valid code.

### 🎯 Quest 1: The Header
Create a functional component named `Header`. It should return a `<header>` element with a `className` of "dashboard-header". Inside, include an `<h1>` that says "CureSlot Admin".

### 🎯 Quest 2: The Sidebar Profile
Create a component named `SidebarProfile`. 
1. Define a variable `clinicName` set to "City Health Clinic".
2. Return a `<div>` with `className` "profile-section".
3. Inside, display an `<img>` tag (use any placeholder URL, remember to close the tag).
4. Display the `clinicName` variable in an `<h2>` tag using curly braces `{}`.

### 🎯 Quest 3: The Dashboard Layout
Create a component named `DashboardLayout`. 
It must return *both* the `Header` component and the `SidebarProfile` component you just created.
*Hint: Remember the JSX single-root rule! You will need a wrapper.*

---

## ✅ Next Steps
1. Read the required docs.
2. Write your `wiu_topic_1.1.md` file.
3. Write your code for the 3 Quests in `exercises/dashboard_shell.jsx`.
4. Let me know when you are done with Steps 1-4 so I can VERIFY your work and award your XP!
