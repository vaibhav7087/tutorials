const products = [
  { name: "Laptop", stock: 10 },
  { name: "Mouse", stock: 0 },
  { name: "Keyboard", stock: 5 }
];
const name=products.find((product)=>{ return product.name=="Mouse"});
console.log(name);
const outofstock= products.some((product)=>{ return product.stock==0;})
console.log("some products are out of stock"+outofstock);
const eoutofstock=products.every((product)=>{ return product.stock==0;})
console.log("from every product out of stock"+eoutofstock);