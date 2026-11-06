/**
 * Challenge: Users Data Transformer
 * Topic: 2.3 Fetch API
 * 
 * PROBLEM STATEMENT:
 * Create an async function `fetchAndFilterUsers(url)` that fetches users from a REST API URL.
 * 
 * CONSTRAINTS:
 * 1. Must use `fetch()` and `await response.json()`.
 * 2. Check `response.ok`. If false, throw an Error with message `"Failed to fetch users"`.
 * 3. Filter the user array to include ONLY users whose `id` is an EVEN number (id % 2 === 0).
 * 4. Map the resulting objects to contain only `{ name: user.name, email: user.email }`.
 * 5. Return the mapped array.
 */

// ==========================================
// WRITE YOUR CODE HERE:
// ==========================================

async function fetchAndFilterUsers(url) {

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const users = await response.json();
    const eventusers = users.filter(user => user.id % 2 === 0);
    const result = eventusers.map(user => ({ name: user.name, email: user.email }))
    console.log("user:", users)
    return result;
  } catch (error) {
    console.log(error.message);
    throw error;
  }

}


// ==========================================
// TEST SUITE - Do not modify this verification block!
// ==========================================
(async () => {
  try {
    if (typeof fetchAndFilterUsers !== "function") throw new Error("fetchAndFilterUsers is not defined!");

    // Test 1: Successful Fetch & Filter
    try {
      const result = await fetchAndFilterUsers("https://jsonplaceholder.typicode.com/users");

      const isArray = Array.isArray(result);
      const isFilteredLength = result && result.length === 5; // 5 even IDs out of 10 users
      const hasProperKeys = result && result.every(u => Object.keys(u).length === 2 && u.name && u.email);

      console.log("Test 1 (Array Output):", isArray ? "✅ PASS" : "❌ FAIL");
      console.log("Test 2 (Filtered Even IDs Count = 5):", isFilteredLength ? "✅ PASS" : `❌ FAIL (Length: ${result ? result.length : 0})`);
      console.log("Test 3 (Keys contain only name & email):", hasProperKeys ? "✅ PASS" : "❌ FAIL");
    } catch (err) {
      console.log("Test 1/2/3 Failed with Error:", err.message);
    }

    // Test 4: Error Handling on 404 URL
    try {
      await fetchAndFilterUsers("https://jsonplaceholder.typicode.com/invalid_endpoint_404");
      console.log("Test 4 (404 Error handling): ❌ FAIL (Resolved invalid URL instead of throwing)");
    } catch (err) {
      console.log("Test 4 (404 Error handling):", err instanceof Error && err.message === "Failed to fetch users" ? "✅ PASS" : "❌ FAIL");
    }

  } catch (err) {
    console.error("❌ TEST RUN ERROR:", err.message);
  }
})();
