# WIU Topic 2.3 - The Fetch API & Data Fetching

## Concept 1: Making GET Requests & Parsing `.json()`
- **My Explanation**: We make an asynchronous HTTP call using `fetch(url)` which returns a Promise resolving to a Response object. We then call `await response.json()` to parse the stream into usable JavaScript objects/arrays.
- **Key Takeaway (React Relevance)**: Essential for pulling data from external APIs inside `useEffect` or server actions to populate UI components.
- **My Doubts**: Cleared! Understood that `fetch()` and `response.json()` both return Promises and both require `await`.

---

## Concept 2: Checking `response.ok` & Error Handling
- **My Explanation**: `fetch()` does NOT reject on 404 or 500 status codes. We must manually check `if (!response.ok)` and throw a custom Error, then re-throw inside `catch` blocks so errors bubble up properly.
- **Key Takeaway (React Relevance)**: Crucial for rendering error states or fallback UIs (e.g. "User Not Found" or toast notifications) instead of letting apps crash silently.
- **My Doubts**: Cleared! Understood that swallowing errors in `catch` blocks prevents callers from knowing a request failed.

---

## Concept 3: Sending POST Requests with JSON
- **My Explanation**: Pass an options object to `fetch()` with `method: "POST"`, `headers: { "Content-Type": "application/json" }`, and `body: JSON.stringify(data)` to send data to a backend server.
- **Key Takeaway (React Relevance)**: Form submissions, user authentication, and data creation in React apps rely on POST requests.
- **My Doubts**: Cleared! Understood how to pass dynamic arguments into `JSON.stringify({ title, body })` and receive the newly created item with its server-generated ID.
