# Topic 1.2: Props & Composition

Welcome to Topic 1.2! Now that we know how to make UI components, how do we make them *dynamic*? How do we pass data into them so they don't just say the same hardcoded text every time?

The answer is **Props** (short for Properties).

## 📖 Step 1: LEARN

### 1. What are Props?
Props are how React components talk to each other. They allow you to pass data from a parent component down to a child component. 
Think of Props exactly like **arguments to a function**. 

```javascript
// 1. The Child Component ACCEPTS props
export function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// 2. The Parent Component PASSES props
export default function App() {
  return (
    <>
      <Greeting name="Vaibhav" />
      <Greeting name="Dr. Smith" />
    </>
  );
}
```

### 2. Destructuring Props (The Clean Way)
Typing `props.name` or `props.clinic` every time gets annoying. Since `props` is just a JavaScript object, we almost always **destructure** it right in the function signature:

```javascript
// Destructuring { name } directly!
export function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

### 3. Composition (Components inside Components)
Composition is the idea of building complex UIs by combining smaller, simpler components together. You already did this in Topic 1.1 when you put `<Header />` inside `<DashboardLayout />`! 

One special prop is called `children`. It allows you to pass elements *between* the opening and closing tags of a component:
```javascript
export function Card({ children }) {
  return <div className="card-wrapper">{children}</div>;
}

// Usage:
<Card>
   <h2>Card Title</h2>
   <p>This text is passed as the 'children' prop!</p>
</Card>
```

### 📚 Required Readings
1. [React Docs: Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component)

---
  
## 📝 Step 2: ANSWER

Open `coursework/sitting_1/what_i_understand/wiu_topic_1.2.md` and answer the concepts:
- Concept 1: Props (What are they? How do they flow?)
- Concept 2: The `children` prop (What makes it special?)

---

## ⚔️ Step 4: APPLY (Micro-Tasks)

Let's make our CureSlot dashboard dynamic!

Open `coursework/sitting_1/exercises/dynamic_dashboard.jsx` and complete the Quests. You will be upgrading the components you built in Topic 1.1 to accept Props.

---

## ✅ Next Steps
1. Read the docs.
2. Complete `wiu_topic_1.2.md`.
3. Complete the 3 Quests in `exercises/dynamic_dashboard.jsx`.
4. Let me know when you are done to get your XP!
