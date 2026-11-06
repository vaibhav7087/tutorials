# WIU Topic 2.1 - Promises

## Concept 1: Promise States (Pending, Fulfilled, Rejected)
- **My Explanation**: So, basically, for promises, other things, we create promise with new object, new promise,  keyboard and past functions, resolve and reject, if an operation succeeds, then we resolve  to the process.  Then, if it fails,  it is  rejected.  Then, we pass it to the  error function.  and hence this is how promise is created.
- **Key Takeaway (React Relevance)**: The relevant promises are usually used to handle data sent by servers or any type of background task that will take a long time to execute.  We should not pause our current task or wait for that task to be completed.  Hence, we use promises to asynchronously execute operations. 
- **My Doubts**: i am struggling with callbacks explain the concept again 
function checkServerStatus(isOnline) {
  return new Promise((resolve, reject) => {
    // Simulate async network delay
    setTimeout(() => {
      if (isOnline) {
        resolve("Server is active"); // Fulfilled state
      } else {
        reject(new Error("Server is offline")); // Rejected state
      }
    }, 1000);
  });
}
did not understand the code like why does it take resolve and reject hwere is it and again tell me what is the purpose of this function and how it is used here. what is use of thousand at the end //solved
---

## Concept 2: Consuming and Creating Promises
- **My Explanation**:  So how do we handle promises?  We have three states of the promises, pending, fulfilled, and rejected ...  The state means it's all function bthat we got then and error, catch it, got then, signifies that  mission is successfully executed and hence we will now handle it using  then .if failed  then we use .error and .inrplot we handle any type of failur that arise in frame of  Then there is a finally example that executes no matter what like loading spinner  
- **Key Takeaway (React Relevance)**: how we handle asynchronous tasks 
- **My Doubts**: <!-- Any questions/doubts you have -->none
