# React Core: Master Learning Path & Syllabus

Learn React from absolute zero to building production-grade dashboards. Every concept you learn gets immediately applied to building the **CureSlot Admin Dashboard** — a real management panel for your existing WhatsApp appointment bot.

> 📚 **Curriculum Sources**: [roadmap.sh/react](https://github.com/kamranahmedse/developer-roadmap/tree/master/roadmaps/react/content) (363K★ GitHub repo) + [FreeCodeCamp React](https://www.freecodecamp.org/learn/front-end-development-libraries/#react) + [react.dev official docs](https://react.dev)

---

## 🎯 Capstone Project Blueprint

- **Project Name:** CureSlot Admin Dashboard
- **Resume Pitch:** A multi-role React dashboard for managing a production WhatsApp clinic bot — featuring doctor appointment views, admin CRM tools, real-time data fetching from Cloudflare D1, and role-based access. Demonstrates full-stack React competency with a live backend.
- **Key Architecture & Features:**
  - 🩺 **Doctor Dashboard**: Today's appointments, patient history, date blocking, walk-in management
  - 🏢 **Admin CRM Panel**: Clinic onboarding, staff management, appointment analytics, conversation logs
  - 📊 **Analytics View**: Cancellation rates, booking trends, slot utilization charts
  - 🔐 **Role-Based Access**: Doctor vs Admin views with Context-based auth
  - 🔌 **Real API Integration**: Fetches live data from your existing CureSlot Cloudflare Workers API

---

## 🗺️ Capstone Milestone Roadmap

| Sitting | Capstone Tier / Milestone | Primary Objective | Deliverable |
|---------|---------------------------|-------------------|-------------|
| **Sitting 1** | 🎯 **Milestone 1: React Foundations & Static Shell** | JSX, Components, Props, Project Setup | Static dashboard layout with mock data |
| **Sitting 2** | 🎯 **Milestone 2: Interactive UI & State** | State, Events, Conditional Rendering, Lists | Interactive appointment cards, filters, toggles |
| **Sitting 3** | 🎯 **Milestone 3: Side Effects & Live Data** | useEffect, API Calls, Loading/Error States | Dashboard connected to CureSlot API |
| **Sitting 4** | 🎯 **Milestone 4: Multi-Page App & Routing** | React Router, Layout Components, URL Params | Doctor Dashboard + Admin Dashboard routes |
| **Sitting 5** | 🎯 **Milestone 5: Forms & User Input** | Controlled Components, Form Validation, Mutations | Clinic onboarding form, slot blocking UI, walk-in form |
| **Sitting 6** | 🎯 **Milestone 6: Global State & Custom Hooks** | Context API, useReducer, Custom Hooks, Performance | Auth context, shared data hooks, memoization |
| **Sitting 7** | 🎯 **Milestone 7: Polish, Patterns & Next.js Readiness** | Error Boundaries, Suspense, Advanced Patterns, Pre-Next.js | Analytics view, final polish, Next.js migration prep |

---

## 🎮 Gamification Engine

- **Current Rank Goal:** Novice Explorer ➔ Senior Master Architect
- **Micro-Tasks:** 15-30 minute Quests for instant dopamine hits `[x]`
- **XP Rules:**
  - 📖 Approved WIU: **+50 XP**
  - ⚡ Micro-Task Completed: **+50 XP**
  - 🧪 Challenge Exercise Completed: **+100 XP**
  - 💣 BREAK IT Experiment: **+50 XP**
  - 📓 Error Journal Entry: **+25 XP**
  - 🏆 Capstone Milestone Unlocked: **+300 XP**

---

## 🧠 Learning Methodology

Every topic in this coursework follows a **9-step cycle**. Do NOT skip steps — the ones that feel annoying (RECALL, ERROR LOG) make the biggest difference.

| Step | What You Do | Time | Gamification |
|------|------------|------| -------------|
| **1. LEARN** | Read the topic document + required external docs | 40 min | — |
| **2. ANSWER** | Write a structured WIU (What I Understand) | 20 min | +50 XP |
| **3. REVIEW** | Get doubts resolved and misconceptions corrected | — | — |
| **4. APPLY** | Solve micro-task quests in the challenge | 50 min | +50 XP / Quest |
| **5. VERIFY** | Get challenge reviewed by AI teacher | — | — |
| **6. REVISE** | Update your submission with corrections | 15 min | — |
| **7. BREAK IT** | Intentionally break code on local branch | 20 min | +50 XP |
| **8. ERROR LOG** | Record mistakes + underlying reason | 5 min | +25 XP |
| **9. RECALL** | Re-answer previous self-assessments from memory | 10 min | — |

### 📝 WIU (What I Understand) File Format
Structure every `coursework/sitting_X/what_i_understand/wiu_topic_X.Y.md` like this:
```markdown
# WIU Topic [X.Y] - [Topic Name]

## Concept 1: [Concept Name]
- **My Explanation**: [Explain this concept in your own words]
- **Key Takeaway**: [Why does this matter for the CureSlot Dashboard?]
- **My Doubts**: [Any questions or things you are confused about]
```

### 📓 Error Log Format
Use `coursework/error_journal.md` to track mistakes:
```markdown
- ❌ [What I got wrong]
  → WHY I was wrong: [The underlying reason]
  → PATTERN: [Category — e.g., "stale closure", "missing dependency array", "wrong re-render"]
```

---

## 🔀 Version Control Rule
- Commit code after every completed topic micro-task.
- Never commit broken code to the `main` branch.
- Use feature branches for BREAK IT experiments.

---

## 📅 SITTING 1: React Foundations & JSX
*Target Milestone: 🎯 Milestone 1 — React Foundations & Static Shell*
*Estimated Time: 3-4 hours*
*Source: [roadmap.sh — Components](https://roadmap.sh/react), [react.dev — Quick Start](https://react.dev/learn), [FreeCodeCamp React](https://www.freecodecamp.org/learn/front-end-development-libraries/#react)*

### Topic 1.1: JSX & Your First Component (45 min)
- **What is React**: Library vs Framework, Virtual DOM concept, why React exists
- **JSX Syntax**: Embedding expressions `{}`, JSX rules (single root, className, self-closing tags)
- **Creating Components**: Function components, naming conventions, export/import
- **Rendering**: ReactDOM.createRoot, mounting a component to the DOM

### Topic 1.2: Props & Component Composition (45 min)
- **Props**: Passing data parent→child, destructuring props, default values
- **Children Prop**: `props.children` for wrapper/layout components
- **Component Composition**: Building complex UIs from small, reusable pieces
- **Props vs Hardcoding**: Why components should be configurable

### Topic 1.3: Conditional Rendering & Lists (45 min)
- **Conditional Rendering**: `&&`, ternary `? :`, early return patterns
- **Rendering Lists**: `.map()` for dynamic lists, the `key` prop and why it matters
- **Rendering Nothing**: Returning `null`, filtering before mapping

> **Capstone Deliverable for Sitting 1**: Static CureSlot dashboard shell — Sidebar, Header, AppointmentCard component, DoctorSchedule list rendered from mock data arrays.

### ✅ Self-Assessment — Sitting 1
- [ ] Why does JSX need a single root element? What happens if you don't wrap in a fragment?
- [ ] If a parent passes `name="Dr. Shah"` to a child, how does the child access it? What if the parent doesn't pass it?
- [ ] Why does React need a `key` when rendering a list? What breaks if you use the array index as key?

---

## 📅 SITTING 2: State, Events & Interactivity
*Target Milestone: 🎯 Milestone 2 — Interactive UI & State*
*Estimated Time: 3-4 hours*
*Source: [roadmap.sh — Props vs State, Events, Hooks](https://roadmap.sh/react), [react.dev — Adding Interactivity](https://react.dev/learn/adding-interactivity)*

### Topic 2.1: useState & Event Handling (60 min)
- **useState Hook**: Declaring state, updater function, state is per-component
- **Events**: onClick, onChange, onSubmit, event object, preventing defaults
- **State Updates**: Why state updates are asynchronous, batching, functional updates `prev => prev + 1`
- **Immutability**: Why you never mutate state directly (arrays, objects)

### Topic 2.2: State Design & Lifting State Up (45 min)
- **Thinking About State**: What should be state vs derived value vs prop?
- **Lifting State Up**: Sharing state between siblings via parent
- **Controlled Components**: Inputs driven by React state
- **Props vs State**: When to use which, data flow direction (one-way)

### Topic 2.3: Complex State with Objects & Arrays (45 min)
- **Updating Objects in State**: Spread operator `{...obj, key: newValue}`
- **Updating Arrays in State**: `.map()`, `.filter()`, spread for immutable updates
- **Multiple State Variables vs Object State**: Design trade-offs
- **useReducer Introduction**: When state logic gets complex (dispatch/action pattern)

> **Capstone Deliverable for Sitting 2**: Interactive appointment cards with status toggling, filter controls (Today/Tomorrow/All), appointment search by patient name, controlled input fields.

### ✅ Self-Assessment — Sitting 2
- [ ] Why can't you write `count = count + 1` and must use `setCount(count + 1)` instead?
- [ ] If two sibling components both need to read the same piece of state, where should that state live?
- [ ] When updating an array in state, why do you need `.filter()` or `.map()` instead of `.push()` or `.splice()`?

---

## 📅 SITTING 3: Side Effects & Data Fetching
*Target Milestone: 🎯 Milestone 3 — Side Effects & Live Data*
*Estimated Time: 3-4 hours*
*Source: [roadmap.sh — Component Lifecycle, API Calls, Hooks](https://roadmap.sh/react), [react.dev — Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)*

### Topic 3.1: useEffect & Component Lifecycle (60 min)
- **Why useEffect**: Synchronizing with external systems (APIs, timers, DOM)
- **Dependency Array**: `[]` (mount only), `[dep]` (on change), no array (every render)
- **Cleanup Functions**: Preventing memory leaks (timers, subscriptions, abort controllers)
- **Common Pitfalls**: Infinite loops, stale closures, missing dependencies

### Topic 3.2: Data Fetching with useEffect (60 min)
- **Fetch Pattern**: `useEffect` + `fetch` + loading/error/data state triple
- **AbortController**: Cancelling in-flight requests on unmount
- **Race Conditions**: Why cleanup matters when component re-renders fast
- **Custom Data Fetching Hook**: Extracting `useFetch(url)` for reuse

### Topic 3.3: useRef & Refs (45 min)
- **useRef Hook**: Mutable values that don't trigger re-renders
- **DOM Refs**: Accessing real DOM elements (focus, scroll, measure)
- **Ref vs State**: When to use which (timers, previous values, DOM access)
- **forwardRef**: Passing refs to child components

> **Capstone Deliverable for Sitting 3**: CureSlot dashboard fetching live appointment data from your Cloudflare Worker API, with loading spinners, error messages, and auto-refresh.

### ✅ Self-Assessment — Sitting 3
- [ ] What happens if you call `fetch()` inside useEffect without a dependency array? Why is this dangerous?
- [ ] Why do you return a cleanup function from useEffect? Give a real example of a memory leak without it.
- [ ] When would you use `useRef` instead of `useState`? Why doesn't changing a ref cause a re-render?

---

## 📅 SITTING 4: Routing & Multi-Page Layout
*Target Milestone: 🎯 Milestone 4 — Multi-Page App & Routing*
*Estimated Time: 3-4 hours*
*Source: [roadmap.sh — React Router, Frameworks](https://roadmap.sh/react), [React Router docs](https://reactrouter.com/)*

### Topic 4.1: React Router Fundamentals (60 min)
- **Why Client-Side Routing**: SPA navigation without page reloads
- **BrowserRouter, Routes, Route**: Setting up route configuration
- **Link & NavLink**: Navigation components, active states
- **Nested Routes & Outlet**: Shared layouts for dashboard sections

### Topic 4.2: Dynamic Routes & Navigation (45 min)
- **URL Parameters**: `/appointments/:id`, useParams()
- **Programmatic Navigation**: useNavigate() for redirects
- **Search Params**: useSearchParams() for query strings (filters, pagination)
- **404 Pages**: Catch-all routes for unknown paths

### Topic 4.3: Layout Patterns & Protected Routes (45 min)
- **Layout Routes**: Shared sidebar/header across pages
- **Protected Routes**: Redirecting unauthenticated users (pattern, not full auth)
- **Index Routes**: Default content for parent routes
- **Route Organization**: File structure patterns for scalability

> **Capstone Deliverable for Sitting 4**: Multi-page CureSlot app with Doctor Dashboard (`/doctor`) and Admin Dashboard (`/admin`) routes, shared sidebar layout, appointment detail pages via dynamic routes.

### ✅ Self-Assessment — Sitting 4
- [ ] What is the difference between `<Link to="/about">` and `<a href="/about">`? Why does React Router exist?
- [ ] How do nested routes work with `<Outlet />`? Draw the component tree for a layout with sidebar + content area.
- [ ] If you need to redirect a user to `/login` after checking they're not authenticated, how would you implement a ProtectedRoute wrapper?

---

## 📅 SITTING 5: Forms, Validation & Mutations
*Target Milestone: 🎯 Milestone 5 — Forms & User Input*
*Estimated Time: 3-4 hours*
*Source: [roadmap.sh — Forms, React Hook Form](https://roadmap.sh/react), [react.dev — Reacting to Input](https://react.dev/learn/reacting-to-input-with-state)*

### Topic 5.1: Controlled Forms & Validation (60 min)
- **Controlled Inputs**: `value` + `onChange` for text, select, checkbox, radio
- **Form Submission**: `onSubmit`, `preventDefault`, collecting form data
- **Client-Side Validation**: Required fields, pattern matching, error messages
- **Multi-Field Forms**: Managing form state with objects or useReducer

### Topic 5.2: React Hook Form (45 min)
- **Why a Form Library**: Reducing boilerplate, performance (uncontrolled under the hood)
- **register, handleSubmit, errors**: Core React Hook Form API
- **Validation Rules**: required, minLength, pattern, custom validate functions
- **Form State**: isSubmitting, isDirty, isValid — UX improvements

### Topic 5.3: API Mutations & Optimistic Updates (45 min)
- **POST/PUT/DELETE Requests**: Sending data to the backend
- **Mutation Pattern**: Loading state, success/error handling, cache invalidation
- **Optimistic Updates**: Updating UI before server confirms (undo on error)
- **Toast Notifications**: Success/error feedback patterns

> **Capstone Deliverable for Sitting 5**: Clinic onboarding form (multi-field, validated), slot blocking form with date picker, walk-in patient form, all POSTing to CureSlot API with success/error toasts.

### ✅ Self-Assessment — Sitting 5
- [ ] What is the difference between a controlled and uncontrolled input in React? Which does React Hook Form use internally?
- [ ] After a successful POST request that adds a new appointment, how do you ensure the appointments list on screen is updated?
- [ ] What is an optimistic update? Why would you use it, and what must you handle if the server request fails?

---

## 📅 SITTING 6: Context, Custom Hooks & Performance
*Target Milestone: 🎯 Milestone 6 — Global State & Custom Hooks*
*Estimated Time: 3-4 hours*
*Source: [roadmap.sh — Context, State Management, Hooks Best Practices](https://roadmap.sh/react), [react.dev — Managing State](https://react.dev/learn/managing-state)*

### Topic 6.1: Context API Deep Dive (60 min)
- **createContext & Provider**: Creating and providing global values
- **useContext**: Consuming context in any nested component
- **Context + useReducer**: Scalable global state management pattern
- **When NOT to Use Context**: Over-rendering, context splitting strategies

### Topic 6.2: Custom Hooks (45 min)
- **Extracting Logic into Hooks**: `useAppointments()`, `useAuth()`, `useLocalStorage()`
- **Hook Rules**: Only call at top level, only call from React functions
- **Composing Hooks**: Building complex hooks from simpler hooks
- **Testing Custom Hooks**: Verifying hook behavior in isolation

### Topic 6.3: Performance Optimization (45 min)
- **React.memo**: Preventing unnecessary child re-renders
- **useMemo**: Caching expensive calculations
- **useCallback**: Stabilizing function references for child components
- **When to Optimize**: Profiling first, premature optimization pitfalls

> **Capstone Deliverable for Sitting 6**: Auth context (role-based: doctor/admin), `useAppointments` custom hook, `useCureSlotAPI` hook, memoized appointment list rendering.

### ✅ Self-Assessment — Sitting 6
- [ ] If you put a value in Context and it changes, which components re-render? All of them, or only the ones that useContext?
- [ ] What is the difference between `useMemo` and `useCallback`? When would you use each?
- [ ] You have a custom hook `useAppointments()` that fetches and returns appointments. What state does it manage internally? How does the consuming component use it?

---

## 📅 SITTING 7: Advanced Patterns & Next.js Readiness
*Target Milestone: 🎯 Milestone 7 — Polish, Patterns & Next.js Readiness*
*Estimated Time: 3-4 hours*
*Source: [roadmap.sh — Error Boundaries, Suspense, Portals, HOCs, Frameworks](https://roadmap.sh/react), [react.dev — Escape Hatches](https://react.dev/learn/escape-hatches)*

### Topic 7.1: Error Boundaries & Suspense (45 min)
- **Error Boundaries**: Class component pattern for catching render errors
- **Suspense**: Declarative loading states, `<Suspense fallback={...}>`
- **Error + Suspense**: Combining for robust UX (loading → content → error)
- **React.lazy**: Code splitting, dynamic imports

### Topic 7.2: Advanced Patterns (45 min)
- **Render Props**: Sharing behavior via function-as-children
- **Higher-Order Components (HOCs)**: Wrapping components for cross-cutting concerns
- **Compound Components**: Components that work together (Tabs, Accordion)
- **Portals**: Rendering outside the DOM hierarchy (modals, tooltips)

### Topic 7.3: Next.js Readiness & What Changes (60 min)
- **React vs Next.js**: What Next.js adds on top of React
- **Server Components vs Client Components**: `"use client"` directive
- **File-Based Routing**: How Next.js replaces React Router
- **Data Fetching in Next.js**: Server-side fetch vs useEffect client fetch
- **What Transfers Directly**: Components, hooks, state, context — everything you learned

> **Capstone Deliverable for Sitting 7**: Analytics dashboard view (charts/stats), error boundaries around data sections, code-split routes, final polish — and a written plan for migrating this React app to Next.js.

### ✅ Self-Assessment — Sitting 7
- [ ] Why are Error Boundaries class components and not functional components? What kind of errors do they catch (and not catch)?
- [ ] What is the difference between a React SPA with React Router and a Next.js app with file-based routing?
- [ ] If you were to migrate this CureSlot dashboard to Next.js, which components would be Server Components and which would need `"use client"`? Why?

---

## 🎤 POST-PROJECT: Teach-Back Interview & Resume Pitch
*Estimated Time: 30 min*
*Goal: Prove you can explain React concepts from memory and pitch the CureSlot Dashboard as a portfolio project.*

20 rapid-fire questions from memory spanning all 7 sittings. Close all files and notes.
Passing: 16/20 = mastery. 12-15 = solid. Below 12 = review needed.
