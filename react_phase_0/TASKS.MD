Day 2: Async JavaScript & Modern Patterns

Goal: Be comfortable with APIs and understand how React uses functions.

1. Higher Order Functions (30 min)
Mini Task 1: Function as a Value

Create a function:

greet()

and store it inside a variable.

Print the result.

Concept: Functions are just values.

Mini Task 2: Callback

Create a function:

calculate(a, b, operation)

Pass different functions:

add
subtract

Goal: Understand passing functions around.

Mini Task 3: Function Returning Function

Create:

multiplyBy(2)

which returns a new function.

Example:

double = multiplyBy(2)

double(5)
→ 10

Outcome: React event handlers and custom hooks become easier.

62. Closures (45 min)
Mini Task 1: Counter

Create:

createCounter()

that returns a function.

Every time you call it:

1
2
3
4
...

Question:

How is count remembered?
Mini Task 2: Bank Account

Create:

createAccount()

Functions:

deposit()
withdraw()
balance()

Balance should be private.

You should NOT be able to do:

account.balance = 100000
Mini Task 3: Secret Password

Create:

createLogin("1234")

Returns:

checkPassword()

that can access the password even after the outer function finishes.

3. Promises (45 min)
Mini Task 1: Fake Food Delivery

Create a promise:

Ordering pizza...

After 3 seconds:

Pizza delivered.
Mini Task 2: Fake Failure

50% chance:

Payment successful

50% chance:

Payment failed

Handle both.

Mini Task 3: Chaining
Get User
↓
Get User Posts
↓
Get Post Comments

Simulate with promises.

4. Async / Await (45 min)
Mini Task 1

Rewrite:

Pizza delivery promise

using:

async
await
Mini Task 2

Create:

getStudent()

Wait 2 seconds and return:

{
  name: "Tany",
  cgpa: 10
}
Mini Task 3

Handle errors with:

try
catch

Simulate:

Network Error
5. Fetch API (1 Hour)

Use:

https://jsonplaceholder.typicode.com
Task 1: GET Users

Fetch:

/users

Print:

name
email
Task 2: GET Posts

Fetch:

/posts

Print first 5 titles.

Task 3: Find User

Fetch users and use:

find()

to find:

id = 5
Task 4: Filter Posts

Fetch posts.

Print only:

userId = 1
Task 5: POST Request

Send:

{
  title: "Learning Next.js",
  body: "Day 2 complete"
}

to:

/posts

Print response.

Task 6: Error Handling

Change URL intentionally:

/postss

Handle:

404

without crashing.

6. ES Modules (30 min)

Create three files.

math.js

Contains:

add
subtract
multiply
user.js

Contains:

getName()
app.js

Import everything and test.

Bonus

Try:

named exports
default exports
7. Mini Project (1-2 Hours)

Pick ONE.

Option 1: Todo App ⭐ (Recommended)

Features:

Add todo
Delete todo
Mark completed
Save in localStorage
Load on refresh

Methods used:

map
filter
find
some
Option 2: Weather App

Features:

Search city
Fetch weather API
Show temperature
Show error state

Methods used:

fetch
async/await
try/catch
Option 3: Notes App

Features:

Add note
Delete note
Search note
Persist in localStorage

Methods used:

filter
find
map
Success Criteria

You should be able to answer:

✅ What is a callback?
✅ What is a closure?
✅ Why do promises exist?
✅ Why is await cleaner than .then()?
✅ How do I fetch data from an API?
✅ How do modules work?