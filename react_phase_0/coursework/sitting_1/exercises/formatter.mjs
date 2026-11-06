/**
 * Exercise: formatter.mjs (Topic 1.2 ES Modules)
 * 
 * DESCRIPTION:
 * Create a function `formatResult(val)` that formats a number value into a readable string.
 * It should return: "The current count is: <val>"
 * 
 * CONSTRAINTS:
 * 1. Must export `formatResult` as a NAMED export.
 */
export function formatResult(val) {
    return `The current count is: ${val}`;
}