//Users
const users = [
  {
    id: 1,
    name: "Alice",
    active: true
  },
  {
    id: 2,
    name: "Bob",
    active: false
  },
  {
    id: 3,
    name: "Charlie",
    active: true
  },
  {
    id: 4,
    name: "David",
    active: true
  }
];
//Products
const products = [
  {
    id: 101,
    name: "Laptop",
    price: 50000
  },
  {
    id: 102,
    name: "Mouse",
    price: 1000
  },
  {
    id: 103,
    name: "Keyboard",
    price: 2500
  },
  {
    id: 104,
    name: "Headphones",
    price: 3000
  }
];
//Orders
const orders = [
  {
    id: 1,
    userId: 1,
    items: [
      {
        productId: 101,
        quantity: 1
      },
      {
        productId: 102,
        quantity: 2
      }
    ],
    total: 52000
  },

  {
    id: 2,
    userId: 3,
    items: [
      {
        productId: 103,
        quantity: 2
      },
      {
        productId: 104,
        quantity: 1
      }
    ],
    total: 8000
  },

  {
    id: 3,
    userId: 1,
    items: [
      {
        productId: 102,
        quantity: 3
      }
    ],
    total: 3000
  },

  {
    id: 4,
    userId: 4,
    items: [
      {
        productId: 104,
        quantity: 2
      },
      {
        productId: 103,
        quantity: 1
      }
    ],
    total: 8500
  }

];
function checkactive(users){
   if (users.active==true){
    return users.name;
   }
   
}
const revenue= orders.reduce((trevenue,order)=>{ return trevenue+order.total},0)
console.log("total revenue is "+revenue);
console.log("active users:");
const active_users=users.filter(checkactive);
for (let index = 0; index < active_users.length; index++) {
    const element = active_users[index];
    console.log(element.name);
    
}
//Challenge 3 (Very Important)

//Input:

const products1 = [
  {
    category: "Electronics",
    name: "Laptop"
  },
  {
    category: "Electronics",
    name: "Mouse"
  },
  {
    category: "Books",
    name: "Atomic Habits"
  }
];

// Build:

// {
//   Electronics: 2,
//   Books: 1
// }
const count=products1.reduce((acc,product1)=>{

  let count=0;
  if(acc[product1.category])
  {
    acc[product1.category]+=1;
  }
  else
  {
    acc[product1.category]=1;
  }
  return acc;
},{});
console.log (count);