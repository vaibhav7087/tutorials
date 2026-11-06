# Topic 2.3: The Fetch API & Real-World Data Fetching

> **Prerequisites:** Promises (Topic 2.1), Async/Await & `try/catch` (Topic 2.2).
> **Estimated Time:** 1 Hour (20 min reading/WIU + 40 min challenge)

---

## Learning Objectives

By the end of this topic, you will be able to:
- Make HTTP GET and POST requests using the browser / Node native `fetch()` API.
- Parse JSON response bodies using `.json()`.
- Handle HTTP status errors (like 404 and 500) explicitly using `response.ok`.

---

## The Concepts

Fetching data from external APIs (like JSONPlaceholder, weather services, or backend endpoints) is a core requirement of almost every React application. Modern JavaScript provides the built-in `fetch()` function for network requests.

---

### 1. Basic GET Request & Parsing JSON

`fetch(url)` returns a Promise that resolves to a `Response` object representing the raw HTTP response. To read the JSON payload, you call `response.json()`, which returns *another* Promise resolving to the parsed data.

```javascript
async function getUsers() {
  // 1. Fetch raw response from network
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  
  // 2. Parse JSON body
  const users = await response.json();
  
  console.log("Fetched Users:", users);
}
```

---

### 2. Checking HTTP Errors (`response.ok`)

> ⚠️ **Critical Trap**: `fetch()` does **NOT** reject its Promise on HTTP error codes like `404 Not Found` or `500 Internal Server Error`. A `fetch()` Promise only rejects if there is a **network disconnection** or DNS failure!

To detect HTTP errors, you must manually check `response.ok` (which is `true` for status codes 200–299).

```javascript
async function getPost(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    
    // Explicitly check for HTTP status errors (e.g. 404)
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }
    
    const post = await response.json();
    return post;
  } catch (error) {
    console.error("Fetch failed:", error.message);
  }
}
```

---

### 3. Sending Data with POST Requests

To send data to an API (e.g., creating a new user or submitting a form), pass an options object as the second argument to `fetch()` with `method: "POST"`, `headers`, and a stringified JSON `body`.

```javascript
async function createPost(newPost) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newPost)
  });
  
  const createdItem = await response.json();
  return createdItem;
}
```

---

## 📚 Reading Checklist

- [ ] [MDN Reference: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [ ] [MDN Guide: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

---

## 🧠 Challenge: Users Data Transformer

### Your Task
Create an `async` function `fetchAndFilterUsers(url)` that fetches users from a mock REST API.

### Constraints
1. Fetch data from the provided `url`.
2. Check `response.ok`. If false, throw an Error `"Failed to fetch users"`.
3. Parse the JSON response.
4. Return an array of objects containing only `name` and `email` for users whose `id` is an **even number**.
5. Handle network errors gracefully using `try...catch`.

---

## 📖 Sources & Documentation

| Concept | Official Documentation |
|---------|----------------------|
| Fetch API | [MDN Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) |
| Using Fetch | [MDN Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) |
| Response Object | [MDN Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) |
