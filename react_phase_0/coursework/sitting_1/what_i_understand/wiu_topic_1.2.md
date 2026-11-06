# WIU Topic 1.2 - ES Modules (Imports & Exports)

## Concept 1: Named vs Default Exports
- **My Explanation**: <!-- Write your understanding here -->
so what i did understand is that when you want import multiple things and you exported multiple things you use curly brackets and use named imports in it and when u import only single import you dont use curly brackets and name them anything u want
- **Key Takeaway (React Relevance)**: <!-- How is this relevant to React? -->you import components class in react at that time you use default imports and multiple imports while importing multiple things
- **My Doubts**: <!-- Any questions/doubts you have -->

const subtract = (a, b) => a - b; this is called callbacks right//cleared

---

## Concept 2: Module Scope
- **My Explanation**: <!-- Write your understanding here -->
module scope basically ensures that when you import multiple files in browser with single global scope common variable names dont over ride each other till they explicitely want to and this is ensured with shield named module scope
- **Key Takeaway (React Relevance)**: <!-- How is this relevant to React? -->
react imports multiple components multiple class files and hence module scope is imported so we dont over ride common variable names shared withing them 
- **My Doubts**: <!-- Any questions/doubts you have -->
Before ES Modules (ESM), JavaScript files shared everything in a single global scope, making it easy to accidentally overwrite other scripts' variables. ES Modules give each file its own private **module scope**. Variables in a file are completely hidden unless you explicitly **export** them. didnt understand this part at all any example
//cleared 