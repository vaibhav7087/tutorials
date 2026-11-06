let cart=["laptop 1","mouse 2","keyboard 1"];
console.log("original cart:")
for (let index = 0; index < cart.length; index++) {
    const element = cart[index];
    console.log("item:"+ element)
    
}
let newcart=[...cart,"headphones 1"];
console.log("new cart:")
for (let index = 0; index < newcart.length; index++) {
    const element = newcart[index];
    console.log("item:"+ element)
    
}
let newcart2=["laptop 1","keyboard 1"];
console.log("original cart:")
for (let index = 0; index < newcart2.length; index++) {
    const element = newcart2[index];
    console.log("item:"+ element)
    
}   