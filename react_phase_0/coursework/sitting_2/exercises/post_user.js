/**
 * Short Challenge: POST Request (Create a Post)
 * Topic: 2.3 Fetch API (POST Method)
 * 
 * PROBLEM STATEMENT:
 * Create an async function `createPost(title, body)` that sends a POST request to create a new post.
 * 
 * CONSTRAINTS:
 * 1. Endpoint: "https://jsonplaceholder.typicode.com/posts"
 * 2. Method: "POST"
 * 3. Headers: { "Content-Type": "application/json" }
 * 4. Body: JSON.stringify({ title, body })
 * 5. Parse and return the JSON response object!
 */

// ==========================================
// WRITE YOUR CODE HERE:
// ==========================================
async function createPost(title, body) {
  const response = await
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, body })
    });
  const responsejson = await response.json();
  return responsejson;
}


// ==========================================
// TEST SUITE - Do not modify this verification block!
// ==========================================
(async () => {
  try {
    if (typeof createPost !== "function") throw new Error("createPost is not defined!");

    const result = await createPost("Hello React", "Learning POST requests!");

    const isValid = result && result.title === "Hello React" && result.body === "Learning POST requests!" && result.id;

    console.log("POST Request Test:", isValid ? "✅ PASS" : "❌ FAIL");
    if (isValid) console.log("Created Item Response from Server:", result);
  } catch (err) {
    console.error("❌ TEST RUN ERROR:", err.message);
  }
})();
